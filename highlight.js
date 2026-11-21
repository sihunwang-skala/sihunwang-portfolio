(function(){
var d=document.documentElement;
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('hl-js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('hl-on');io.unobserve(e.target)}})},{threshold:.9});
function watch(root){(root.querySelectorAll?root.querySelectorAll('strong.keyword:not([data-hl])'):[]).forEach(function(k){
k.setAttribute('data-hl','1');
var sibs=k.parentElement?k.parentElement.querySelectorAll('strong.keyword'):[];
k.style.setProperty('--hl-delay',(Math.max(0,[].indexOf.call(sibs,k))*0.12)+'s');
io.observe(k)})}
watch(document);
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType===1){if(n.matches&&n.matches('strong.keyword'))watch(n.parentNode);else watch(n)}})})}).observe(document.body,{childList:true,subtree:true});
})();
