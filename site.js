/* Shared behavior for the four-page portfolio navigation. */
(() => {
  const body=document.body;
  const lang=()=>document.documentElement.lang==="ko"?"ko":"en";
  function translate(){
    const selected=lang();
    document.querySelectorAll("[data-v2-en][data-v2-ko]").forEach(el=>{
      const value=el.getAttribute("data-v2-"+selected);
      if(value!==null)el.textContent=value;
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
  const filters=Array.from(document.querySelectorAll("[data-v2-filter]"));
  const timeline=Array.from(document.querySelectorAll("[data-v2-kind]"));
  function setFilter(filter){
    filters.forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.v2Filter===filter)));
    timeline.forEach(item=>item.classList.toggle("v2-filter-hide",filter!=="all"&&item.dataset.v2Kind!==filter));
  }
  filters.forEach(button=>button.addEventListener("click",()=>setFilter(button.dataset.v2Filter)));
  if(filters.length)setFilter("all");
  const details=document.querySelector(".v2-technical-detail");
  function revealHash(){
    if(!details||!location.hash)return;
    try{
      const id=decodeURIComponent(location.hash.slice(1));
      if(details.querySelector("#"+CSS.escape(id)))details.open=true;
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
    const aboutIds=["background","education","experience","skills","recognition"];
    if(projectIds.includes(hash))location.replace("./projects/#"+encodeURIComponent(hash));
    else if(aboutIds.includes(hash))location.replace("./about/#"+encodeURIComponent(hash));
  }
})();
