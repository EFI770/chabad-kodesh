# בית חב״ד כפר רתמים

אתר סטטי ל־GitHub Pages.

## קישורים
- אתר: https://efi770.github.io/chabad-kodesh/
- ניהול (סודי): https://efi770.github.io/chabad-kodesh/admin.html

## קבצים עיקריים
- `index.html` — האתר הציבורי
- `admin.html` — עריכת תוכן
- `content.json` — תוכן ברירת מחדל
- `config.json` — חיבור JSONBin (אופציונלי)


<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>ניהול סודי — בית חב״ד כפר רתמים</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;700;900&family=Heebo:wght@300;400;500;700;800&display=swap" rel="stylesheet">
<style>
:root{
--bg:#080b14;
--bg-card:#121a2e;
--bg-card-2:#0e152a;
--bg-input:#0c1326;
--gold:#d4af57;
--gold-light:#e8c77a;
--gold-soft:rgba(212,175,87,0.18);
--text:#f1f3f9;
--muted:#8b96b5;
--muted-2:#5a678a;
--red:#ff5a6a;
--green:#22c55e;
--green-dark:#16a34a;
--radius:20px;
--radius-sm:12px;
--border:1px solid rgba(212,175,87,0.14);
--shadow:0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,87,0.06) inset;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:'Heebo',system-ui,sans-serif;min-height:100vh}
body{padding-bottom:110px}
h1,h2,h3{font-family:'Frank Ruhl Libre',serif;letter-spacing:-0.02em}
a{color:var(--gold-light)}
button,input,textarea{font-family:'Heebo',sans-serif}
input,textarea{width:100%;background:var(--bg-input);border:1px solid rgba(139,150,181,0.18);color:var(--text);border-radius:12px;padding:12px 14px;font-size:15px;line-height:1.4;transition:.2s;border-color:rgba(139,150,181,0.18)}
input:focus,textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px var(--gold-soft)}
textarea{resize:vertical;min-height:90px}
label{display:block;font-size:13px;color:var(--muted);margin-bottom:6px;font-weight:500}
small{color:var(--muted-2);font-size:12.5px;line-height:1.5}

/* LOGIN */
#login-screen{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:radial-gradient(800px 600px at 70% -10%, rgba(212,175,87,0.18), transparent 60%), radial-gradient(700px 500px at -10% 30%, rgba(60,90,200,0.18), transparent 60%), var(--bg);padding:20px}
.login-card{width:100%;max-width:420px;background:linear-gradient(180deg, rgba(18,26,46,0.95), rgba(12,19,38,0.98));border:var(--border);border-radius:28px;padding:32px 26px;box-shadow:var(--shadow);text-align:center}
.login-card .logo{width:62px;height:62px;border-radius:50%;background:linear-gradient(145deg, var(--gold), var(--gold-light));display:flex;align-items:center;justify-content:center;margin:0 auto 14px;color:#1a1200;font-weight:900;font-family:'Frank Ruhl Libre';font-size:26px;box-shadow:0 8px 20px rgba(212,175,87,0.35)}
.login-card h1{margin:6px 0 4px;font-size:28px}
.login-card p{margin:0 0 18px;color:var(--muted);font-size:14px}
.login-card input{text-align:center;letter-spacing:2px;font-size:18px}
.btn{appearance:none;border:none;border-radius:999px;padding:12px 20px;font-weight:700;font-size:14px;cursor:pointer;transition:.2s;display:inline-flex;align-items:center;justify-content:center;gap:8px}
.btn-primary{background:linear-gradient(180deg, var(--gold-light), var(--gold));color:#1c1605;box-shadow:0 8px 20px rgba(212,175,87,0.28)}
.btn-primary:hover{transform:translateY(-1px);filter:brightness(1.05)}
.btn-ghost{background:rgba(255,255,255,0.06);color:var(--text);border:1px solid rgba(255,255,255,0.1)}
.btn-ghost:hover{background:rgba(255,255,255,0.1)}
.btn-green{background:linear-gradient(180deg, #2de071, var(--green-dark));color:#04120a;box-shadow:0 10px 22px rgba(34,197,94,0.35);font-size:15px;padding:13px 26px}
.btn-green:hover{transform:translateY(-1px)}
.btn-danger{background:rgba(255,90,106,0.1);color:var(--red);border:1px solid rgba(255,90,106,0.25)}
.btn-danger:hover{background:rgba(255,90,106,0.18)}
.btn-small{padding:8px 14px;font-size:13px;border-radius:999px}

/* LAYOUT */
.topbar{position:sticky;top:0;z-index:50;background:rgba(8,11,20,0.86);backdrop-filter:blur(16px);border-bottom:1px solid rgba(212,175,87,0.12);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.topbar .brand{display:flex;align-items:center;gap:12px}
.topbar .brand-icon{width:38px;height:38px;border-radius:12px;background:linear-gradient(145deg, var(--gold), var(--gold-light));display:grid;place-items:center;color:#201800;font-weight:900;font-family:'Frank Ruhl Libre';font-size:18px}
.topbar .brand b{font-family:'Frank Ruhl Libre';font-size:18px}
.topbar .brand span{font-size:12px;color:var(--muted);display:block;margin-top:-2px}
.container{max-width:1100px;margin:0 auto;padding:24px 18px}
@media(min-width:900px){.container{padding:32px 24px}}
.section-card{background:linear-gradient(180deg, rgba(18,26,46,0.92), rgba(13,20,38,0.98));border:var(--border);border-radius:var(--radius);padding:22px 18px 18px;box-shadow:var(--shadow);margin-bottom:22px}
@media(min-width:700px){.section-card{padding:26px 24px 22px}}
.section-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:16px;border-bottom:1px solid rgba(139,150,181,0.1);padding-bottom:14px}
.section-head h2{margin:0;font-size:24px;display:flex;align-items:center;gap:10px}
.section-head .num{width:32px;height:32px;border-radius:10px;background:rgba(212,175,87,0.14);border:1px solid rgba(212,175,87,0.22);color:var(--gold-light);display:grid;place-items:center;font-size:14px;font-weight:800;font-family:'Heebo'}
.section-head p{margin:4px 0 0;color:var(--muted);font-size:13px;line-height:1.5}
.grid-2{display:grid;grid-template-columns:1fr;gap:14px}
@media(min-width:700px){.grid-2{grid-template-columns:1fr 1fr}}
.grid-1{display:grid;grid-template-columns:1fr;gap:14px}
.field{margin-bottom:2px}
.kodesh-grid{display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.kodesh-grid{grid-template-columns:1fr 1fr}}
.kodesh-item{background:linear-gradient(180deg, rgba(14,21,42,0.9), rgba(10,16,32,0.98));border:1px solid rgba(212,175,87,0.13);border-radius:18px;padding:16px 14px;position:relative;overflow:hidden}
.kodesh-item:before{content:'';position:absolute;inset:0 0 auto 0;height:1px;background:linear-gradient(90deg, transparent, rgba(212,175,87,0.35), transparent)}
.kodesh-item h3{margin:0 0 12px;font-size:18px;color:var(--gold-light);display:flex;align-items:center;justify-content:space-between;gap:10px}
.price-preview-row{display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap}
.price-tag{display:inline-flex;align-items:center;background:linear-gradient(180deg, var(--gold-light), var(--gold));color:#221a00;border-radius:999px;padding:6px 14px;font-weight:800;font-size:13px;letter-spacing:0.02em;box-shadow:0 4px 12px rgba(212,175,87,0.28);min-height:28px}
.price-tag:empty{display:none}
.videos-list{display:flex;flex-direction:column;gap:12px}
.video-row{background:rgba(255,255,255,0.03);border:1px solid rgba(139,150,181,0.14);border-radius:16px;padding:12px;display:grid;grid-template-columns:1fr;gap:10px;position:relative}
@media(min-width:700px){.video-row{grid-template-columns:1fr 1fr auto;align-items:start}}
.video-row .thumb{border-radius:10px;overflow:hidden;background:#0a0f20;border:1px solid rgba(255,255,255,0.06);aspect-ratio:16/9;display:grid;place-items:center;color:var(--muted-2);font-size:12px;max-width:220px}
.video-row .thumb img{width:100%;height:100%;object-fit:cover;display:block}
.video-row .thumb iframe{width:100%;height:100%;border:0;display:block}
.badge{display:inline-flex;padding:3px 8px;border-radius:999px;background:rgba(212,175,87,0.12);border:1px solid rgba(212,175,87,0.2);color:var(--gold-light);font-size:11px;font-weight:700}
.cfg-help{background:rgba(212,175,87,0.07);border:1px dashed rgba(212,175,87,0.28);border-radius:14px;padding:12px 14px;margin-top:12px;line-height:1.6}
.cfg-help ol{margin:6px 0 0;padding-inline-start:18px}
.cfg-help li{margin:3px 0;color:var(--muted);font-size:13px}
.cfg-help li b{color:var(--text)}
.status{position:fixed;top:16px;inset-inline:0;margin:0 auto;max-width:520px;z-index:9998;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:8px;padding:0 14px}
.status-item{pointer-events:auto;background:#121a2e;border:1px solid rgba(255,255,255,0.1);color:var(--text);border-radius:999px;padding:10px 18px;font-size:13.5px;font-weight:600;box-shadow:0 12px 30px rgba(0,0,0,0.45);display:flex;align-items:center;gap:10px;transform:translateY(-8px);opacity:0;animation:pop .36s cubic-bezier(.2,.8,.2,1) forwards}
.status-item.ok{border-color:rgba(34,197,94,0.35);background:linear-gradient(180deg, rgba(18,46,28,0.96), rgba(12,32,20,0.98));color:#c8f5d6}
.status-item.err{border-color:rgba(255,90,106,0.35);background:linear-gradient(180deg, rgba(46,18,22,0.96), rgba(36,14,18,0.98));color:#ffd0d6}
@keyframes pop{to{transform:translateY(0);opacity:1}}
.sticky-bar{position:fixed;bottom:0;inset-inline:0;z-index:60;background:rgba(8,11,20,0.92);backdrop-filter:blur(18px);border-top:1px solid rgba(212,175,87,0.18);padding:12px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.sticky-bar .left{display:flex;gap:8px;align-items:center}
.sticky-bar .right{display:flex;gap:10px;align-items:center}
@media(max-width:600px){.sticky-bar{padding:12px 10px}.sticky-bar .btn{padding:11px 14px;font-size:13.5px}}
.hide{display:none !important}
.muted{color:var(--muted)}
.divider{height:1px;background:rgba(139,150,181,0.1);margin:12px 0}
.link{color:var(--gold-light);text-decoration:none;border-bottom:1px dashed rgba(212,175,87,0.35)}
.link:hover{border-bottom-style:solid}
</style>
</head>
<body>

<div id="login-screen">
  <div class="login-card">
    <div class="logo">ח״ב</div>
    <h1>כניסת מנהל</h1>
    <p>ממשק ניהול סודי לבית חב״ד כפר רתמים<br>הגישה מוגבלת למורשים בלבד</p>
    <div class="field" style="margin:16px 0 12px">
      <input id="passInput" type="password" placeholder="סיסמה" autocomplete="current-password">
    </div>
    <button class="btn btn-primary" style="width:100%" onclick="login()">כניסה לניהול</button>
    <small style="display:block;margin-top:14px">סשן נשמר ב־sessionStorage • הגדרות ענן ב־localStorage</small>
    <div id="loginError" class="hide" style="margin-top:12px;color:var(--red);font-size:13px;font-weight:700">סיסמה שגויה</div>
  </div>
</div>

<div id="admin-root" class="hide">
  <div class="topbar">
    <div class="brand">
      <div class="brand-icon">ח״ב</div>
      <div>
        <b>בית חב״ד כפר רתמים — ניהול</b>
        <span id="updatedAtLabel">טוען נתונים…</span>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-ghost btn-small" onclick="logout()">התנתק</button>
    </div>
  </div>

  <div class="container">

    <!-- 1) הגדרות ענן -->
    <div class="section-card" id="sec-cfg">
      <div class="section-head">
        <div>
          <h2><span class="num">☁️</span> הגדרות ענן — JSONBin</h2>
          <p>כאן מגדירים איפה נשמר התוכן שכל הגולשים רואים. בלי זה כפתור "שמור לכולם" לא יעבוד.</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="field">
          <label>Bin ID</label>
          <input id="cfg_binId" placeholder="לדוגמה: 65f...">
        </div>
        <div class="field">
          <label>Access Key (Master Key) — נשמר מקומית בלבד</label>
          <input id="cfg_apiKey" type="password" placeholder="$2a$10$...">
        </div>
      </div>
      <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="saveCfgToDevice()">שמור הגדרות במכשיר</button>
        <button class="btn btn-ghost" onclick="testConnection()">בדוק חיבור לענן</button>
        <button class="btn btn-ghost" onclick="clearCfg()">נקה הגדרות</button>
        <span id="cfgStatus" class="muted" style="font-size:13px;align-self:center"></span>
      </div>
      <div class="cfg-help">
        <b style="color:var(--gold-light)">איך ליצור Bin ב־jsonbin.io (דקה אחת):</b>
        <ol>
          <li>היכנס ל־<a class="link" href="https://jsonbin.io" target="_blank">jsonbin.io</a> ופתח חשבון חינם.</li>
          <li>לחץ <b>Create Bin</b>, הדבק את תוכן <b>content.json</b> הקיים (או ברירת המחדל כאן) ושמור.</li>
          <li>העתק את ה־<b>Bin ID</b> מה־URL ואת ה־<b>Master Key</b> מ־API Keys.</li>
          <li>הדבק כאן למעלה ולחץ "שמור הגדרות במכשיר". ההגדרות נשמרות ב־<code>localStorage: chabad_jsonbin_cfg</code>.</li>
        </ol>
        <small>האתר הציבורי קורא מאותו Bin. אנחנו שומרים תמיד עם <code>X-Bin-Versioning: false</code> כדי לא למלא היסטוריה.</small>
      </div>
    </div>

    <!-- 2) Hero -->
    <div class="section-card">
      <div class="section-head">
        <div>
          <h2><span class="num">1</span> עמוד הבית — Hero</h2>
          <p>הכותרת הראשית שהגולש רואה בכניסה לאתר</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="field"><label>kicker — שורה קטנה מעל הכותרת</label><input id="hero_kicker"></div>
        <div class="field"><label>title — שורה ראשונה</label><input id="hero_title"></div>
        <div class="field"><label>title2 — שורה שנייה מודגשת זהב</label><input id="hero_title2"></div>
        <div class="field"><label>subtitle — תיאור קצר</label><textarea id="hero_subtitle"></textarea></div>
      </div>
    </div>

    <!-- 3) אודות -->
    <div class="section-card">
      <div class="section-head">
        <div>
          <h2><span class="num">2</span> אודות</h2>
          <p>סיפור השליחות, פסקאות וסיום</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="field"><label>title</label><input id="about_title"></div>
        <div class="field"><label>note — תווית קטנה</label><input id="about_note"></div>
        <div class="field" style="grid-column:1 / -1"><label>heading — כותרת משנה</label><input id="about_heading"></div>
        <div class="field" style="grid-column:1 / -1"><label>p1 — פסקה ראשונה</label><textarea id="about_p1"></textarea></div>
        <div class="field" style="grid-column:1 / -1"><label>p2 — פסקה שנייה</label><textarea id="about_p2"></textarea></div>
        <div class="field" style="grid-column:1 / -1"><label>footer — שורת חתימה</label><input id="about_footer"></div>
      </div>
    </div>

    <!-- 4) תשמישי קדושה -->
    <div class="section-card">
      <div class="section-head">
        <div>
          <h2><span class="num">3</span> תשמישי קדושה</h2>
          <p>4 כרטיסים קבועים. הסדר נשמר: תפילין, מזוזה, טלית, בר מצווה. תצוגה מקדימה חיה למחיר.</p>
        </div>
      </div>
      <div class="grid-2" style="margin-bottom:16px">
        <div class="field"><label>כותרת מקטע</label><input id="kodesh_title"></div>
        <div class="field"><label>note — תווית</label><input id="kodesh_note"></div>
      </div>
      <div class="kodesh-grid" id="kodeshGrid"></div>
    </div>

    <!-- 5) סרטונים -->
    <div class="section-card">
      <div class="section-head">
        <div>
          <h2><span class="num">4</span> סרטונים</h2>
          <p>רשימה דינמית. אם הקישור הוא יוטיוב — תוצג תצוגה מקדימה</p>
        </div>
        <button class="btn btn-ghost btn-small" onclick="addVideo()">+ הוסף סרטון</button>
      </div>
      <div class="grid-2" style="margin-bottom:14px">
        <div class="field"><label>כותרת מקטע</label><input id="videos_title"></div>
        <div class="field"><label>note</label><input id="videos_note"></div>
      </div>
      <div class="videos-list" id="videosList"></div>
    </div>

    <!-- 6) חברותא -->
    <div class="section-card">
      <div class="section-head">
        <div>
          <h2><span class="num">5</span> חברותא</h2>
          <p>בלוק הזמנה ללימוד</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="field"><label>title</label><input id="chavruta_title"></div>
        <div class="field"><label>note</label><input id="chavruta_note"></div>
        <div class="field" style="grid-column:1 / -1"><label>text</label><textarea id="chavruta_text"></textarea></div>
        <div class="field"><label>button — טקסט כפתור</label><input id="chavruta_button"></div>
        <div class="field"><label>url — קישור</label><input id="chavruta_url" placeholder="https://efi770.github.io/-my-new-project/"></div>
      </div>
    </div>

    <!-- 7) צור קשר -->
    <div class="section-card">
      <div class="section-head">
        <div>
          <h2><span class="num">6</span> צור קשר</h2>
          <p>פרטי התקשרות</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="field"><label>title</label><input id="contact_title"></div>
        <div class="field"><label>phone</label><input id="contact_phone" dir="ltr" placeholder="052-7707441"></div>
        <div class="field" style="grid-column:1 / -1"><label>text</label><textarea id="contact_text"></textarea></div>
      </div>
    </div>

    <!-- 8) תרומה -->
    <div class="section-card">
      <div class="section-head">
        <div>
          <h2><span class="num">7</span> תרומה (אופציונלי)</h2>
          <p>לא חובה, אבל מוצג יפה באתר הציבורי אם קיים</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="field"><label>donationTitle</label><input id="donationTitle" placeholder="שותפים בשליחות"></div>
        <div class="field"><label>קישור תרומה קבוע</label><input id="donationLink" dir="ltr" value="https://ultra.kesherhk.info/external/paymentPage/328257" readonly></div>
        <div class="field" style="grid-column:1 / -1"><label>donationText</label><textarea id="donationText" placeholder="כל תרומה עוזרת להמשיך להאיר את המדבר..."></textarea></div>
      </div>
    </div>

    <div style="height:8px"></div>
    <small class="muted" style="display:block;text-align:center;padding:12px 0 0">ממשק ניהול סודי • לא נסרק ע״י גוגל • בית חב״ד כפר רתמים ©</small>
  </div>

  <div class="sticky-bar">
    <div class="left">
      <button class="btn btn-ghost" onclick="loadContent()">↻ רענן מהענן</button>
      <span id="saveHint" class="muted" style="font-size:12px;display:none"></span>
    </div>
    <div class="right">
      <button class="btn btn-green" onclick="saveToAll()">✓ שמור לכולם</button>
    </div>
  </div>
</div>

<div class="status" id="statusWrap"></div>

<script>
/* ===== ברירות מחדל מלאות ===== */
const DEFAULT_DATA = {
  updatedAt: new Date().toISOString().slice(0,10),
  hero: {
    kicker: "בית חב״ד • כפר רתמים",
    title: "הבית היהודי",
    title2: "שלכם במדבר",
    subtitle: "תפילין, מזוזות, טליתות והכנה לבר מצווה • שיעורים, חברותא וקהילה חמה לכל המשפחה"
  },
  about: {
    title: "אודות",
    note: "מי אנחנו",
    heading: "שליחות של אהבה במדבר",
    p1: "בית חב״ד כפר רתמים הוקם מתוך שליחות להאיר את המדבר באור היהדות. אנחנו כאן עבור כל יהודי — באהבה, במאור פנים, ובלי תנאים. בין אם זה תפילין מהודרות, מזוזה לבית, או הכנה מרגשת לבר מצווה — הכל נעשה מתוך דאגה אמיתית ורצון לקרב.",
    p2: "הפעילות כוללת שיעורי תורה, חברותות אישיות, התוועדויות, חגים וקהילה חמה שגדלה מיום ליום. כל אחד ואחת מוזמנים להיות חלק מהמשפחה. הדלת שלנו תמיד פתוחה, הלב תמיד פתוח, והקפה תמיד חם.",
    footer: "הרב אפי — שליח הרבי מליובאוויטש לכפר רתמים והסביבה"
  },
  kodesh: {
    title: "תשמישי קדושה",
    note: "קדושה בהידור",
    items: {
      tefillin: { title: "תפילין מהודרות", desc: "תפילין בד״צ, כתיבה מהודרת, בדיקה מקצועית והתאמה אישית. כולל הדרכה להנחה ותחזוקה.", price: "החל מ-1,450 ₪", waText: "היי הרב אפי, אשמח לפרטים על תפילין מהודרות לכפר רתמים" },
      mezuzah: { title: "מזוזות מהודרות", desc: "מזוזות כשרות למהדרין, קלף איכותי עם אחריות, בדיקה והתקנה בבית.", price: "החל מ-280 ₪", waText: "היי, אשמח לפרטים על מזוזה מהודרת" },
      tallit: { title: "טליתות וציציות", desc: "טלית מהודרת לחתן ולבר מצווה, ציציות עבודת יד. מגוון סגנונות, בדים וגדלים.", price: "החל מ-350 ₪", waText: "היי, אשמח לפרטים על טלית / ציצית" },
      barMitzvah: { title: "הכנה לבר מצווה", desc: "ליווי אישי מלא — לימוד קריאה בתורה, הנחת תפילין, דרשה וערב מרגש למשפחה.", price: "ליווי מלא", waText: "היי, אשמח לפרטים על הכנה לבר מצווה" }
    }
  },
  videos: {
    title: "שיעורים וסרטונים",
    note: "תורה לכל אחד",
    items: [
      { title: "שיעור פרשת השבוע — אור במדבר", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "סוד התפילין — 3 דקות שמשנות הכל", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  chavruta: {
    title: "קובעים חברותא?",
    note: "ללמוד ביחד",
    text: "רוצה לקבוע חברותא? לימוד אחד על אחד בזום או פרונטלית — גמרא, חסידות, פרשה, הלכה. בוחרים זמן שנוח לך, ואנחנו דואגים לכל השאר. מתאים גם למתחילים.",
    button: "לקביעת חברותא",
    url: "https://efi770.github.io/-my-new-project/"
  },
  contact: {
    title: "צור קשר",
    text: "לכל שאלה, בקשה או קביעת פגישה — אנחנו כאן בשבילכם באהבה. מוזמנים להתקשר, לשלוח וואטסאפ או להגיע.",
    phone: "052-7707441"
  },
  donation: {
    title: "שותפים בשליחות",
    text: "כל תרומה עוזרת להמשיך להאיר את המדבר — שיעורים, תפילין לנזקקים, פעילות לילדים וחגים לכולם. תהיו שותפים.",
    url: "https://ultra.kesherhk.info/external/paymentPage/328257"
  }
};

const KODESH_ORDER = [
  { key: "tefillin", label: "תפילין" },
  { key: "mezuzah", label: "מזוזה" },
  { key: "tallit", label: "טלית" },
  { key: "barMitzvah", label: "בר מצווה" }
];

let currentData = null;

/* ===== התחברות ===== */
function login(){
  const v = document.getElementById('passInput').value.trim();
  if(v === 'chabad770'){
    sessionStorage.setItem('chabad_admin','1');
    enterAdmin();
  }else{
    document.getElementById('loginError').classList.remove('hide');
    document.getElementById('passInput').value='';
    document.getElementById('passInput').focus();
    showStatus('סיסמה שגויה, נסה שוב','err');
  }
}
function enterAdmin(){
  document.getElementById('login-screen').classList.add('hide');
  document.getElementById('admin-root').classList.remove('hide');
  loadCfgToForm();
  loadContent();
}
function logout(){
  sessionStorage.removeItem('chabad_admin');
  location.reload();
}
document.getElementById('passInput')?.addEventListener('keydown', e=>{ if(e.key==='Enter') login(); });

(function autoLogin(){
  try{
    if(sessionStorage.getItem('chabad_admin')==='1'){
      document.getElementById('login-screen').classList.add('hide');
      document.getElementById('admin-root').classList.remove('hide');
      loadCfgToForm();
      // loadContent ייקרא אחרי שה-DOM מוכן
      setTimeout(loadContent, 80);
    }
  }catch(e){}
})();

/* ===== הגדרות ענן ===== */
function getCfg(){
  try{
    const raw = localStorage.getItem('chabad_jsonbin_cfg');
    if(!raw) return { binId:'', apiKey:'' };
    const o = JSON.parse(raw);
    return { binId: (o.binId||'').trim(), apiKey: (o.apiKey||'').trim() };
  }catch(e){ return { binId:'', apiKey:'' }; }
}
function setCfg(binId, apiKey){
  localStorage.setItem('chabad_jsonbin_cfg', JSON.stringify({ binId: binId.trim(), apiKey: apiKey.trim() }));
}
function loadCfgToForm(){
  const c = getCfg();
  const b = document.getElementById('cfg_binId');
  const k = document.getElementById('cfg_apiKey');
  if(b) b.value = c.binId||'';
  if(k) k.value = c.apiKey||'';
  const s = document.getElementById('cfgStatus');
  if(s) s.textContent = c.binId ? `מחובר ל־Bin ${c.binId.slice(0,8)}…` : 'לא הוגדר Bin עדיין — יטען מ־content.json';
}
function saveCfgToDevice(){
  const binId = document.getElementById('cfg_binId').value.trim();
  const apiKey = document.getElementById('cfg_apiKey').value.trim();
  if(!binId){ showStatus('נא להזין Bin ID','err'); return; }
  if(!apiKey){ showStatus('נא להזין Master Key','err'); return; }
  setCfg(binId, apiKey);
  loadCfgToForm();
  showStatus('הגדרות נשמרו במכשיר בהצלחה ✓','ok');
}
function clearCfg(){
  localStorage.removeItem('chabad_jsonbin_cfg');
  document.getElementById('cfg_binId').value='';
  document.getElementById('cfg_apiKey').value='';
  loadCfgToForm();
  showStatus('הגדרות נוקו','ok');
}
async function testConnection(){
  const cfg = getCfg();
  const binIdInput = document.getElementById('cfg_binId').value.trim();
  const apiKeyInput = document.getElementById('cfg_apiKey').value.trim();
  const binId = binIdInput || cfg.binId;
  const apiKey = apiKeyInput || cfg.apiKey;
  if(!binId || !apiKey){ showStatus('חסר Bin ID או Master Key','err'); return; }
  try{
    showStatus('בודק חיבור…','ok');
    const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, { headers: { 'X-Master-Key': apiKey } });
    if(!res.ok){ throw new Error('סטטוס '+res.status); }
    const j = await res.json();
    if(j && j.record){ showStatus('חיבור תקין! נמצא תוכן בענן ✓','ok'); }
    else showStatus('חיבור תקין אבל התשובה ריקה','err');
  }catch(e){
    showStatus('שגיאת חיבור: '+ (e.message||e), 'err');
  }
}

/* ===== טעינת תוכן ===== */
async function loadContent(){
  const cfg = getCfg();
  const binFromInput = document.getElementById('cfg_binId')?.value.trim();
  const keyFromInput = document.getElementById('cfg_apiKey')?.value.trim();
  const effectiveBin = (binFromInput || cfg.binId || '').trim();
  const effectiveKey = (keyFromInput || cfg.apiKey || '').trim();

  let data = null;
  const label = document.getElementById('updatedAtLabel');
  try{
    if(effectiveBin){
      if(label) label.textContent = 'טוען מהענן…';
      const headers = {};
      if(effectiveKey) headers['X-Master-Key'] = effectiveKey;
      const res = await fetch(`https://api.jsonbin.io/v3/b/${effectiveBin}/latest?${Date.now()}`, { headers, cache:'no-store' });
      if(!res.ok) throw new Error('שגיאת טעינה מהענן: '+res.status);
      const json = await res.json();
      data = json.record || json;
      if(!data.hero) throw new Error('ה־Bin ריק או לא בפורמט הנכון');
      showStatus('נטען מהענן ✓','ok');
    }else{
      if(label) label.textContent = 'טוען מ־content.json…';
      const res = await fetch(`./content.json?v=${Date.now()}`, { cache:'no-store' });
      if(!res.ok) throw new Error('לא נמצא content.json, משתמש בברירת מחדל');
      data = await res.json();
      showStatus('נטען מ־content.json','ok');
    }
  }catch(e){
    console.warn(e);
    if(e.message.includes('content.json') || !effectiveBin){
      data = structuredClone(DEFAULT_DATA);
      showStatus('נטען ברירת מחדל מקומית (אין קובץ/ענן)','ok');
    }else{
      showStatus(e.message,'err');
      data = structuredClone(DEFAULT_DATA);
    }
  }
  // מיזוג עם ברירת מחדל כדי לא לשבור שדות חדשים
  data = deepMerge(structuredClone(DEFAULT_DATA), data||{});
  fillForm(data);
}

function deepMerge(target, source){
  for(const k in source){
    if(source[k] && typeof source[k]==='object' && !Array.isArray(source[k])){
      if(!target[k]) target[k]={};
      deepMerge(target[k], source[k]);
    }else{
      if(source[k]!==undefined) target[k]=source[k];
    }
  }
  return target;
}

/* ===== מילוי טופס ===== */
function fillForm(data){
  currentData = structuredClone(data);
  const d = currentData;
  // updatedAt label
  const lbl = document.getElementById('updatedAtLabel');
  if(lbl) lbl.textContent = d.updatedAt ? `עודכן לאחרונה: ${d.updatedAt} • ${d.hero?.title||''}` : 'מוכן לעריכה';

  // hero
  setVal('hero_kicker', d.hero?.kicker);
  setVal('hero_title', d.hero?.title);
  setVal('hero_title2', d.hero?.title2);
  setVal('hero_subtitle', d.hero?.subtitle);
  // about
  setVal('about_title', d.about?.title);
  setVal('about_note', d.about?.note);
  setVal('about_heading', d.about?.heading);
  setVal('about_p1', d.about?.p1);
  setVal('about_p2', d.about?.p2);
  setVal('about_footer', d.about?.footer);
  // kodesh
  setVal('kodesh_title', d.kodesh?.title);
  setVal('kodesh_note', d.kodesh?.note);
  renderKodesh(d.kodesh?.items || {});
  // videos
  setVal('videos_title', d.videos?.title);
  setVal('videos_note', d.videos?.note);
  renderVideos(d.videos?.items || []);
  // chavruta
  setVal('chavruta_title', d.chavruta?.title);
  setVal('chavruta_note', d.chavruta?.note);
  setVal('chavruta_text', d.chavruta?.text);
  setVal('chavruta_button', d.chavruta?.button);
  setVal('chavruta_url', d.chavruta?.url);
  // contact
  setVal('contact_title', d.contact?.title);
  setVal('contact_text', d.contact?.text);
  setVal('contact_phone', d.contact?.phone);
  // donation
  setVal('donationTitle', d.donation?.title || '');
  setVal('donationText', d.donation?.text || '');
}

function setVal(id, v){ const el=document.getElementById(id); if(el) el.value = v||''; }

/* ===== תשמישי קדושה ===== */
function renderKodesh(items){
  const grid = document.getElementById('kodeshGrid');
  if(!grid) return;
  grid.innerHTML='';
  KODESH_ORDER.forEach(o=>{
    const key=o.key;
    const it = items[key] || {};
    const wrap = document.createElement('div');
    wrap.className='kodesh-item';
    wrap.innerHTML=`
      <h3>${o.label} <span class="badge">${key}</span></h3>
      <div class="grid-1">
        <div class="field"><label>כותרת</label><input id="kodesh_${key}_title" value="${escAttr(it.title||'')}"></div>
        <div class="field"><label>תיאור</label><textarea id="kodesh_${key}_desc">${escHtml(it.desc||'')}</textarea></div>
        <div class="field"><label>מחיר / תג</label><input id="kodesh_${key}_price" value="${escAttr(it.price||'')}" placeholder="לדוגמה: החל מ-1,450 ₪"></div>
        <div class="price-preview-row"><span>תצוגה מקדימה:</span> <span class="price-tag" id="pricePrev_${key}">${escHtml(it.price||'')}</span></div>
        <div class="field"><label>טקסט וואטסאפ</label><input id="kodesh_${key}_waText" value="${escAttr(it.waText||'')}" placeholder="היי, אשמח לפרטים על..."></div>
      </div>
    `;
    grid.appendChild(wrap);
  });
  // live preview listeners
  KODESH_ORDER.forEach(o=>{
    const inp = document.getElementById(`kodesh_${o.key}_price`);
    const prev = document.getElementById(`pricePrev_${o.key}`);
    if(inp && prev){
      inp.addEventListener('input', ()=>{ prev.textContent = inp.value; });
    }
  });
}

/* ===== סרטונים ===== */
function renderVideos(items){
  const list = document.getElementById('videosList');
  if(!list) return;
  list.innerHTML='';
  (items||[]).forEach((it, idx)=>{
    const row = createVideoRow(it, idx);
    list.appendChild(row);
  });
  if((items||[]).length===0){
    const empty = document.createElement('div');
    empty.className='muted';
    empty.style.cssText='padding:12px;text-align:center;font-size:13px';
    empty.textContent='אין סרטונים עדיין — לחץ "הוסף סרטון"';
    list.appendChild(empty);
  }
}
function createVideoRow(item, idx){
  const div = document.createElement('div');
  div.className='video-row';
  div.dataset.idx = idx;
  const ytId = getYouTubeId(item.url||'');
  const thumbHtml = ytId
    ? `<img src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" alt="">`
    : `<span>אין תצוגה מקדימה</span>`;
  div.innerHTML=`
    <div class="field" style="margin:0">
      <label>כותרת סרטון</label>
      <input class="v-title" value="${escAttr(item.title||'')}" placeholder="שם הסרטון">
    </div>
    <div class="field" style="margin:0">
      <label>קישור YouTube / אחר</label>
      <input class="v-url" dir="ltr" value="${escAttr(item.url||'')}" placeholder="https://youtube.com/watch?v=...">
      <div class="thumb" style="margin-top:8px">${thumbHtml}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;justify-content:flex-start">
      <button class="btn btn-danger btn-small" onclick="removeVideo(this)">מחק</button>
      <small class="muted">שורה ${idx+1}</small>
    </div>
  `;
  const urlInput = div.querySelector('.v-url');
  const thumb = div.querySelector('.thumb');
  if(urlInput){
    urlInput.addEventListener('input', ()=>{
      const id = getYouTubeId(urlInput.value);
      if(id) thumb.innerHTML = `<img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="">`;
      else thumb.innerHTML = urlInput.value ? `<span style="font-size:11px;word-break:break-all">${escHtml(urlInput.value.slice(0,60))}</span>` : '<span>אין תצוגה מקדימה</span>';
    });
  }
  return div;
}
function addVideo(){
  const list = document.getElementById('videosList');
  // הסר הודעת ריק אם קיימת
  const empty = list.querySelector('.muted');
  if(empty && list.children.length===1) empty.remove();
  const row = createVideoRow({ title:'', url:'' }, list.children.length);
  list.appendChild(row);
  row.querySelector('.v-title')?.focus();
}
function removeVideo(btn){
  const row = btn.closest('.video-row');
  if(row) row.remove();
  const list = document.getElementById('videosList');
  if(list.children.length===0) renderVideos([]);
}

/* ===== איסוף נתונים ===== */
function collect(){
  const data = {
    updatedAt: new Date().toISOString().slice(0,10),
    hero: {
      kicker: val('hero_kicker'),
      title: val('hero_title'),
      title2: val('hero_title2'),
      subtitle: val('hero_subtitle')
    },
    about: {
      title: val('about_title'),
      note: val('about_note'),
      heading: val('about_heading'),
      p1: val('about_p1'),
      p2: val('about_p2'),
      footer: val('about_footer')
    },
    kodesh: {
      title: val('kodesh_title'),
      note: val('kodesh_note'),
      items: {}
    },
    videos: {
      title: val('videos_title'),
      note: val('videos_note'),
      items: []
    },
    chavruta: {
      title: val('chavruta_title'),
      note: val('chavruta_note'),
      text: val('chavruta_text'),
      button: val('chavruta_button'),
      url: val('chavruta_url') || 'https://efi770.github.io/-my-new-project/'
    },
    contact: {
      title: val('contact_title'),
      text: val('contact_text'),
      phone: val('contact_phone') || '052-7707441'
    },
    donation: {
      title: val('donationTitle') || DEFAULT_DATA.donation.title,
      text: val('donationText') || DEFAULT_DATA.donation.text,
      url: document.getElementById('donationLink')?.value || DEFAULT_DATA.donation.url
    }
  };
  KODESH_ORDER.forEach(o=>{
    data.kodesh.items[o.key] = {
      title: val(`kodesh_${o.key}_title`),
      desc: val(`kodesh_${o.key}_desc`),
      price: val(`kodesh_${o.key}_price`),
      waText: val(`kodesh_${o.key}_waText`)
    };
  });
  // videos from DOM
  const rows = document.querySelectorAll('#videosList .video-row');
  rows.forEach(r=>{
    const t = r.querySelector('.v-title')?.value.trim()||'';
    const u = r.querySelector('.v-url')?.value.trim()||'';
    if(t || u) data.videos.items.push({ title:t, url:u });
  });
  return data;
}
function val(id){ const el=document.getElementById(id); return el? el.value.trim() : ''; }

/* ===== שמירה לענן ===== */
async function saveToAll(){
  const cfgInputBin = document.getElementById('cfg_binId')?.value.trim();
  const cfgInputKey = document.getElementById('cfg_apiKey')?.value.trim();
  let cfg = getCfg();
  // אם המשתמש הקליד עכשיו ולא לחץ שמור, נשתמש במה שהקליד
  if(cfgInputBin) cfg.binId = cfgInputBin;
  if(cfgInputKey) cfg.apiKey = cfgInputKey;

  if(!cfg.binId){
    showStatus('שגיאה: חסר Bin ID. הגדר אותו למעלה ושמור במכשיר.','err');
    document.getElementById('sec-cfg')?.scrollIntoView({ behavior:'smooth', block:'start' });
    return;
  }
  if(!cfg.apiKey){
    showStatus('שגיאה: חסר Master Key. הדבק את המפתח מהגדרות jsonbin.io','err');
    document.getElementById('sec-cfg')?.scrollIntoView({ behavior:'smooth', block:'start' });
    return;
  }
  const data = collect();
  const btn = document.querySelector('.sticky-bar .btn-green');
  const oldText = btn ? btn.textContent : '';
  if(btn){ btn.textContent='שומר…'; btn.disabled=true; btn.style.opacity='.7'; }

  try{
    const res = await fetch(`https://api.jsonbin.io/v3/b/${cfg.binId}`, {
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'X-Master-Key': cfg.apiKey,
        'X-Bin-Versioning':'false'
      },
      body: JSON.stringify(data)
    });
    const txt = await res.text();
    let json=null; try{ json=JSON.parse(txt); }catch(e){}
    if(!res.ok){
      throw new Error((json && json.message) || txt || ('שגיאת שרת '+res.status));
    }
    // שמירה אוטומטית של ההגדרות אם הוזנו ידנית
    if(cfgInputBin && cfgInputKey){
      setCfg(cfg.binId, cfg.apiKey);
      loadCfgToForm();
    }
    showStatus(`נשמר בהצלחה! האתר הציבורי יתעדכן תוך שניות ✓ (${data.updatedAt})`,'ok');
    const lbl = document.getElementById('updatedAtLabel');
    if(lbl) lbl.textContent = `עודכן לאחרונה: ${data.updatedAt} • נשמר לענן`;
    // גם שמירה מקומית כגיבוי
    try{ localStorage.setItem('chabad_content_backup', JSON.stringify(data)); }catch(e){}
  }catch(e){
    console.error(e);
    showStatus('שגיאה בשמירה: '+(e.message||e),'err');
  }finally{
    if(btn){ btn.textContent=oldText||'✓ שמור לכולם'; btn.disabled=false; btn.style.opacity='1'; }
  }
}

/* ===== עזר ===== */
function getYouTubeId(url){
  if(!url) return null;
  try{
    const u = url.trim();
    const m1 = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{6,11})/);
    if(m1) return m1[1];
    const m2 = u.match(/[?&]v=([A-Za-z0-9_-]{6,11})/);
    if(m2) return m2[1];
    return null;
  }catch(e){ return null; }
}
function escHtml(s){ return (s||'').replace(/[&<>"]/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c])); }
function escAttr(s){ return (s||'').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }
function showStatus(msg, type){
  const wrap = document.getElementById('statusWrap');
  if(!wrap) return;
  const div = document.createElement('div');
  div.className = 'status-item ' + (type==='ok' ? 'ok' : type==='err' ? 'err' : '');
  div.innerHTML = `<span>${type==='ok'?'✓':type==='err'?'✕':'•'}</span><span>${escHtml(msg)}</span>`;
  wrap.appendChild(div);
  setTimeout(()=>{ div.style.transition='all .35s'; div.style.opacity='0'; div.style.transform='translateY(-12px)'; setTimeout(()=>div.remove(),350); }, type==='err'?6000:3800);
}
</script>
</body>
</html>
