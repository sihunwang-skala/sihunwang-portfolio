/* Minimal portfolio event notifications. No cookies, visitor IDs, or UI changes. */
(function installPortfolioNotifications(w) {
  const d=w.document,n=w.navigator,l=w.location;
  if(l.protocol!=="https:" || l.hostname!=="sihunwang-skala.github.io" || !l.pathname.startsWith("/sihunwang-portfolio/") || w.__portfolioNotifications) return;
  w.__portfolioNotifications=true;
  const endpoint="https://formsubmit.co/ajax/swwk10@gmail.com";
  const projects={
    "proj-health":"Health Agent","proj-l10n":"L10n Quality Agent","proj-pipeline":"Data Automation Pipeline","proj-interview":"Real-time Mock Interview","proj-lightweight-cnn":"Lightweight Neural Networks","proj-usage":"AI Usage Bar"
  };
  const local=new Map();
  const ua=n.userAgent||"";
  const browser=/Edg\//i.test(ua)?"Edge":/KAKAOTALK/i.test(ua)?"KakaoTalk":/LinkedInApp/i.test(ua)?"LinkedIn":/SamsungBrowser/i.test(ua)?"Samsung Internet":/Firefox|FxiOS/i.test(ua)?"Firefox":/Chrome|CriOS/i.test(ua)?"Chrome":/Safari/i.test(ua)?"Safari":"Other";
  const os=/Android/i.test(ua)?"Android":/iPhone|iPad|iPod/i.test(ua)?"iOS":/Windows/i.test(ua)?"Windows":/Macintosh|Mac OS X/i.test(ua)?"macOS":/Linux/i.test(ua)?"Linux":"Other";
  const device=n.userAgentData?.mobile||/Mobi|Android|iPhone|iPad/i.test(ua)?"Mobile":"Desktop";
  const parse=(s,base)=>{try{return new w.URL(s,base)}catch{return null}};
  const source=()=>{const u=d.referrer?parse(d.referrer,l.href):null;return u?(u.origin===l.origin?"Internal navigation":u.hostname):"Direct or unavailable"};
  const allowed=(key,ms)=>{
    const now=Date.now();let last=local.get(key)||0;
    try{last=Math.max(last,Number(w.sessionStorage.getItem("portfolio-notify:"+key))||0)}catch{}
    if(now-last<ms)return false;
    local.set(key,now);
    try{w.sessionStorage.setItem("portfolio-notify:"+key,String(now))}catch{}
    return true;
  };
  const send=(type,detail,key,ms=12000)=>{
    if(!allowed(key,ms))return;
    const fields={_subject:"Portfolio | "+type,_template:"table",event:type,detail,occurred_at:new Date().toISOString(),page:l.origin+l.pathname,referring_site:source(),device_type:device,operating_system:os,browser_or_app:browser,browser_language:n.language||"Unknown"};
    try{const body=new w.URLSearchParams(fields);void w.fetch(endpoint,{method:"POST",headers:{Accept:"application/json"},body,keepalive:true}).catch(()=>{});}catch{}
  };
  const targetProject=(anchor,url)=>{
    const card=anchor.closest("[id^='proj-']");
    if(card&&projects[card.id])return projects[card.id];
    if(url.origin===l.origin){
      if(url.pathname.endsWith("/health-agent/")||url.pathname.endsWith("/health-agent/index.html"))return projects["proj-health"];
      if(url.pathname.endsWith("/l10n-agent/")||url.pathname.endsWith("/l10n-agent/index.html"))return projects["proj-l10n"];
      if(projects[url.hash.slice(1)])return projects[url.hash.slice(1)];
    }
    if(url.hostname==="github.com"){
      const p=url.pathname.toLowerCase();
      if(p.startsWith("/sihunwang-skala/realtime-mock-interview"))return projects["proj-interview"];
      if(p.startsWith("/sihunwang-skala/ai-usage-bar"))return projects["proj-usage"];
      if(p.startsWith("/sihunwang-skala/l10n-quality-agent"))return projects["proj-l10n"];
      if(p.startsWith("/sihunwang-skala/health-coach-multi-agent"))return projects["proj-health"];
    }
    return null;
  };
  const onClick=e=>{
    if(!e.isTrusted||(e.type==="auxclick"&&e.button!==1)||(e.type==="click"&&e.button!==0))return;
    const a=e.target?.closest?.("a[href]");
    if(!a)return;
    const u=parse(a.href,l.href);
    if(!u)return;
    if(u.origin===l.origin && /\/Resume_Sihun_Wang\.pdf$/i.test(u.pathname) && a.hasAttribute("download")){
      // The dialog sends one notification, including optional fields, on Continue.
      if(e.type==="click" && a.matches(".v2-resume-link") && typeof d.querySelector("[data-resume-dialog]")?.showModal==="function")return;
      send("Resume download click","Resume PDF","resume-download",3000);return;
    }
    const p=targetProject(a,u);
    if(p)send("Project click",p,"project:"+p,5000);
  };
  d.addEventListener("click",onClick,true);
  d.addEventListener("auxclick",onClick,true);
  send("Website visit","Portfolio entry","website-visit",30*60*1000);
})(window);
