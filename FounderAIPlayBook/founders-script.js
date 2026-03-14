// Progress bar
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = (scrollY / h * 100) + '%';
}, { passive: true });

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .08 });
document.querySelectorAll('.sr').forEach(el => obs.observe(el));

// TOC active state
const tocLinks = document.querySelectorAll('[data-toc]');
const headings = document.querySelectorAll('.art-body h2[id], .art-body h3[id]');
window.addEventListener('scroll', () => {
  let current = '';
  headings.forEach(h => { if (scrollY >= h.offsetTop - 120) current = h.id; });
  tocLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// Copy link
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const b = event.target;
    b.textContent = '✓';
    setTimeout(() => b.textContent = '🔗', 2000);
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' }); }
  });
});
