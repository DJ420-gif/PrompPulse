// aff-suite-ai-review-2026
window.addEventListener('scroll',function(){const h=document.documentElement.scrollHeight-window.innerHeight;const el=document.getElementById('progress');if(el)el.style.width=(scrollY/h*100)+'%';},{passive:true});
const obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('visible');});},{threshold:.08});
document.querySelectorAll('.sr').forEach(function(el){obs.observe(el);});
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+scrollY-80,behavior:'smooth'});}});});
