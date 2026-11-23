/* Shared behavior for the four-page portfolio navigation. */
(() => {
  const body=document.body;
  const lang=()=>document.documentElement.lang==="ko"?"ko":"en";
  function translate(){
    const selected=lang();
    document.querySelectorAll("[data-v2-en][data-v2-ko]").forEach(el=>{
      const value=el.getAttribute("data-v2-"+selected);
      if(value===null)return;
      if(el.classList.contains("v2-career-goal-description")&&selected==="en"&&value.includes(" using ")){
        const split=value.indexOf(" using ");
        el.replaceChildren(
          document.createTextNode(value.slice(0,split)),
          document.createElement("br"),
          document.createTextNode(value.slice(split+1))
        );
      }else{
        el.textContent=value;
      }
    });
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
  if(body.dataset.v2Page==="home"){
    const hash=decodeURIComponent(location.hash.slice(1));
    const projectIds=["projects","proj-l10n","proj-pipeline","proj-interview","proj-usage"];
    const aboutIds=["background","skills"];
    if(projectIds.includes(hash))location.replace("./projects/#"+encodeURIComponent(hash));
    else if(sectionRoutes[hash])location.replace(sectionRoutes[hash]);
    else if(aboutIds.includes(hash))location.replace("./about/#"+encodeURIComponent(hash));
  }
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

  // Resize the complete Career Goal to a single line in Korean or English.
  const careerGoal=document.querySelector("body.v2-home .v2-career-goal-description");
  if(careerGoal){
    const textRange=document.createRange();
    let queued=false;
    function fitCareerGoal(){
      const available=careerGoal.clientWidth;
      if(!available)return;
      textRange.selectNodeContents(careerGoal);
      let lo=4,hi=20;
      // Binary search the largest readable size that fits the current text.
      for(let n=0;n<16;n++){
        const size=(lo+hi)/2;
        careerGoal.style.fontSize=size+"px";
        const measured=Math.max(0,...Array.from(textRange.getClientRects(),rect=>rect.width));
        if(measured<=available-2)lo=size;
        else hi=size;
      }
      careerGoal.style.fontSize=Math.max(4,Math.floor(lo))+"px";
    }
    function queueCareerFit(){
      if(queued)return;
      queued=true;
      requestAnimationFrame(()=>{queued=false;fitCareerGoal()});
    }
    queueCareerFit();
    document.fonts?.ready.then(queueCareerFit);
    window.addEventListener("resize",queueCareerFit,{passive:true});
    if("ResizeObserver" in window)new ResizeObserver(queueCareerFit).observe(careerGoal);
    new MutationObserver(queueCareerFit).observe(careerGoal,{childList:true,characterData:true,subtree:true});
  }

})();
