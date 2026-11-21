(function(){
var d=document.documentElement;
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('hl-js');

// Wait until the keyword's own text is visible (the hero copy fades in char by char)
// so the marker never shows up before the words it highlights.
function whenRevealed(k,cb){
  var tries=0;
  (function check(){
    var chars=k.querySelectorAll('.intro-char');
    if(!chars.length){
      if(k.closest('.reveal-text')&&tries++<40)return setTimeout(check,100);
      return cb();
    }
    var last=chars[chars.length-1];
    var anims=last.getAnimations?last.getAnimations():[];
    if(anims.length){
      Promise.all(anims.map(function(a){return a.finished})).then(function(){setTimeout(cb,80)},cb);
    }else if(getComputedStyle(last).opacity==='1'){
      cb();
    }else if(tries++<40){
      setTimeout(check,100);
    }else{cb()}
  })();
}

var io=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(!e.isIntersecting)return;
    var k=e.target;
    io.unobserve(k);
    whenRevealed(k,function(){k.classList.add('hl-on')});
  });
},{threshold:.9});

function watch(root){
  (root.querySelectorAll?root.querySelectorAll('strong.keyword:not([data-hl])'):[]).forEach(function(k){
    k.setAttribute('data-hl','1');
    var sibs=k.parentElement?k.parentElement.querySelectorAll('strong.keyword'):[];
    k.style.setProperty('--hl-delay',(Math.max(0,[].indexOf.call(sibs,k))*0.12)+'s');
    io.observe(k);
  });
}
watch(document);
new MutationObserver(function(ms){
  ms.forEach(function(m){
    m.addedNodes.forEach(function(n){
      if(n.nodeType!==1)return;
      if(n.matches&&n.matches('strong.keyword'))watch(n.parentNode);else watch(n);
    });
  });
}).observe(document.body,{childList:true,subtree:true});
})();
