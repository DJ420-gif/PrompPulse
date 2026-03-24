window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('progress').style.width=(scrollY/h*100)+'%';},{passive:true});
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');}),{threshold:.08});
document.querySelectorAll('.sr').forEach(el=>obs.observe(el));
document.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var item=q.parentElement;var isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});if(!isOpen)item.classList.add('open');});});
