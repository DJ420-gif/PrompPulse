// GEMINI Review — PromptPulse
// Theme color: #F0C040

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

// TOC active highlight
const tocLinks = document.querySelectorAll('[data-toc]');
const headings = document.querySelectorAll('.art-body h2[id]');
window.addEventListener('scroll', () => {
  let current = '';
  headings.forEach(h => { if (scrollY >= h.offsetTop - 120) current = h.id; });
  tocLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// Animate score bars on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.sc-bar').forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        setTimeout(() => { bar.style.width = targetWidth; }, 150);
      });
    });
  }, 400);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + scrollY - 90,
        behavior: 'smooth'
      });
    }
  });
});
