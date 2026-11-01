<html lang="he" dir="rtl"><style>* { -webkit-text-size-adjust: 109.00000000000001% !important; }</style><head><style>
@font-face {
  font-family: "Optimistic";
  font-style: normal;
  font-weight: 400 600;
  font-display: swap;
  src: url("/fonts/OptimisticAI_VF_Optimized.woff2") format("woff2");
}
@font-face {
  font-family: "Optimistic Mono";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/OptimisticMono_W_TextRegular.woff2") format("woff2");
}
:where(html) {
  font-family: "Optimistic", system-ui, sans-serif;
}
:where(code, pre, kbd, samp) {
  font-family: "Optimistic Mono", ui-monospace, monospace;
}
</style>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#080b14">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="description" content="בית חב״ד כפר רתמים - בית פתוח לכל יהודי">
<link rel="apple-touch-icon" href="logo-192.png">
<link rel="icon" href="logo-192.png">
<link rel="manifest" href="manifest.webmanifest">
<title>בית חב״ד כפר רתמים</title>
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600&amp;family=Frank+Ruhl+Libre:wght@400;500;700&amp;display=swap" rel="stylesheet">
<style>
:root{
  --bg:#080b14;--bg-soft:#0e1320;--bg-card:#121a2e;
  --line:rgba(255,255,255,.08);--line-gold:rgba(212,175,87,.18);
  --gold:#d4af57;--gold-light:#e8c77a;--gold-muted:rgba(212,175,87,.10);
  --text:#f1f3f9;--muted:#8b96b5;--faint:#5e6a8a;
  --radius:14px;--radius-lg:20px;--serif:"Frank Ruhl Libre",serif;--sans:"Heebo",system-ui,sans-serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--text);font-family:var(--sans);line-height:1.7;font-weight:400;overflow-x:hidden;padding-bottom:90px}
a{color:inherit;text-decoration:none}img{max-width:100%;display:block}button{font-family:var(--sans)}
.container{width:min(1160px,92vw);margin:0 auto}
.section{padding:72px 0;border-top:1px solid var(--line)}
.hero-section{padding:48px 0 32px;border-top:none}

/* Header - FIXED MOBILE */
.header{position:sticky;top:0;z-index:100;background:rgba(8,11,20,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--line)}
.header-inner{min-height:64px;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0}
.brand{display:flex;align-items:center;gap:10px;flex:1 1 auto;min-width:0}
.brand-mark{width:40px;height:40px;flex:0 0 40px;border-radius:10px;background:#151f36;border:1px solid var(--line-gold);display:grid;place-items:center;font-family:var(--serif);font-weight:700;color:var(--gold-light);font-size:17px;overflow:hidden}
.brand-mark img{width:100%;height:100%;object-fit:cover}
.brand-name{line-height:1.15;min-width:0}
.brand-name b{display:block;font-family:var(--serif);font-size:16px;font-weight:700;overflow:hidden;text-overflow:ellipsis}
.brand-name span{display:block;font-size:9.5px;font-weight:600;letter-spacing:1.2px;color:var(--muted);margin-top:1px;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis}
.nav{display:flex;align-items:center;gap:20px;flex-shrink:0}
.nav a{font-size:13px;font-weight:500;color:var(--muted);transition:.2s}
.nav a:hover{color:var(--text)}
.actions{display:flex;align-items:center;gap:8px;flex-shrink:0}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:38px;padding:8px 16px;border-radius:100px;font-size:13px;font-weight:600;border:1px solid transparent;cursor:pointer;transition:.2s;line-height:1.2;text-align:center;word-break:break-word}
.btn-primary{background:var(--text);color:var(--bg)}
.btn-gold{background:linear-gradient(180deg,var(--gold-light),var(--gold));color:#1a1405}
.btn-ghost{background:rgba(255,255,255,.05);border-color:var(--line);color:var(--text)}
.hamburger{display:none;width:40px;height:40px;flex:0 0 40px;border-radius:9px;border:1px solid var(--line);background:rgba(255,255,255,.04);cursor:pointer;align-items:center;justify-content:center}
.hamburger span{display:block;width:16px;height:2px;background:var(--text);position:relative;border-radius:2px}
.hamburger span:before,.hamburger span:after{content:"";position:absolute;right:0;width:16px;height:2px;background:var(--text);border-radius:2px}
.hamburger span:before{top:-5px}.hamburger span:after{top:5px}
.mobile-menu{display:none;position:fixed;inset:0;z-index:200;background:rgba(8,11,20,.98);backdrop-filter:blur(24px);padding:20px;overflow-y:auto}
.mobile-menu.open{display:flex;flex-direction:column}
@media(max-width:1050px){.nav{display:none}.hamburger{display:flex}}
@media(max-width:480px){
  .header-inner{min-height:58px}
  .actions .btn-ghost{ display:none }
  .brand-name b{font-size:15px}
  .container{width:min(1160px,94vw)}
}

/* Hero - MOBILE FIXED */
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:40px;align-items:start}
.kicker{display:flex;align-items:center;gap:10px;font-size:10.5px;font-weight:600;letter-spacing:1.8px;color:var(--gold-light);text-transform:uppercase;margin-bottom:14px;flex-wrap:wrap}
.kicker:before{content:"";width:20px;height:1px;background:var(--gold);display:block;flex:0 0 20px}
.hero-title{font-family:var(--serif);font-weight:400;font-size:clamp(36px,6vw,68px);line-height:.92;letter-spacing:-.6px;margin:0;overflow-wrap:break-word;word-break:break-word}
.hero-title .gold{color:var(--gold-light);font-weight:500}
.hero-title .thin{display:block;font-weight:300;margin-top:4px}
.subtitle{margin:16px 0 0;color:var(--muted);font-size:15.5px;line-height:1.7;max-width:52ch;font-weight:300;overflow-wrap:break-word}
.hero-actions{display:flex;gap:10px;margin-top:24px;flex-wrap:wrap}
.hero-actions .btn{flex:0 1 auto}
.hero-meta{margin-top:32px;padding-top:18px;border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
@media(max-width:600px){
  .hero-grid{grid-template-columns:1fr;gap:24px}
  .hero-section{padding:32px 0 24px}
  .hero-actions{flex-direction:column}
  .hero-actions .btn{width:100%}
  .hero-meta{grid-template-columns:1fr;gap:12px}
  .hero-meta .meta-item{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--line)}
  .hero-meta .meta-item:last-child{border:none}
}
.meta-item b{display:block;font-family:var(--serif);font-size:17px;font-weight:500;line-height:1.1}
.meta-item span{font-size:10px;letter-spacing:.8px;text-transform:uppercase;color:var(--faint);margin-top:3px;display:block}

/* Side card - NO STICKY, FULLY RESPONSIVE */
.side-card{background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01));border:1px solid var(--line);border-radius:var(--radius-lg);padding:22px;display:flex;flex-direction:column}
.side-card .eyebrow{font-size:10px;letter-spacing:1.8px;text-transform:uppercase;color:var(--gold);font-weight:600;display:flex;align-items:center;gap:8px;margin:0}
.side-card .eyebrow:after{content:"";height:1px;width:20px;background:var(--line-gold);display:inline-block}
.side-card h3{font-family:var(--serif);font-size:20px;font-weight:500;margin:10px 0 0;line-height:1.3;overflow-wrap:break-word}
.side-card .desc{color:var(--muted);font-size:13px;margin:8px 0 0;font-weight:300;line-height:1.6;overflow-wrap:break-word}
.side-list{margin:16px 0 0;padding:16px 0 0;list-style:none;border-top:1px solid var(--line);display:flex;flex-direction:column}
.side-list li{display:flex;justify-content:space-between;align-items:flex-start;padding:9px 0;font-size:12.5px;color:var(--muted);border-bottom:1px solid rgba(255,255,255,.04);gap:12px;flex-wrap:wrap}
.side-list li:last-child{border-bottom:none}
.side-list li strong{color:var(--text);font-weight:500;flex-shrink:0}
.side-card-actions{display:flex;gap:8px;margin-top:16px;flex-wrap:wrap}
.side-card-actions .btn{flex:1 1 120px;min-width:0}
.side-footer{margin-top:12px;font-size:10px;letter-spacing:.8px;text-transform:uppercase;color:var(--faint);overflow-wrap:break-word}

/* Section head */
.sec-head{margin:0 0 28px 0;max-width:720px}
.eyebrow{font-size:10.5px;letter-spacing:1.8px;text-transform:uppercase;color:var(--gold);font-weight:600;display:flex;align-items:center;gap:10px;margin:0;flex-wrap:wrap}
.eyebrow:after{content:"";height:1px;width:24px;background:var(--line-gold);display:inline-block}
.h2{font-family:var(--serif);font-size:clamp(26px,4vw,40px);font-weight:400;line-height:1.1;letter-spacing:-.3px;margin:8px 0 0;overflow-wrap:break-word}
.h2 em{font-style:normal;color:var(--gold-light)}
.sec-desc{color:var(--muted);font-size:14.5px;max-width:56ch;margin:10px 0 0;font-weight:300;line-height:1.65;overflow-wrap:break-word}

/* Services - MOBILE GRID FIXED */
.services-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.s-card{background:var(--bg-card);padding:22px 20px;display:flex;flex-direction:column;min-height:0}
.s-card .num{font-family:var(--serif);font-size:10px;letter-spacing:1px;color:var(--gold)}
.s-card h3{font-family:var(--serif);font-size:16px;font-weight:500;margin:12px 0 6px;line-height:1.3;overflow-wrap:break-word}
.s-card p{margin:0;color:var(--muted);font-size:12.5px;line-height:1.6;font-weight:300;overflow-wrap:break-word}
@media(max-width:1000px){.services-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){
  .services-grid{grid-template-columns:1fr}
  .section{padding:48px 0}
}

/* Kodesh - FIXED PRICE TAG OVERFLOW */
.kodesh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;align-items:stretch}
.k-card{background:var(--bg-card);border:1px solid var(--line);border-radius:var(--radius-lg);padding:22px;display:flex;flex-direction:column;gap:12px;min-height:0;overflow:hidden}
.k-card:hover{border-color:var(--line-gold)}
.k-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap}
.k-icon{width:32px;height:32px;flex:0 0 32px;border-radius:8px;background:var(--gold-muted);border:1px solid var(--line-gold);display:grid;place-items:center;color:var(--gold-light);font-size:13px;font-family:var(--serif);font-weight:700;flex-shrink:0}
.price-tag{display:inline-flex;align-items:center;min-height:22px;padding:4px 10px;border-radius:100px;background:rgba(255,255,255,.04);border:1px solid var(--line);font-size:10.5px;font-weight:600;letter-spacing:.3px;color:var(--gold-light);max-width:100%;overflow-wrap:break-word;word-break:break-word;white-space:normal;line-height:1.3}
.k-card h3{margin:0;font-family:var(--serif);font-size:20px;font-weight:500;line-height:1.2;overflow-wrap:break-word}
.k-card p{margin:0;color:var(--muted);font-size:13px;line-height:1.6;font-weight:300;overflow-wrap:break-word}
.k-actions{display:flex;gap:8px;margin-top:auto;padding-top:8px;flex-wrap:wrap}
.k-actions .btn{flex:1 1 110px;min-width:0}
@media(max-width:800px){
  .kodesh-grid{grid-template-columns:1fr;gap:14px}
  .k-card{padding:20px}
}

/* Videos */
.videos-wrap{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.v-card{background:var(--bg-card);border:1px solid var(--line);border-radius:14px;overflow:hidden;display:flex;flex-direction:column;min-width:0}
.v-thumb{aspect-ratio:16/9;background:#0c1222;flex:0 0 auto;position:relative;overflow:hidden}
.v-thumb iframe{width:100%;height:100%;border:0;display:block}
.v-body{padding:12px 14px;flex:1 1 auto;min-width:0}
.v-body h4{margin:0;font-size:13px;font-weight:500;line-height:1.35;overflow-wrap:break-word}
.v-body a{font-size:10px;color:var(--faint);letter-spacing:.5px;text-transform:uppercase;margin-top:4px;display:inline-block}
@media(max-width:900px){.videos-wrap{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.videos-wrap{grid-template-columns:1fr}}

/* CTA */
.cta{background:linear-gradient(180deg,rgba(212,175,87,.06),rgba(255,255,255,.01));border:1px solid var(--line-gold);border-radius:var(--radius-lg);padding:28px;display:grid;grid-template-columns:1.2fr auto;gap:20px;align-items:center}
.cta .btn{width:fit-content}
@media(max-width:800px){.cta{grid-template-columns:1fr;padding:22px}.cta .btn{width:100%}}
.donation{background:linear-gradient(180deg,var(--bg-card),var(--bg-soft));border:1px solid var(--line-gold);border-radius:var(--radius-lg);padding:40px 28px;text-align:center}
.donation h2{font-family:var(--serif);font-size:clamp(26px,4vw,38px);font-weight:400;line-height:1.05;margin:0;overflow-wrap:break-word}
.donation p{color:var(--muted);max-width:52ch;margin:12px auto 0;font-weight:300;font-size:14px;line-height:1.6;overflow-wrap:break-word}
.donation-actions{margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.donation-actions .btn{flex:0 1 auto}
@media(max-width:480px){.donation{padding:28px 18px}.donation-actions{flex-direction:column}.donation-actions .btn{width:100%}}

/* About & Contact - FIXED */
.about-grid{display:grid;grid-template-columns:1.5fr .9fr;gap:16px;align-items:start}
.contact-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:16px;align-items:start}
.c-card{background:var(--bg-card);border:1px solid var(--line);border-radius:16px;padding:22px;display:flex;flex-direction:column;min-width:0;overflow:hidden}
.c-card p{margin:0;color:var(--muted);font-weight:300;line-height:1.7;font-size:13.5px;overflow-wrap:break-word}
.c-card.muted-card{background:transparent;border-style:dashed;border-color:var(--line-gold);align-items:center;justify-content:center;text-align:center;min-height:140px}
@media(max-width:900px){.about-grid{grid-template-columns:1fr}.contact-grid{grid-template-columns:1fr}}

/* Footer */
.footer{border-top:1px solid var(--line);padding:20px 0;background:var(--bg-soft);margin-top:0}
.footer-grid{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-size:11.5px;color:var(--faint);align-items:center}
.footer-grid a{color:var(--muted)}
@media(max-width:600px){.footer-grid{flex-direction:column;align-items:flex-start;gap:8px}}

/* FAB - FIXED MOBILE */
.fab{position:fixed;right:14px;z-index:90;display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:8px 14px;border-radius:100px;font-size:12.5px;font-weight:600;letter-spacing:.2px;border:1px solid rgba(255,255,255,.12);box-shadow:0 8px 24px rgba(0,0,0,.4);cursor:pointer;transition:.2s;text-decoration:none;white-space:nowrap;max-width:calc(100vw - 28px);overflow:hidden}
.fab:hover{transform:translateY(-1px)}
.fab-wa{bottom:14px;background:#111827;color:white}
.fab-gold{bottom:62px;background:linear-gradient(180deg,var(--gold-light),var(--gold));color:#1a1405;border-color:rgba(0,0,0,.1)}
.fab .dot{width:6px;height:6px;border-radius:50%;background:#22c55e;display:inline-block;flex:0 0 6px}
@media(max-width:400px){
  .fab{right:10px;padding:6px 12px;font-size:11.5px;min-height:38px}
  .fab-gold{bottom:58px}
  .fab-wa{bottom:12px}
}
.hidden{display:none !important}
.skel{background:linear-gradient(90deg,rgba(255,255,255,.04) 25%,rgba(255,255,255,.08) 37%,rgba(255,255,255,.04) 63%);background-size:400% 100%;animation:shim 1.2s infinite;border-radius:8px;height:14px}
@keyframes shim{0%{background-position:100% 0}100%{background-position:-100% 0}}
</style>
</head>
<body style="">
<header class="header">
  <div class="container header-inner">
    <div class="brand">
      <div class="brand-mark">ח</div>
      <div class="brand-name"><b>בית חב״ד כפר רתמים</b><span>Chabad • Rtamim</span></div>
    </div>
    <nav class="nav">
      <a href="#about">אודות</a>
      <a href="#services">שירותים</a>
      <a href="#kodesh">תשמישי קדושה</a>
      <a href="#videos">סרטונים</a>
      <a href="#chavruta">חברותא</a>
      <a href="#contact">צור קשר</a>
    </nav>
    <div class="actions">
      <a class="btn btn-ghost" href="https://wa.me/972527707441" target="_blank">וואטסאפ</a>
      <a class="btn btn-gold" href="https://ultra.kesherhk.info/external/paymentPage/328257" target="_blank">לתרומה</a>
      <button class="hamburger" id="hamburger" aria-label="תפריט"><span></span></button>
    </div>
  </div>
</header>

<div class="mobile-menu" id="mobileMenu">
  <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
    <div class="brand"><div class="brand-mark">ח</div><div class="brand-name"><b>בית חב״ד</b><span>כפר רתמים</span></div></div>
    <button class="btn btn-ghost" id="closeMenu">סגור</button>
  </div>
  <nav style="display:flex;flex-direction:column;margin-top:24px">
    <a href="#about" onclick="closeMobile()" style="padding:14px 0;border-bottom:1px solid var(--line);font-size:18px;font-family:var(--serif)">אודות</a>
    <a href="#services" onclick="closeMobile()" style="padding:14px 0;border-bottom:1px solid var(--line);font-size:18px;font-family:var(--serif)">שירותים</a>
    <a href="#kodesh" onclick="closeMobile()" style="padding:14px 0;border-bottom:1px solid var(--line);font-size:18px;font-family:var(--serif)">תשמישי קדושה</a>
    <a href="#videos" onclick="closeMobile()" style="padding:14px 0;border-bottom:1px solid var(--line);font-size:18px;font-family:var(--serif)">סרטונים</a>
    <a href="#chavruta" onclick="closeMobile()" style="padding:14px 0;border-bottom:1px solid var(--line);font-size:18px;font-family:var(--serif)">חברותא</a>
    <a href="#contact" onclick="closeMobile()" style="padding:14px 0;border-bottom:1px solid var(--line);font-size:18px;font-family:var(--serif)">צור קשר</a>
  </nav>
  <div style="margin-top:auto;display:flex;gap:10px;padding-top:20px;flex-wrap:wrap">
    <a class="btn btn-ghost" style="flex:1 1 120px" href="https://wa.me/972527707441" target="_blank">וואטסאפ</a>
    <a class="btn btn-gold" style="flex:1 1 120px" href="https://ultra.kesherhk.info/external/paymentPage/328257" target="_blank">לתרומה</a>
  </div>
</div>

<main>
  <section class="hero-section">
    <div class="container hero-grid">
      <div style="min-width:0">
        <div class="kicker" id="heroKicker">אהבת ישראל • אחריות • קהילה</div>
        <h1 class="hero-title"><span class="gold" id="heroTitle">בית חב״ד</span><span class="thin" id="heroTitle2">כפר רתמים</span></h1>
        <p class="subtitle" id="heroSubtitle">בית פתוח לכל יהודי - תפילות, שיעורי תורה, חגים, שמחות ועזרה בכל עניין יהודי. כאן בשבילך, תמיד בחיוך ולב פתוח.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#kodesh">תשמישי קדושה</a>
          <a class="btn btn-ghost" href="https://wa.me/972527707441" target="_blank">שיחה בוואטסאפ</a>
        </div>
        <div class="hero-meta">
          <div class="meta-item"><b>בית פתוח</b><span>לכל יהודי, בכל זמן</span></div>
          <div class="meta-item"><b>בהידור</b><span>סופר מוסמך • אחריות</span></div>
          <div class="meta-item"><b>052-7707441</b><span>מענה מהיר</span></div>
        </div>
      </div>

      <div class="side-card">
        <div class="eyebrow" id="aboutEyebrow">בית פתוח לכל יהודי</div>
        <h3 id="aboutHeadingMini">מי אנחנו</h3>
        <p class="desc" id="aboutP1Short">בית חב״ד כפר רתמים הוקם מתוך שליחות ואהבת ישראל. תפילות, שיעורים, חגים, בר מצווה, תפילין ומזוזות - הכל באהבה ובאחריות.</p>
        <ul class="side-list">
          <li><span>תפילות שבת וחג</span><strong>קידוש קהילתי</strong></li>
          <li><span>שיעורי תורה</span><strong>חברותא יומית</strong></li>
          <li><span>בדיקת תפילין ומזוזות</span><strong>בהידור</strong></li>
        </ul>
        <div class="side-card-actions">
          <a class="btn btn-ghost" href="#contact">צור קשר</a>
          <a class="btn btn-gold" href="https://wa.me/972527707441" target="_blank">וואטסאפ</a>
        </div>
        <div class="side-footer" id="aboutFooter">בית חב״ד כפר רתמים · 052-7707441</div>
      </div>
    </div>
  </section>

  <section class="section" id="about">
    <div class="container">
      <div class="sec-head">
        <div class="eyebrow" id="aboutTitle">אודות בית חב״ד</div>
        <h2 class="h2" id="aboutHeading">שליחות של <em>אהבת ישראל</em></h2>
        <p class="sec-desc" id="aboutP1">בית חב״ד כפר רתמים הוקם מתוך שליחות ואהבת ישראל אמיתית. אנחנו כאן כדי שכל יהודי ויהודייה בכפר רתמים והסביבה ירגישו בבית - בלי תנאים ובלי שיפוטיות.</p>
      </div>
      <div class="about-grid">
        <div class="c-card"><p id="aboutP2">תפילות בשבתות וחגים, שיעורי תורה, הכנה לבר מצווה, בדיקת תפילין ומזוזות, סיוע בשמחות, ליווי אישי וקהילה חמה. הדלת שלנו פתוחה, הלב שלנו פתוח - בואו להיות חלק מהמשפחה.</p></div>
        <div class="c-card muted-card">
          <div><div style="width:40px;height:40px;border-radius:50%;border:1px solid var(--line-gold);display:grid;place-items:center;margin:0 auto;color:var(--gold);font-size:16px">✦</div><div style="margin-top:12px;font-family:var(--serif);font-size:17px;font-weight:500">בית פתוח, לב פתוח</div><div style="margin-top:4px;color:var(--muted);font-size:12px;font-weight:300">לא משנה מאיפה באת - בבית חב״ד אתה בבית.</div><div style="margin-top:10px;font-size:9.5px;letter-spacing:.8px;text-transform:uppercase;color:var(--faint)" id="aboutFooter2">בית חב״ד כפר רתמים · 052-7707441</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="services">
    <div class="container">
      <div class="sec-head"><div class="eyebrow" id="servicesEyebrow">הכל באהבה, הכל לשם שמיים</div><h2 class="h2" id="servicesTitle">מה אצלנו?</h2></div>
      <div class="services-grid" id="servicesGrid"></div>
    </div>
  </section>

  <section class="section" id="kodesh">
    <div class="container">
      <div class="sec-head"><div class="eyebrow" id="kodeshEyebrow">בהידור, באחריות ובמחיר הוגן</div><h2 class="h2" id="kodeshTitle">תשמישי <em>קדושה</em></h2><p class="sec-desc">כל פריט נבדק על ידי סופר מוסמך, עם אחריות מלאה והדרכה אישית.</p></div>
      <div class="kodesh-grid" id="kodeshGrid"></div>
    </div>
  </section>

  <section class="section" id="videos">
    <div class="container">
      <div class="sec-head"><div class="eyebrow" id="videosEyebrow">תורה, השראה וקהילה</div><h2 class="h2" id="videosTitle">סרטונים</h2></div>
      <div class="videos-wrap" id="videosWrap"></div>
    </div>
  </section>

  <section class="section" id="chavruta">
    <div class="container">
      <div class="cta">
        <div style="min-width:0">
          <div class="eyebrow" id="chavrutaEyebrow">תורה בכל מקום, בכל זמן</div>
          <h2 class="h2" id="chavrutaTitle" style="font-size:28px">לימוד בחברותא</h2>
          <p class="sec-desc" id="chavrutaText" style="margin-top:8px">רוצה לקבוע חברותא יומית? להתקדם בלימוד גמרא, חסידות או הלכה עם מישהו שילווה אותך? פיתחנו אפליקציה פשוטה לקביעת חברותות.</p>
        </div>
        <a class="btn btn-primary" id="chavrutaBtn" href="https://efi770.github.io/-my-new-project/" target="_blank">כניסה לאפליקציה</a>
      </div>
    </div>
  </section>

  <section class="section" id="donate">
    <div class="container">
      <div class="donation">
        <div class="eyebrow" style="justify-content:center">שותפים בשליחות</div>
        <h2 id="donationTitle">שותפים <em>בשליחות</em></h2>
        <p id="donationText">כל פעילות של בית חב״ד - מהקידוש של שבת ועד סל מזון למשפחה - קורה בזכות שותפים כמוך. כל תרומה מחזיקה את האור דולק.</p>
        <div class="donation-actions">
          <a class="btn btn-gold" id="donationBtn" href="https://ultra.kesherhk.info/external/paymentPage/328257" target="_blank">לתרומה מאובטחת</a>
          <a class="btn btn-ghost" href="https://wa.me/972527707441" target="_blank">דברו איתנו</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="contact">
    <div class="container">
      <div class="sec-head"><h2 class="h2" id="contactTitle">רוצים לדבר?</h2></div>
      <div class="contact-grid">
        <div class="c-card">
          <p id="contactText">לשאלה, להזמנת תפילין, לקביעת שיעור או סתם לשיחה טובה - אנחנו כאן. עונים מהר בוואטסאפ.</p>
          <div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap">
            <a class="btn btn-gold" id="contactWa" href="https://wa.me/972527707441" target="_blank">וואטסאפ: 052-7707441</a>
            <a class="btn btn-ghost" href="tel:+972527707441">שיחה</a>
          </div>
          <div style="margin-top:14px;font-size:11px;color:var(--faint)" id="contactAddress">כפר רתמים, הנגב</div>
          <div style="margin-top:6px;display:inline-flex;min-height:22px;padding:4px 10px;border-radius:100px;background:rgba(255,255,255,.04);border:1px solid var(--line);font-size:10.5px;color:var(--faint)" id="updatedAt">מעודכן: 2026-11-01</div>
        </div>
        <div class="c-card muted-card">
          <div><div style="font-family:var(--serif);font-size:20px;font-weight:500">בית חב״ד כפר רתמים</div><div style="margin-top:4px;font-size:10.5px;letter-spacing:1.2px;text-transform:uppercase;color:var(--faint)">בית פתוח לכל יהודי • אהבת ישראל</div></div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container footer-grid">
    <div>© <span id="year">2026</span> בית חב״ד כפר רתמים</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap"><a href="https://wa.me/972527707441" target="_blank">וואטסאפ</a><a href="https://ultra.kesherhk.info/external/paymentPage/328257" target="_blank">תרומה</a><a href="https://efi770.github.io/-my-new-project/" target="_blank">חברותא</a></div>
  </div>
</footer>

<a class="fab fab-wa" href="https://wa.me/972527707441" target="_blank"><span class="dot"></span> וואטסאפ</a>
<a class="fab fab-gold" href="https://efi770.github.io/-my-new-project/" target="_blank">חברותא · לאפליקציה</a>

<script>
const $=id=>document.getElementById(id);
const hamburger=$('hamburger'),mobileMenu=$('mobileMenu'),closeMenuBtn=$('closeMenu');
function openMobile(){mobileMenu.classList.add('open');document.body.style.overflow='hidden'}
function closeMobile(){mobileMenu.classList.remove('open');document.body.style.overflow=''}
hamburger.addEventListener('click',openMobile);closeMenuBtn.addEventListener('click',closeMobile);
function escapeHtml(s){return (s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function toWaLink(t){return 'https://wa.me/972527707441?text='+encodeURIComponent(t||'שלום');}
function youtubeId(u){try{const x=new URL(u);if(x.hostname.includes('youtu.be'))return x.pathname.slice(1).split('?')[0];if(x.searchParams.get('v'))return x.searchParams.get('v');return x.pathname.split('/').pop()||''}catch(e){return ''}}
function embedUrl(u){const id=youtubeId(u);return id?'https://www.youtube.com/embed/'+id+'?rel=0&modestbranding=1':null}
const defaultsServices=[
  {num:'01',title:'תפילות ושבת',desc:'תפילות שבת וחג, קידוש קהילתי, אווירה חמה ומקרבת לכל המשפחה.'},
  {num:'02',title:'שיעורי תורה',desc:'שיעורים קבועים, חברותות אישיות, פרשת שבוע בגובה העיניים.'},
  {num:'03',title:'חגים וקהילה',desc:'הדלקות חנוכה, סדרי פסח, סוכה פתוחה, פורים לכל הילדים.'},
  {num:'04',title:'עזרה וייעוץ',desc:'בר מצווה, נישואין, תפילין, מזוזות, שאלות הלכתיות - אנחנו כאן.'}
];
async function loadJson(p){const r=await fetch(p+'?t='+Date.now(),{cache:'no-store'});if(!r.ok)throw new Error(p);return r.json()}
async function loadFromBin(id){const r=await fetch('https://api.jsonbin.io/v3/b/'+id+'/latest',{cache:'no-store'});if(!r.ok)throw new Error('bin');const j=await r.json();return j.record||j}
function render(data){
  const h=data.hero||{}; $('heroKicker').textContent=h.kicker||'אהבת ישראל • אחריות • קהילה'; $('heroTitle').textContent=h.title||'בית חב״ד'; $('heroTitle2').textContent=h.title2||'כפר רתמים'; $('heroSubtitle').textContent=h.subtitle||'';
  const a=data.about||{}; $('aboutTitle').textContent=a.title||'אודות בית חב״ד'; $('aboutEyebrow').textContent=a.note||'בית פתוח לכל יהודי'; $('aboutHeading').textContent=a.heading||'מי אנחנו'; $('aboutHeadingMini').textContent=a.heading||'מי אנחנו'; $('aboutP1').textContent=a.p1||''; $('aboutP2').textContent=a.p2||''; $('aboutFooter').textContent=a.footer||''; const f2=$('aboutFooter2');if(f2)f2.textContent=a.footer||''; const short=$('aboutP1Short');if(short)short.textContent=(a.p1||'').slice(0,140)+'...';
  const s=(data.services&&data.services.items)||defaultsServices; $('servicesGrid').innerHTML=s.map(it=>`<div class="s-card"><div class="num">${escapeHtml(it.num||'')}</div><h3>${escapeHtml(it.title)}</h3><p>${escapeHtml(it.desc)}</p></div>`).join(''); if(data.services){$('servicesTitle').textContent=data.services.title||'מה אצלנו?'; $('servicesEyebrow').textContent=data.services.note||'הכל באהבה'}
  const k=data.kodesh||{}; $('kodeshTitle').innerHTML=(k.title||'תשמישי קדושה').replace('קדושה','<em>קדושה</em>'); $('kodeshEyebrow').textContent=k.note||'בהידור, באחריות ובמחיר הוגן'; const items=k.items||{}; const order=['tefillin','mezuzah','tallit','barMitzvah']; const icons={tefillin:'ת',mezuzah:'מ',tallit:'ט',barMitzvah:'ב'}; $('kodeshGrid').innerHTML=order.map(key=>{const it=items[key];if(!it)return'';return `<div class="k-card"><div class="k-top"><div class="k-icon">${icons[key]||''}</div><span class="price-tag">${escapeHtml(it.price||'')}</span></div><h3>${escapeHtml(it.title||'')}</h3><p>${escapeHtml(it.desc||'')}</p><div class="k-actions"><a class="btn btn-ghost" href="${toWaLink(it.waText)}" target="_blank">וואטסאפ</a><a class="btn btn-primary" href="tel:+972527707441">לפרטים</a></div></div>`}).join('');
  const v=data.videos||{items:[]}; $('videosTitle').textContent=v.title||'סרטונים'; $('videosEyebrow').textContent=v.note||'תורה, השראה וקהילה'; const wrap=$('videosWrap'); const vItems=v.items||[]; if(!vItems.length){$('videos').classList.add('hidden')}else{$('videos').classList.remove('hidden'); wrap.innerHTML=vItems.map(vid=>{const emb=embedUrl(vid.url||'');const thumb=emb?`<iframe src="${emb}" loading="lazy" allowfullscreen></iframe>`:`<div style="display:grid;place-items:center;height:100%;color:var(--faint)">▶</div>`;return `<div class="v-card"><div class="v-thumb">${thumb}</div><div class="v-body"><h4>${escapeHtml(vid.title||'')}</h4><a href="${escapeHtml(vid.url||'')}" target="_blank">פתח ביוטיוב</a></div></div>`}).join('')}
  const ch=data.chavruta||{}; $('chavrutaTitle').textContent=ch.title||'לימוד בחברותא'; $('chavrutaEyebrow').textContent=ch.note||'תורה בכל מקום'; $('chavrutaText').textContent=ch.text||''; $('chavrutaBtn').textContent=ch.button||'כניסה לאפליקציה'; $('chavrutaBtn').href=ch.url||'https://efi770.github.io/-my-new-project/';
  const d=data.donation||{}; $('donationTitle').innerHTML=(d.title||'שותפים בשליחות').replace('בשליחות','<em>בשליחות</em>'); $('donationText').textContent=d.text||'';
  const c=data.contact||{}; $('contactTitle').textContent=c.title||'רוצים לדבר?'; $('contactText').textContent=c.text||''; $('contactWa').textContent='וואטסאפ: '+(c.phone||'052-7707441'); $('contactWa').href='https://wa.me/'+(c.phoneLink||'972527707441'); $('contactAddress').textContent=c.address||'כפר רתמים, הנגב'; $('updatedAt').textContent='מעודכן: '+(data.updatedAt||''); $('year').textContent=new Date().getFullYear();
}
async function init(){
  $('year').textContent=new Date().getFullYear();
  let data=null;
  try{
    const cfg=await loadJson('./config.json');
    if(cfg&&cfg.contentBinId&&cfg.contentBinId.trim()){
      try{data=await loadFromBin(cfg.contentBinId.trim())}catch(e){data=await loadJson('./content.json')}
    }else{data=await loadJson('./content.json')}
  }catch(e){try{data=await loadJson('./content.json')}catch(_){}}
  if(data)render(data);
}
init();
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('./service-worker.js').catch(()=>{})})}
</script>
<script>(function(){var loc=location.href.replace(/#.*$/,"");var ATTR_NAMES=["data-product-id","data-productid","data-product_id","product-id","productid","product_id","data-source-entity-id","source-entity-id","source_entity_id","data-product","data-metadata","data-meta"];var DATASET_KEYS=["productId","productid","product_id","sourceEntityId","sourceentityid","source_entity_id","product","metadata","meta"];function readProductId(value){if(typeof value!=="string"||value.length===0)return null;if(/^[0-9]{6,}$/.test(value))return value;var match=value.match(/(?:product(?:_|-)?id|source(?:_|-)?entity(?:_|-)?id)["'=:\s]+([0-9]{6,})/i);return match?match[1]:null}function extractProductId(start){for(var node=start;node&&node!==document.body;node=node.parentElement){for(var i=0;i<ATTR_NAMES.length;i++){var attrValue=node.getAttribute&&node.getAttribute(ATTR_NAMES[i]);var attrProductId=readProductId(attrValue);if(attrProductId)return attrProductId}var dataset=node.dataset||null;if(dataset){for(var j=0;j<DATASET_KEYS.length;j++){var dataValue=dataset[DATASET_KEYS[j]];var dataProductId=readProductId(dataValue);if(dataProductId)return dataProductId}}}return null}function isInlineMediaSlotElement(node){return !!(node&&node.getAttribute&&node.getAttribute("data-clippy-inline-media-slot")!==null)}function findInlineMediaSlot(start){for(var node=start;node&&node!==document.body;node=node.parentElement){if(isInlineMediaSlotElement(node))return node}return null}function readInlineMediaUrl(node){if(!node)return null;return node.getAttribute&&((node.getAttribute("data-clippy-inline-media-url")||node.getAttribute("data-url")||node.getAttribute("data_url")))||node.href||null}function stripHash(url){return String(url).replace(/#.*$/,"")}function urlsMatch(a,b){if(!a||!b)return false;try{return stripHash(new URL(a,loc).href)===stripHash(new URL(b,loc).href)}catch(_){return stripHash(a)===stripHash(b)}}function isFirstPartyReelUrl(value){try{var url=new URL(value,loc);if(url.protocol!=="https:")return false;var host=url.hostname.toLowerCase();var supported=host==="instagram.com"||host.endsWith(".instagram.com")||host==="facebook.com"||host.endsWith(".facebook.com");return supported&&/\/reels?\//i.test(url.pathname)}catch(_){return false}}function isInlineMediaUrlClick(node,href){var slot=findInlineMediaSlot(node);if(!slot)return false;var slotUrl=readInlineMediaUrl(slot);if(slotUrl)return urlsMatch(href,slotUrl);return isFirstPartyReelUrl(href)}function findDataHref(start){for(var node=start;node&&node!==document.body;node=node.parentElement){if(node.getAttribute){var href=node.getAttribute("data-href")||node.getAttribute("data-url");if(href)return{href:href,node:node}}}return null}var nativeOpen=window.open;window.open=function(url){if(parent!==window&&typeof url==="string"&&/^https?:\/\//.test(url)){parent.postMessage({type:"ecto:usercontent-link-click",href:url},"*");return null}return nativeOpen?nativeOpen.apply(window,arguments):null};document.addEventListener("click",function(e){var target=e.target instanceof Element?e.target:null;if(!target)return;if(parent===window)return;var a=target.closest?target.closest("a[href]"):null;if(a&&a.href&&/^https?:\/\//.test(a.href)&&a.href.replace(/#.*$/,"")!==loc){if(isInlineMediaUrlClick(a,a.href))return;var productId=extractProductId(target)||extractProductId(a);if(productId){e.preventDefault();parent.postMessage({type:"ecto-artifact-link-click",productId:productId},"*");return}e.preventDefault();parent.postMessage({type:"ecto:usercontent-link-click",href:a.href},"*");return}var dataHref=findDataHref(target);if(dataHref&&/^https?:\/\//.test(dataHref.href)&&dataHref.href.replace(/#.*$/,"")!==loc){if(isInlineMediaUrlClick(dataHref.node,dataHref.href))return;e.preventDefault();parent.postMessage({type:"ecto:usercontent-link-click",href:dataHref.href},"*")}},true)})();</script><script>(function(){var FOCUS_TYPE="ecto:artifact-focus-request";var CLOSE_TYPE="ecto:artifact-close-request";function focusArtifactDocument(){var body=document.body;if(!body)return;try{window.focus();}catch(e){}if(!body.hasAttribute("tabindex"))body.setAttribute("tabindex","-1");try{body.focus({preventScroll:true});}catch(e){try{body.focus();}catch(e2){}}}window.addEventListener("message",function(event){if(event.source!==window.parent)return;var data=event.data;if(!data||typeof data!=="object"||data.type!==FOCUS_TYPE)return;if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",focusArtifactDocument,{once:true});return;}focusArtifactDocument();});window.addEventListener("keydown",function(event){if(event.key!=="Escape")return;window.setTimeout(function(){if(event.defaultPrevented)return;window.parent.postMessage({type:CLOSE_TYPE},"*");},0);});})();</script>

</body></html>
