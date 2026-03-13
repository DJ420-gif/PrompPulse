<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Ultimate Coding AI Prompt Guide</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
 <a href="homepage.html" class="btn-ghost">← Back to Home</a>
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
 div class="nav-links">
  <a href="homepage.html">🏠 Home</a>
  <a href="#anatomy">Anatomy</a>
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
      <div class="prompt-line"><span class="ln">08</span><span class="kw">Description:</span>&nbsp;<span class="val">[What it does in 1-2 sentences]</span></div>
      <div class="prompt-line"><span class="ln">09</span><span class="kw">Target Users:</span>&nbsp;<span class="val">[Who uses it, their tech level, age range]</span></div>
      <div class="prompt-line"><span class="ln">10</span><span class="kw">Business Model:</span>&nbsp;<span class="val">[Subscription / marketplace / B2B / B2C]</span></div>
      <div class="prompt-line"><span class="ln">11</span><span class="kw">Scale:</span>&nbsp;<span class="val">[Expected users: 100 / 10K / 1M+]</span></div>
      <div class="prompt-line"><span class="ln">12</span><span>&nbsp;</span></div>
      <div class="prompt-line"><span class="ln">13</span><span class="cmt">## 🛠 TECH STACK (be exact)</span></div>
      <div class="prompt-line"><span class="ln">14</span><span class="kw">Frontend:</span>&nbsp;<span class="val2">Next.js 15 / React 19 / Vue 3.4 / [your choice]</span></div>
      <div class="prompt-line"><span class="ln">15</span><span class="kw">Language:</span>&nbsp;<span class="val2">TypeScript 5.4 (strict mode ON)</span></div>
      <div class="prompt-line"><span class="ln">16</span><span class="kw">Styling:</span>&nbsp;<span class="val2">Tailwind CSS 3.4 / CSS Modules / [your choice]</span></div>
      <div class="prompt-line"><span class="ln">17</span><span class="kw">Backend:</span>&nbsp;<span class="val2">Node.js 22 / Bun / Python FastAPI / [your choice]</span></div>
      <div class="prompt-line"><span class="ln">18</span><span class="kw">Database:</span>&nbsp;<span class="val2">PostgreSQL + Prisma 5 / MongoDB / Supabase</span></div>
      <div class="prompt-line"><span class="ln">19</span><span class="kw">Auth:</span>&nbsp;<span class="val2">Clerk / NextAuth v5 / Supabase Auth</span></div>
      <div class="prompt-line"><span class="ln">20</span><span class="kw">Deployment:</span>&nbsp;<span class="val2">Vercel / Railway / AWS / [your choice]</span></div>
      <div class="prompt-line"><span class="ln">21</span><span class="kw">State Mgmt:</span>&nbsp;<span class="val2">Zustand / React Query v5 / Jotai</span></div>
      <div class="prompt-line"><span class="ln">22</span><span>&nbsp;</span></div>
      <div class="prompt-line"><span class="ln">23</span><span class="cmt">## ✅ CODE STANDARDS (always follow)</span></div>
      <div class="prompt-line"><span class="ln">24</span><span class="val">- Functional components + hooks only (no class components)</span></div>
      <div class="prompt-line"><span class="ln">25</span><span class="val">- All async ops must have loading + error + empty states</span></div>
      <div class="prompt-line"><span class="ln">26</span><span class="val">- Semantic HTML, ARIA attributes (WCAG AA accessibility)</span></div>
      <div class="prompt-line"><span class="ln">27</span><span class="val">- Mobile-first responsive design (375px to 1440px)</span></div>
      <div class="prompt-line"><span class="ln">28</span><span class="val">- No magic numbers — use named constants</span></div>
      <div class="prompt-line"><span class="ln">29</span><span class="val">- Every function needs a JSDoc comment</span></div>
      <div class="prompt-line"><span class="ln">30</span><span class="val">- Write code as if a junior dev must maintain it alone</span></div>
      <div class="prompt-line"><span class="ln">31</span><span>&nbsp;</span></div>
      <div class="prompt-line"><span class="ln">32</span><span class="cmt">## 🚫 NEVER DO THIS</span></div>
      <div class="prompt-line"><span class="ln">33</span><span class="val2">- No: any, var, !important, inline styles, console.log in prod</span></div>
      <div class="prompt-line"><span class="ln">34</span><span class="val2">- No: unhandled promise rejections, missing try/catch</span></div>
      <div class="prompt-line"><span class="ln">35</span><span class="val2">- No: deprecated APIs — check the latest docs</span></div>
      <div class="prompt-line"><span class="ln">36</span><span class="val2">- No: hardcoded secrets, API keys, or credentials</span></div>
      <div class="prompt-line"><span class="ln">37</span><span class="val2">- No: partial code — always give complete, runnable output</span></div>
      <div class="prompt-line"><span class="ln">38</span><span>&nbsp;</span></div>
      <div class="prompt-line"><span class="ln">39</span><span class="cmt">## 📦 OUTPUT FORMAT</span></div>
      <div class="prompt-line"><span class="ln">40</span><span class="str">1. Show complete file(s) with path — no truncation</span></div>
      <div class="prompt-line"><span class="ln">41</span><span class="str">2. Multiple files: show in dependency order</span></div>
      <div class="prompt-line"><span class="ln">43</span><span class="str">3. After code block, provide:</span></div>
      <div class="prompt-line"><span class="ln">44</span><span class="str">&nbsp;&nbsp; WHAT: What does this code do (2-3 sentences)</span></div>
      <div class="prompt-line"><span class="ln">45</span><span class="str">&nbsp;&nbsp; WHY: Why this approach over alternatives</span></div>
      <div class="prompt-line"><span class="ln">46</span><span class="str">&nbsp;&nbsp; EDGE CASES: What's handled, what's not</span></div>
      <div class="prompt-line"><span class="ln">47</span><span class="str">&nbsp;&nbsp; NEXT STEP: What should I build or test next</span></div>
      <div class="prompt-line"><span class="ln">48</span><span>&nbsp;</span></div>
      <div class="prompt-line"><span class="ln">49</span><span class="cmt">## 🎯 YOUR TASK</span></div>
      <div class="prompt-line"><span class="ln">50</span><span class="val">[DESCRIBE EXACTLY WHAT YOU WANT BUILT HERE]</span></div>
      <div class="prompt-line"><span class="ln">51</span><span class="val">Be specific: which component, what data, what interactions,</span></div>
      <div class="prompt-line"><span class="ln">52</span><span class="val">what it connects to, what success looks like.</span></div>
    </div>
  </div>
</section>

<!-- CHEAT SHEET -->
<section class="cheatsheet" id="cheatsheet">
  <span class="section-tag">// 03 — Quick Reference</span>
  <h2 class="section-title">The <em>Cheat Sheet</em><br>— power moves</h2>
  <div class="cheat-grid">
    <div class="cheat-card">
      <div class="cheat-head"><span class="cheat-icon">⚡</span><span class="cheat-title">Power Phrases</span></div>
      <div class="cheat-body">
        <div class="cheat-item"><span class="cheat-label">Forces real-world quality</span><span class="cheat-val">"As if this ships to 100K users tomorrow"</span></div>
        <div class="cheat-item"><span class="cheat-label">Prevents lazy solutions</span><span class="cheat-val">"Complete implementation only. No shortcuts."</span></div>
        <div class="cheat-item"><span class="cheat-label">Gets architectural opinions</span><span class="cheat-val">"Tell me if my approach is wrong before coding"</span></div>
        <div class="cheat-item"><span class="cheat-label">Surfaces hidden complexity</span><span class="cheat-val">"What am I not thinking about here?"</span></div>
        <div class="cheat-item"><span class="cheat-label">Gets the hard version</span><span class="cheat-val">"Assume I want robust, not the simple version"</span></div>
      </div>
    </div>
    <div class="cheat-card">
      <div class="cheat-head"><span class="cheat-icon">🏗️</span><span class="cheat-title">Architecture Prompts</span></div>
      <div class="cheat-body">
        <div class="cheat-item"><span class="cheat-label">System design</span><span class="cheat-val">"Design data model first, then API, then UI"</span></div>
        <div class="cheat-item"><span class="cheat-label">Refactoring</span><span class="cheat-val">"Refactor to be testable, not just working"</span></div>
        <div class="cheat-item"><span class="cheat-label">Scaling</span><span class="cheat-val">"What breaks at 10x traffic? Fix those things."</span></div>
        <div class="cheat-item"><span class="cheat-label">Security audit</span><span class="cheat-val">"List every security vulnerability in this code"</span></div>
        <div class="cheat-item"><span class="cheat-label">Performance</span><span class="cheat-val">"Optimize for Core Web Vitals. LCP under 2.5s."</span></div>
      </div>
    </div>
    <div class="cheat-card">
      <div class="cheat-head"><span class="cheat-icon">💼</span><span class="cheat-title">Business-Aware Prompts</span></div>
      <div class="cheat-body">
        <div class="cheat-item"><span class="cheat-label">MVP scoping</span><span class="cheat-val">"Build the 20% that delivers 80% of value"</span></div>
        <div class="cheat-item"><span class="cheat-label">Cost awareness</span><span class="cheat-val">"Minimize API calls and DB queries. Cost matters."</span></div>
        <div class="cheat-item"><span class="cheat-label">Conversion focus</span><span class="cheat-val">"Every pixel on this page drives sign-ups."</span></div>
        <div class="cheat-item"><span class="cheat-label">Retention feature</span><span class="cheat-val">"Users should feel progress and accomplishment"</span></div>
        <div class="cheat-item"><span class="cheat-label">Monetization</span><span class="cheat-val">"Add a paywall gate at this exact interaction"</span></div>
      </div>
    </div>
    <div class="cheat-card">
      <div class="cheat-head"><span class="cheat-icon">🧪</span><span class="cheat-title">Testing &amp; QA Prompts</span></div>
      <div class="cheat-body">
        <div class="cheat-item"><span class="cheat-label">Unit tests</span><span class="cheat-val">"Write Vitest tests covering all edge cases"</span></div>
        <div class="cheat-item"><span class="cheat-label">E2E flows</span><span class="cheat-val">"Write Playwright tests for critical user journeys"</span></div>
        <div class="cheat-item"><span class="cheat-label">Bug hunting</span><span class="cheat-val">"Act as QA. What will break under real use?"</span></div>
        <div class="cheat-item"><span class="cheat-label">Accessibility</span><span class="cheat-val">"Run a WCAG audit on this. Fix all issues."</span></div>
        <div class="cheat-item"><span class="cheat-label">Code review</span><span class="cheat-val">"Review this as a principal engineer in a PR"</span></div>
      </div>
    </div>
  </div>
</section>

<!-- MISTAKES -->
<section class="mistakes" id="mistakes">
  <span class="section-tag">// 04 — Common Pitfalls</span>
  <h2 class="section-title"><em>Mistakes</em> that kill<br>your AI output</h2>
  <div class="mistakes-grid">
    <div class="mistake-col">
      <h3><span class="badge bad">❌ Bad Prompts</span></h3>
      <div class="example-box bad"><span class="ex-label">Too vague</span>"Make me a dashboard"</div>
      <div class="example-box bad"><span class="ex-label">No stack info</span>"Build a login page"</div>
      <div class="example-box bad"><span class="ex-label">No constraints</span>"Write a function to fetch users"</div>
      <div class="example-box bad"><span class="ex-label">No business context</span>"Create a pricing component"</div>
      <div class="example-box bad"><span class="ex-label">No output format</span>"Help me with authentication"</div>
    </div>
    <div class="mistake-col">
      <h3><span class="badge good">✅ Good Prompts</span></h3>
      <div class="example-box good"><span class="ex-label">Specific + contextual</span>"Build a SaaS analytics dashboard with revenue chart, MRR card, and user growth table using Recharts + React Query v5"</div>
      <div class="example-box good"><span class="ex-label">Stack specified</span>"Build a login page using Next.js 15 App Router, NextAuth v5, Tailwind, shadcn/ui, with Google OAuth + email magic link"</div>
      <div class="example-box good"><span class="ex-label">Constraints defined</span>"Write a fetchUsers function with TypeScript, Zod validation, React Query, error boundaries, and retry logic"</div>
      <div class="example-box good"><span class="ex-label">Business-aware</span>"Create a 3-tier pricing component (Free/Pro/Enterprise) that highlights Pro, shows annual/monthly toggle with 20% savings badge, and fires a conversion analytics event on CTA click"</div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">PROMPTCRAFT</div>
  <p class="footer-note">The difference between a 10-minute AI solution and a 10-hour debugging session is the quality of your prompt. Write it once, write it right. Ship faster.</p>
  <div class="footer-tag">2025 — Built for builders</div>
</footer>

<script>
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = (mx - 6) + 'px';
    cursor.style.top = (my - 6) + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = (rx - 18) + 'px';
    ring.style.top = (ry - 18) + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button, .anatomy-card, .cheat-card, .example-box').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)'; ring.style.transform = 'scale(1.5)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; ring.style.transform = 'scale(1)'; });
  });

  // Copy master prompt
  function copyPrompt() {
    const text = `## ROLE
You are a senior [frontend / backend / fullstack] engineer with 10+ years of experience building production SaaS products. You think like a founder: speed to market, maintainability, and user experience. No shortcuts.

## PROJECT CONTEXT
Project: [Name of your app/product]
Description: [What it does in 1-2 sentences]
Target Users: [Who uses it, their tech level, age range]
Business Model: [Subscription / marketplace / B2B / B2C]
Scale: [Expected users: 100 / 10K / 1M+]

## TECH STACK (be exact)
Frontend: Next.js 15 / React 19 / Vue 3.4 / [your choice]
Language: TypeScript 5.4 (strict mode ON)
Styling: Tailwind CSS 3.4 / CSS Modules / [your choice]
Backend: Node.js 22 / Bun / Python FastAPI / [your choice]
Database: PostgreSQL + Prisma 5 / MongoDB / Supabase
Auth: Clerk / NextAuth v5 / Supabase Auth
Deployment: Vercel / Railway / AWS / [your choice]
State Mgmt: Zustand / React Query v5 / Jotai

## CODE STANDARDS (always follow)
- Functional components + hooks only (no class components)
- All async ops must have loading + error + empty states
- Semantic HTML, ARIA attributes (WCAG AA accessibility)
- Mobile-first responsive design (375px to 1440px)
- No magic numbers - use named constants
- Every function needs a JSDoc comment
- Write code as if a junior dev must maintain it alone

## NEVER DO THIS
- No: any, var, !important, inline styles, console.log in prod
- No: unhandled promise rejections, missing try/catch
- No: deprecated APIs - check the latest docs
- No: hardcoded secrets, API keys, or credentials
- No: partial code - always give complete, runnable output

## OUTPUT FORMAT
1. Show complete file(s) with path - no truncation
2. Multiple files: show in dependency order
3. After code block, provide:
   WHAT: What does this code do (2-3 sentences)
   WHY: Why this approach over alternatives
   EDGE CASES: What's handled, what's not
   NEXT STEP: What should I build or test next

## YOUR TASK
[DESCRIBE EXACTLY WHAT YOU WANT BUILT HERE]
Be specific: which component, what data, what interactions, what it connects to, what success looks like.`;

    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    });
  }

  // Smooth scroll with offset for fixed nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
</script>
</body>
</html>
