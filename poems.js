<!doctype html>
<html lang="ta">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="KS Kavithai — K. Srinivasan's public Tamil poetry archive.">
  <title>KS Kavithai — K. Srinivasan</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <nav class="nav container">
      <a class="brand" href="index.html">KS Kavithai</a>
      <div class="nav-links">
        <a href="index.html">முகப்பு</a>
        <a href="#all-poems">அனைத்து கவிதைகள்</a>
        <a href="#about">என்னைப் பற்றி</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero container">
      <p class="eyebrow">K. Srinivasan • Tamil Poetry Archive</p>
      <h1>வார்த்தைகளுக்கு<br><span>ஒரு நிரந்தர முகவரி.</span></h1>
      <p class="intro">எழுதப்பட்ட ஒவ்வொரு கவிதைக்கும் ஒரு தனி எண். படிக்கவும், பகிரவும், நினைவில் வைத்திருக்கவும்.</p>
      <a class="button" href="#all-poems">கவிதைகளைப் பார்க்க →</a>
    </section>

    <section class="search-section container">
      <label for="search">கவிதை எண் அல்லது தலைப்பைத் தேடுங்கள்</label>
      <input id="search" type="search" placeholder="உதா: KS-0001 அல்லது குங்குமப்பொட்டே">
    </section>

    <section id="all-poems" class="container poems-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">The Archive</p>
          <h2>அனைத்து கவிதைகள்</h2>
        </div>
        <span id="count" class="count"></span>
      </div>
      <div id="poem-list" class="poem-grid"></div>
      <p id="empty" class="empty" hidden>கவிதை கிடைக்கவில்லை.</p>
    </section>

    <section id="about" class="about container">
      <p class="eyebrow">About KS Kavithai</p>
      <h2>ஒரு கவிஞனின் டிஜிட்டல் தடம்.</h2>
      <p>
        KS Kavithai என்பது K. Srinivasan எழுதிய கவிதைகளை ஒரே இடத்தில்
        நிரந்தரமாகப் பதிவு செய்ய உருவாக்கப்பட்ட தனிப்பட்ட டிஜிட்டல் தொகுப்பு.
        ஒவ்வொரு கவிதைக்கும் தனி அடையாள எண் வழங்கப்படுகிறது.
      </p>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <strong>KS Kavithai</strong>
      <span>© <span id="year"></span> K. Srinivasan</span>
    </div>
  </footer>

  <script src="poems.js"></script>
  <script src="app.js"></script>
</body>
</html>
