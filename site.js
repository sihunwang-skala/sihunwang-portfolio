/* Shared behavior for the four-page portfolio navigation. */
(() => {
  const body=document.body;
  const lang=()=>document.documentElement.lang==="ko"?"ko":"en";
  // Type only the homepage introduction; card text stays visible.
  // The unrevealed suffix retains its full width, preserving wrapping and layout.
  let typingFrame=0;
  let typingTracks=[];
  function finishTyping(){
    if(typingFrame)cancelAnimationFrame(typingFrame);
    typingFrame=0;
    typingTracks.forEach(track=>{
      track.parts.forEach(p=>{
        p.shown.nodeValue=p.chars.join("");
        p.pending.remove();
      });
      track.el.normalize();
    });
    typingTracks=[];
  }
  function typeHome(){
    finishTyping();
    if(!body.classList.contains("v2-home") ||
       matchMedia("(prefers-reduced-motion: reduce)").matches ||
       (location.hash && location.hash!=="#top"))return;
    const hero=document.querySelector(".v2-career-goal-description");
    if(!hero || hero.getBoundingClientRect().bottom<0)return;
    function addTrack(el,delay,speed,min,max){
      if(!el)return 0;
      const nodes=Array.from(el.childNodes).filter(n=>n.nodeType===Node.TEXT_NODE && n.textContent.length);
      const parts=nodes.map(node=>{
        const chars=Array.from(node.textContent);
        const shown=document.createTextNode("");
        const pending=document.createElement("span");
        pending.className="v2-typing-pending";
        pending.textContent=chars.join("");
        node.replaceWith(shown,pending);
        return {chars,shown,pending};
      });
      const total=parts.reduce((n,p)=>n+p.chars.length,0);
      if(!total)return 0;
      const duration=Math.min(max,Math.max(min,total*speed));
      typingTracks.push({el,parts,total,duration,delay,last:-1});
      return duration;
    }
    const phrases=Array.from(hero.querySelectorAll(".v2-typing-phrase"));
    if(phrases.length===4){
      // Fade in each complete phrase over 0.5 seconds, sequentially.
      phrases.forEach((phrase,index)=>{
        phrase.animate([{opacity:0},{opacity:1}],{
          duration:500,
          delay:index*500,
          easing:"ease-out",
          fill:"backwards"
        });
      });
      return;
    }else{
      addTrack(hero,0,8,650,1350);
    }
    if(!typingTracks.length)return;
    let start=null;
    function tick(now){
      if(start===null)start=now;
      let done=true;
      typingTracks.forEach(track=>{
        const elapsed=now-start-track.delay;
        const count=track.duration===0
          ? (elapsed>=0?track.total:0)
          : Math.max(0,Math.min(track.total,Math.floor(elapsed/track.duration*track.total)));
        if(count<track.total)done=false;
        if(count===track.last)return;
        track.last=count;
        let left=count;
        track.parts.forEach(p=>{
          const n=Math.max(0,Math.min(p.chars.length,left));
          p.shown.nodeValue=p.chars.slice(0,n).join("");
          p.pending.textContent=p.chars.slice(n).join("");
          left-=p.chars.length;
        });
      });
      if(done)finishTyping();
      else typingFrame=requestAnimationFrame(tick);
    }
    typingFrame=requestAnimationFrame(tick);
  }
  function translate(){
    finishTyping();
    const selected=lang();
    document.querySelectorAll("[data-v2-en][data-v2-ko]").forEach(el=>{
      const value=el.getAttribute("data-v2-"+selected);
      if(value===null)return;
      if(el.classList.contains("v2-career-goal-description")){
        const split=selected==="en"?" using ":" A2A Communication으로";
        const at=value.indexOf(split);
        if(at<0){el.textContent=value;return;}
        if(selected==="en"){
          const mid=value.indexOf(" who designs ");
          const last=value.indexOf(" and connects ");
          if(mid<0||mid>=at||last<=at){el.textContent=value;return;}
          // Four sequential phrase reveals, arranged into two visual lines.
          const phrases=[value.slice(0,mid),value.slice(mid,at),value.slice(at,last).trimStart(),value.slice(last)];
          const parts=phrases.map(text=>{
            const span=document.createElement("span");
            span.className="v2-typing-phrase";
            span.textContent=text;
            return span;
          });
          el.replaceChildren(parts[0],parts[1],document.createElement("br"),parts[2],parts[3]);
        }else{
          el.replaceChildren(
            document.createTextNode(value.slice(0,at)),
            document.createElement("br"),
            document.createTextNode(value.slice(at))
          );
        }
      }else{
        el.textContent=value;
      }
    });
    typeHome();
    document.querySelectorAll("[data-v2-placeholder-en]").forEach(el=>{
      el.setAttribute("placeholder",el.getAttribute("data-v2-placeholder-"+selected)||"");
    });
  }
  translate();
  new MutationObserver(mutations=>{
    if(mutations.some(m=>m.attributeName==="lang"))translate();
  }).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  const menuBtn=document.querySelector("[data-v2-menu]");
  const sidebar=document.getElementById("v2-sidebar");
  function closeMenu(){body.classList.remove("v2-menu-open");menuBtn?.setAttribute("aria-expanded","false")}
  menuBtn?.addEventListener("click",()=>{
    const open=body.classList.toggle("v2-menu-open");
    menuBtn.setAttribute("aria-expanded",String(open));
  });
  sidebar?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
  document.addEventListener("keydown",ev=>{if(ev.key==="Escape")closeMenu()});
  document.addEventListener("click",ev=>{
    if(body.classList.contains("v2-menu-open")&&!sidebar?.contains(ev.target)&&!menuBtn?.contains(ev.target))closeMenu();
  });
  // Each sidebar section is a real page; preserve legacy About section URLs.
  const sectionRoutes={experience:"./experience/",education:"./education/",recognition:"./awards/"};
  function syncNav(){
    const active=body.dataset.v2Page;
    document.querySelectorAll("[data-v2-nav]").forEach(link=>{
      if(link.dataset.v2Nav===active)link.setAttribute("aria-current","page");
      else link.removeAttribute("aria-current");
    });
  }
  syncNav();
  if(body.dataset.v2Page==="about"){
    const oldHash=decodeURIComponent(location.hash.slice(1));
    if(sectionRoutes[oldHash])location.replace(sectionRoutes[oldHash]);
  }
  const details=document.querySelector(".v2-technical-detail");
  function revealHash(){
    if(!details||!location.hash)return;
    try{
      const id=decodeURIComponent(location.hash.slice(1));
      const target=details.querySelector("#"+CSS.escape(id));
      if(target){details.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:"start"}))}
    }catch{}
  }
  revealHash();
  window.addEventListener("hashchange",revealHash);
  document.querySelectorAll("[data-copy-email]").forEach(button=>{
    button.addEventListener("click",async()=>{
      const mail=button.dataset.copyEmail;
      try{await navigator.clipboard.writeText(mail);button.textContent=lang()==="ko"?"복사 완료":"Copied"}
      catch{location.href="mailto:"+mail}
    });
  });
  // Home now includes each destination as an on-page section;
  // preserve hash anchors instead of redirecting to a separate page.
  // Fit all three role/expertise/education labels on one uninterrupted line.
  // Measure actual glyph widths after web fonts load and when the viewport changes.
  const heroIdentity=document.querySelector("body.v2-home .v2-horizontal-identity");
  if(heroIdentity){
    function fitHeroIdentity(){
      const available=heroIdentity.getBoundingClientRect().width;
      const last=heroIdentity.lastElementChild;
      if(!available||!last)return;
      const left=heroIdentity.getBoundingClientRect().left;
      let lo=5,hi=54;
      for(let n=0;n<16;n++){
        const mid=(lo+hi)/2;
        heroIdentity.style.fontSize=mid+"px";
        const used=last.getBoundingClientRect().right-left;
        if(used<=available-1)lo=mid;else hi=mid;
      }
      heroIdentity.style.fontSize=Math.floor(lo*10)/10+"px";
    }
    let fitQueued=false;
    function queueHeroFit(){
      if(fitQueued)return;
      fitQueued=true;
      requestAnimationFrame(()=>{fitQueued=false;fitHeroIdentity()});
    }
    queueHeroFit();
    document.fonts?.ready.then(queueHeroFit);
    window.addEventListener("resize",queueHeroFit,{passive:true});
  }

  // Two explicit, language-specific line breaks are rendered directly.
  // Responsive CSS controls readable font size without shrinking below 20px.

})();
