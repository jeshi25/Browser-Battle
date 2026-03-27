console.log("home.js loaded");
window.renderHome = function () {
  return `

  

  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="hero-badge">NAAC A+ · Ranked Top 50 · Est. 1946</span>
      <h1 class="hero-title">BMS College of<br><span>Engineering</span></h1>
      <p class="hero-sub">Shaping tomorrow's engineers through academic excellence, innovation, and industry-ready education in the heart of Bangalore.</p>
      <div class="hero-btns">
        <button class="btn-primary" onclick="navigate('admissions')">Apply Now 2025–26</button>
        <button class="btn-outline" onclick="navigate('campus')">Explore Campus →</button>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-item"><div class="stat-num">78+</div><div class="stat-label">Years of Excellence</div></div>
      <div class="stat-item"><div class="stat-num">8</div><div class="stat-label">Departments</div></div>
      <div class="stat-item"><div class="stat-num">98%</div><div class="stat-label">Placement Rate</div></div>
      <div class="stat-item"><div class="stat-num">30K+</div><div class="stat-label">Alumni Worldwide</div></div>
    </div>
  </section>

  <!-- QUICK ACCESS -->
  <div class="section reveal">
    <div class="accent-bar"></div>
    <h2 class="section-title">Quick Access</h2>
    <p class="section-sub">Everything you need, one click away</p>
    <div class="quick-grid">
      <div class="quick-card" onclick="navigate('admissions')"><span class="quick-icon">📝</span><span class="quick-label">Admissions</span></div>
      <div class="quick-card" onclick="navigate('placements')"><span class="quick-icon">💼</span><span class="quick-label">Placements</span></div>
      <div class="quick-card" onclick="navigate('alumni')"><span class="quick-icon">🤝</span><span class="quick-label">Alumni</span></div>
      <div class="quick-card" onclick="navigate('events')"><span class="quick-icon">🎉</span><span class="quick-label">Events</span></div>
      <div class="quick-card" onclick="navigate('research')"><span class="quick-icon">🔬</span><span class="quick-label">Research</span></div>
      <div class="quick-card" onclick="navigate('campus')"><span class="quick-icon">🏛️</span><span class="quick-label">Campus</span></div>
    </div>
  </div>

  <!-- DEPARTMENTS OVERVIEW -->
  <div class="section reveal" style="background: var(--gray-100); padding: 80px 24px; max-width: 100%; margin: 0;">
    <div style="max-width:1300px;margin:0 auto;">
      <div class="section-header">
        <div><div class="accent-bar"></div><h2 class="section-title">Departments</h2><p class="section-sub">Click any department to explore faculty, courses and more</p></div>
      </div>
      <div class="dept-grid">
        ${Object.entries(window.DEPARTMENTS || {}).map(([key, d]) => `
          <div class="dept-card reveal" onclick="navigate('dept','${key}')">
            <div class="dept-top" style="background:linear-gradient(135deg,${d.color},${d.color}cc)">
              <div class="dept-emoji">${d.emoji}</div>
              <div class="dept-name">${d.name}</div>
              <div class="dept-code">${d.code}</div>
            </div>
            <div class="dept-body">
              <p class="dept-info">${d.desc}</p>
              <div class="dept-meta">
                <span>Intake: <strong>${d.intake}</strong></span>
                <span>Est. <strong>${d.established}</strong></span>
              </div>
              <div class="dept-arrow">Explore Department →</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- PLACEMENTS HIGHLIGHT -->
  <div class="section reveal">
    <div class="accent-bar"></div>
    <div class="section-header">
      <div><h2 class="section-title">Placement Excellence</h2><p class="section-sub">Our students are hired by the world's best companies</p></div>
      <a class="see-all" href="#" onclick="navigate('placements')">View Full Report →</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;">
      ${['Google','Microsoft','Amazon','Apple','Meta','Qualcomm','Intel','Infosys','TCS','Wipro','L&T','ISRO'].map(c =>
        `<div class="company-chip" style="text-align:center;cursor:default;">${c}</div>`
      ).join('')}
    </div>
  </div>

  <!-- EVENTS HIGHLIGHT -->
  <div style="background:linear-gradient(135deg,var(--navy),#1a2a50);padding:80px 24px;">
    <div style="max-width:1300px;margin:0 auto;">
      <div class="section-header" style="margin-bottom:40px;">
        <div><div class="accent-bar"></div><h2 class="section-title" style="color:#fff;">Upcoming Events</h2><p class="section-sub" style="color:rgba(255,255,255,0.65);">Don't miss what's happening at BMSCE</p></div>
        <a class="see-all" href="#" onclick="navigate('events')" style="color:var(--gold);">All Events →</a>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;">
        ${(EVENTS ? (window.EVENTS || []).slice(0,3) : []).map(ev => `
          <div class="event-card reveal" onclick="navigate('events')">
            <div class="event-img" style="background:linear-gradient(135deg,var(--blue-dark),var(--blue-mid))">
              <span>${ev.emoji}</span>
              <span class="event-tag">${ev.type}</span>
              <div class="event-date-badge">${ev.date}</div>
            </div>
            <div class="event-body">
              <div class="event-title">${ev.title}</div>
              <div class="event-meta">📍 ${ev.venue}</div>
              <div class="event-desc">${ev.desc.substring(0,100)}…</div>
              <span class="btn-sm">Learn More</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- NEWS -->
  <div class="section reveal">
    <div class="accent-bar"></div>
    <h2 class="section-title">Latest News</h2>
    <p class="section-sub">Stay informed with the latest from BMSCE</p>
    <div class="news-grid">
      <div class="news-card"><div class="news-img">🏆</div><div class="news-body"><div class="news-tag">Achievement</div><div class="news-title">BMSCE Students Win Gold at Smart India Hackathon 2024</div><div class="news-date">Jan 15, 2025</div></div></div>
      <div class="news-card"><div class="news-img">🤝</div><div class="news-body"><div class="news-tag">Partnership</div><div class="news-title">New MoU Signed with TU Delft for Research Collaboration</div><div class="news-date">Dec 28, 2024</div></div></div>
      <div class="news-card"><div class="news-img">🔬</div><div class="news-body"><div class="news-tag">Research</div><div class="news-title">BMSCE AI Research Centre Ranked in Top 20 Nationally</div><div class="news-date">Dec 10, 2024</div></div></div>
    </div>
  </div>
  `;
}