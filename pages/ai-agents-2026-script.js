// AI Agents 2026 — What They Are, Best Tools and How Developers Use Them
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('progress').style.width=(scrollY/h*100)+'%';},{passive:true});
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');}),{threshold:.08});
document.querySelectorAll('.sr').forEach(el=>obs.observe(el));
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{q.parentElement.classList.toggle('open');}) );
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+scrollY-80,behavior:'smooth'});}}));
