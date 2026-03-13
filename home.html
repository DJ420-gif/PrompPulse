<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Ultimate Coding AI Prompt Guide</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #0A0A0F;
    --surface: #111118;
    --surface2: #1A1A24;
    --border: #2A2A3A;
    --text: #E8E8F0;
    --muted: #7070A0;
    --accent: #00FFB2;
    --accent2: #FF6B35;
    --accent3: #7B61FF;
    --yellow: #FFD700;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Mono', monospace;
    overflow-x: hidden;
    cursor: none;
  }

  .cursor {
    width: 12px; height: 12px;
    background: var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease;
    mix-blend-mode: screen;
  }
  .cursor-ring {
    width: 36px; height: 36px;
    border: 1px solid var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.08s ease;
    mix-blend-mode: screen;
    opacity: 0.5;
  }

  body::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9997;
    opacity: 0.4;
  }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 20px 48px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid var(--border);
    background: rgba(10,10,15,0.85);
    backdrop-filter: blur(16px);
  }
  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-size: 18px; font-weight: 800;
    color: var(--accent); letter-spacing: -0.5px;
  }
  .nav-logo span { color: var(--text); }
  .nav-links { display: flex; gap: 32px; }
  .nav-links a {
    font-size: 11px; color: var(--muted);
    text-decoration: none; letter-spacing: 2px;
    text-transform: uppercase; transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-badge {
    font-size: 10px; padding: 4px 12px;
    border: 1px solid var(--accent);
    color: var(--accent); letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column;
    justify-content: center; align-items: flex-start;
    padding: 120px 48px 80px;
    position: relative; overflow: hidden;
  }
  .hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridScroll 20s linear infinite;
  }
  @keyframes gridScroll {
    from { transform: translateY(0); }
    to { transform: translateY(60px); }
  }
  .hero-eyebrow {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: var(--accent); margin-bottom: 24px;
    opacity: 0; animation: fadeUp 0.8s 0.2s forwards;
    position: relative; z-index: 1;
  }
  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 800; line-height: 0.95; letter-spacing: -3px;
    margin-bottom: 32px;
    opacity: 0; animation: fadeUp 0.8s 0.4s forwards;
    position: relative; z-index: 1;
  }
  .hero-title .line2 { color: var(--accent); display: block; }
  .hero-title .line3 {
    font-family: 'Instrument Serif', serif;
    font-style: italic; font-weight: 400;
    color: var(--muted); display: block;
    font-size: clamp(36px, 6vw, 72px);
  }
  .hero-sub {
    max-width: 520px; font-size: 14px; line-height: 1.8;
    color: var(--muted); margin-bottom: 48px;
    opacity: 0; animation: fadeUp 0.8s 0.6s forwards;
    position: relative; z-index: 1;
  }
  .hero-cta {
    display: flex; gap: 16px; align-items: center;
    opacity: 0; animation: fadeUp 0.8s 0.8s forwards;
    position: relative; z-index: 1;
  }
  .btn-primary {
    background: var(--accent); color: var(--bg);
    padding: 14px 28px; font-family: 'IBM Plex Mono', monospace;
    font-size: 12px; font-weight: 500; letter-spacing: 1px;
    text-decoration: none; text-transform: uppercase;
    transition: all 0.2s; display: inline-block; border: none; cursor: none;
  }
  .btn-primary:hover { background: #00e6a0; transform: translateY(-2px); }
  .btn-ghost {
    color: var(--muted); font-size: 12px; letter-spacing: 1px;
    text-transform: uppercase; text-decoration: none;
    border-bottom: 1px solid var(--border);
    transition: all 0.2s; padding-bottom: 2px;
  }
  .btn-ghost:hover { color: var(--text); border-color: var(--text); }

  .hero-stats {
    position: absolute; right: 48px; bottom: 80px;
    display: flex; flex-direction: column; gap: 24px; text-align: right;
    opacity: 0; animation: fadeUp 0.8s 1s forwards; z-index: 1;
  }
  .stat-num {
    font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 800;
    color: var(--accent); display: block;
  }
  .stat-label { font-size: 10px; color: var(--muted); letter-spacing: 2px; text-transform: uppercase; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* SECTIONS */
  section { padding: 100px 48px; }
  .section-tag {
    font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
    color: var(--accent); margin-bottom: 16px; display: block;
  }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 800; letter-spacing: -2px;
    margin-bottom: 64px; line-height: 1;
  }
  .section-title em {
    font-family: 'Instrument Serif', serif;
    font-style: italic; color: var(--accent);
  }

  /* ANATOMY */
  .anatomy { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .anatomy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2px;
  }
  .anatomy-card {
    background: var(--bg); padding: 40px 32px;
    border: 1px solid var(--border); transition: all 0.3s;
    position: relative; overflow: hidden;
  }
  .anatomy-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2px; background: var(--card-color, var(--accent));
    transform: scaleX(0); transition: transform 0.3s;
  }
  .anatomy-card:hover { border-color: var(--card-color, var(--accent)); }
  .anatomy-card:hover::before { transform: scaleX(1); }
  .card-num {
    font-size: 10px; color: var(--muted); letter-spacing: 3px;
    text-transform: uppercase; margin-bottom: 16px; display: block;
  }
  .card-title {
    font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700;
    color: var(--card-color, var(--accent)); margin-bottom: 12px;
  }
  .card-desc { font-size: 12px; color: var(--muted); line-height: 1.8; }
  .card-example {
    margin-top: 20px; padding: 16px;
    background: var(--surface2); border-left: 2px solid var(--card-color, var(--accent));
    font-size: 11px; color: var(--text); line-height: 1.7;
  }
  .card-example .label {
    font-size: 9px; color: var(--muted); letter-spacing: 2px;
    text-transform: uppercase; margin-bottom: 8px; display: block;
  }

  /* MASTER PROMPT */
  .master-prompt-section { background: var(--bg); }
  .prompt-builder { background: var(--surface); border: 1px solid var(--border); overflow: hidden; }
  .prompt-header {
    padding: 20px 32px; background: var(--surface2);
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 12px;
  }
  .dot { width: 12px; height: 12px; border-radius: 50%; }
  .dot.red { background: #FF5F57; }
  .dot.yellow { background: #FEBC2E; }
  .dot.green { background: #28C840; }
  .prompt-filename { margin-left: 8px; font-size: 12px; color: var(--muted); letter-spacing: 1px; }
  .prompt-copy-btn {
    margin-left: auto; background: none; border: 1px solid var(--border);
    color: var(--muted); padding: 6px 16px;
    font-family: 'IBM Plex Mono', monospace; font-size: 10px;
    letter-spacing: 2px; text-transform: uppercase;
    cursor: none; transition: all 0.2s;
  }
  .prompt-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
  .prompt-body { padding: 40px 32px; overflow-x: auto; }
  .prompt-line {
    display: flex; gap: 20px;
    margin-bottom: 6px; font-size: 13px; line-height: 1.8;
    padding: 0 4px; border-radius: 2px;
  }
  .prompt-line:hover { background: rgba(0,255,178,0.03); }
  .prompt-line:hover .ln { color: var(--accent); }
  .ln { color: var(--border); min-width: 24px; text-align: right; user-select: none; flex-shrink: 0; }
  .kw { color: var(--accent3); }
  .str { color: var(--yellow); }
  .cmt { color: var(--muted); font-style: italic; }
  .val { color: var(--accent); }
  .val2 { color: var(--accent2); }

  /* CHEAT SHEET */
  .cheatsheet { background: var(--surface); border-top: 1px solid var(--border); }
  .cheat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
  .cheat-card { border: 1px solid var(--border); overflow: hidden; transition: border-color 0.3s; }
  .cheat-card:hover { border-color: var(--accent3); }
  .cheat-head {
    padding: 16px 24px; background: var(--surface2);
    display: flex; align-items: center; gap: 12px;
    border-bottom: 1px solid var(--border);
  }
  .cheat-icon { font-size: 18px; }
  .cheat-title { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; }
  .cheat-body { padding: 20px 24px; }
  .cheat-item {
    display: flex; justify-content: space-between; align-items: flex-start;
    padding: 10px 0; border-bottom: 1px solid var(--border); gap: 16px;
  }
  .cheat-item:last-child { border-bottom: none; }
  .cheat-label { font-size: 11px; color: var(--muted); flex: 1; line-height: 1.6; }
  .cheat-val { font-size: 11px; color: var(--accent); text-align: right; flex: 1; }

  /* MISTAKES */
  .mistakes { background: var(--bg); }
  .mistakes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .mistake-col h3 {
    font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700;
    margin-bottom: 24px; display: flex; align-items: center; gap: 10px;
  }
  .badge {
    font-size: 10px; padding: 3px 10px; letter-spacing: 2px;
    text-transform: uppercase; border: 1px solid currentColor;
  }
  .badge.bad { color: #FF4444; border-color: #FF4444; }
  .badge.good { color: var(--accent); border-color: var(--accent); }
  .example-box { padding: 20px 24px; margin-bottom: 16px; font-size: 12px; line-height: 1.8; }
  .example-box.bad { background: rgba(255,68,68,0.05); border-left: 2px solid #FF4444; }
  .example-box.good { background: rgba(0,255,178,0.05); border-left: 2px solid var(--accent); }
  .example-box .ex-label {
    font-size: 9px; color: var(--muted); letter-spacing: 2px;
    text-transform: uppercase; margin-bottom: 10px; display: block;
  }

  /* FOOTER */
  footer {
    padding: 60px 48px; border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 24px; background: var(--surface);
  }
  .footer-logo { font-family: 'Syne', sans-serif; font-size: 24px; font-weight: 800; color: var(--accent); }
  .footer-note { font-size: 11px; color: var(--muted); line-height: 1.7; max-width: 400px; }
  .footer-tag { font-size: 10px; color: var(--muted); letter-spacing: 3px; text-transform: uppercase; }

  /* TOAST */
  .toast {
    position: fixed; bottom: 40px; right: 40px;
    background: var(--accent); color: var(--bg);
    padding: 12px 24px; font-size: 12px; letter-spacing: 1px;
    text-transform: uppercase; font-weight: 500;
    transform: translateY(100px); opacity: 0;
    transition: all 0.3s; z-index: 9999;
  }
  .toast.show { transform: translateY(0); opacity: 1; }

  /* SCROLLBAR */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); }
  ::-webkit-scrollbar-thumb:hover { background: var(--accent); }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .nav-badge { display: none; }
    .hero { padding: 100px 24px 80px; }
    .hero-stats { display: none; }
    .hero-title { letter-spacing: -1px; }
    section { padding: 64px 24px; }
    .section-title { letter-spacing: -1px; margin-bottom: 40px; }
    .anatomy-grid { grid-template-columns: 1fr; }
    .cheat-grid { grid-template-columns: 1fr; }
    .mistakes-grid { grid-template-columns: 1fr; }
    .prompt-body { padding: 24px 16px; }
    .prompt-line { font-size: 11px; gap: 12px; }
    footer { padding: 40px 24px; flex-direction: column; align-items: flex-start; }
    .cheat-item { flex-direction: column; gap: 4px; }
    .cheat-val { text-align: left; }
  }
  @media (max-width: 480px) {
    .hero-cta { flex-direction: column; align-items: flex-start; }
    .btn-primary { width: 100%; text-align: center; }
  }
</style>
</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>
<div class="toast" id="toast">✓ Copied to clipboard!</div>

<!-- NAV -->
<nav>
  <div class="nav-logo">PROMPT<span>CRAFT</span></div>
  <div class="nav-links">
    <a href="#anatomy">Anatomy</a>
    <a href="#master">Master Prompt</a>
    <a href="#cheatsheet">Cheat Sheet</a>
    <a href="#mistakes">Mistakes</a>
  </div>
  <div class="nav-badge">2025 Edition</div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="hero-eyebrow">// For Software Engineers &amp; Business Builders</div>
  <h1 class="hero-title">
    The Prompt
    <span class="line2">That Ships</span>
    <span class="line3">Real Products.</span>
  </h1>
  <p class="hero-sub">
    Stop getting generic code from AI. This is the exact prompt framework that senior engineers and founders use to get production-ready, business-aware, modern output — every single time.
  </p>
  <div class="hero-cta">
    <a href="#master" class="btn-primary">Get the Master Prompt</a>
    <a href="#anatomy" class="btn-ghost">See How It Works →</a>
  </div>
  <div class="hero-stats">
    <div><span class="stat-num">7x</span><span class="stat-label">Better Output</span></div>
    <div><span class="stat-num">12</span><span class="stat-label">Prompt Layers</span></div>
    <div><span class="stat-num">∞</span><span class="stat-label">Use Cases</span></div>
  </div>
</section>

<!-- ANATOMY -->
<section class="anatomy" id="anatomy">
  <span class="section-tag">// 01 — Prompt Architecture</span>
  <h2 class="section-title">The <em>anatomy</em> of a<br>world-class prompt</h2>
  <div class="anatomy-grid">
    <div class="anatomy-card" style="--card-color:#00FFB2">
      <span class="card-num">01 — Role</span>
      <div class="card-title">Set the Persona</div>
      <p class="card-desc">Tell the AI exactly who it is. Seniority, stack, mindset. This frames every single response that follows.</p>
      <div class="card-example"><span class="label">Example</span>"You are a senior full-stack engineer with 10 years experience, specializing in scalable SaaS products. You write clean, commented, production-ready code."</div>
    </div>
    <div class="anatomy-card" style="--card-color:#FF6B35">
      <span class="card-num">02 — Context</span>
      <div class="card-title">Business Reality</div>
      <p class="card-desc">Describe what you're building, who it's for, and what problem it solves. Business context drives better architectural decisions.</p>
      <div class="card-example"><span class="label">Example</span>"I'm building a B2B SaaS dashboard for small restaurant owners to track daily inventory. Users are non-technical, aged 35–55."</div>
    </div>
    <div class="anatomy-card" style="--card-color:#7B61FF">
      <span class="card-num">03 — Tech Stack</span>
      <div class="card-title">Exact Versions</div>
      <p class="card-desc">Always specify your exact stack with versions. Prevents outdated APIs, deprecated methods, and incompatible patterns.</p>
      <div class="card-example"><span class="label">Example</span>"Stack: Next.js 15, TypeScript 5.4, Tailwind 3.4, Prisma 5, PostgreSQL, Supabase Auth, deployed on Vercel."</div>
    </div>
    <div class="anatomy-card" style="--card-color:#FFD700">
      <span class="card-num">04 — Constraints</span>
      <div class="card-title">Hard Rules</div>
      <p class="card-desc">List what the AI must never do. No inline styles, no deprecated packages, no any types, no console.logs in production.</p>
      <div class="card-example"><span class="label">Example</span>"NEVER use: class components, var, any type, magic numbers. ALWAYS use: error boundaries, loading states, TypeScript strict mode."</div>
    </div>
    <div class="anatomy-card" style="--card-color:#00E5FF">
      <span class="card-num">05 — Output Format</span>
      <div class="card-title">Shape the Response</div>
      <p class="card-desc">Specify exactly how you want output delivered — file structure, comment density, what to explain vs just code.</p>
      <div class="card-example"><span class="label">Example</span>"Output: Full file only. Include JSDoc comments. After code, list: what it does, edge cases handled, what to test next."</div>
    </div>
    <div class="anatomy-card" style="--card-color:#FF4081">
      <span class="card-num">06 — Quality Bar</span>
      <div class="card-title">Define "Done"</div>
      <p class="card-desc">Tell it what production-ready means to you — accessibility, performance budgets, mobile-first, error handling depth.</p>
      <div class="card-example"><span class="label">Example</span>"Code must be: accessible (WCAG AA), mobile-first, handle all error states, include loading skeletons, and use optimistic UI."</div>
    </div>
  </div>
</section>

<!-- MASTER PROMPT -->
<section class="master-prompt-section" id="master">
  <span class="section-tag">// 02 — The Template</span>
  <h2 class="section-title">The <em>Master Prompt</em><br>— copy &amp; customize</h2>
  <div class="prompt-builder">
    <div class="prompt-header">
      <div class="dot red"></div>
      <div class="dot yellow"></div>
      <div class="dot green"></div>
      <span class="prompt-filename">master-prompt.md</span>
      <button class="prompt-copy-btn" onclick="copyPrompt()">⌘ Copy Prompt</button>
    </div>
    <div class="prompt-body">
      <div class="prompt-line"><span class="ln">01</span><span class="cmt">## 🎭 ROLE</span></div>
      <div class="prompt-line"><span class="ln">02</span><span class="str">You are a senior [frontend / backend / fullstack] engineer with 10+ years</span></div>
      <div class="prompt-line"><span class="ln">03</span><span class="str">of experience building production SaaS products. You think like a founder:</span></div>
      <div class="prompt-line"><span class="ln">04</span><span class="str">speed to market, maintainability, and user experience. No shortcuts.</span></div>
      <div class="prompt-line"><span class="ln">05</span><span>&nbsp;</span></div>
      <div class="prompt-line"><span class="ln">06</span><span class="cmt">## 🏢 PROJECT CONTEXT</span></div>
      <div class="prompt-line"><span class="ln">07</span><span class="kw">Project:</span>&nbsp;<span class="val">[Name of your app/product]</span></div>
      <div class="prompt-line"><span class="ln">08</span><span class="kw">Desc
