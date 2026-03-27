function renderDept(key) {
  const d = DEPARTMENTS[key];
  if (!d) return '<div class="section"><h2>Department not found</h2></div>';
  return `
  <div class="dept-hero" style="background:linear-gradient(135deg,${d.color},${d.color}aa)">
    <div class="dept-hero-inner">
      <div class="dept-hero-emoji">${d.emoji}</div>
      <h1>${d.name}</h1>
      <p>${d.about.substring(0, 180)}…</p>
      <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap;">
        ${d.programs.map(p => `<span style="background:rgba(255,255,255,0.15);color:#fff;padding:6px 16px;border-radius:20px;font-size:0.8rem;font-weight:500;">${p}</span>`).join('')}
      </div>
    </div>
  </div>

  <div class="dept-detail-grid">
    <!-- LEFT COLUMN -->
    <div>
      <div class="about-card reveal">
        <h2>About the Department</h2>
        <p>${d.about}</p>
        <p><strong>Vision:</strong> ${d.vision}</p>
      </div>

      <div class="about-card reveal">
        <h2>Faculty Members</h2>
        <div class="faculty-list">
          ${d.faculty.map(f => `
            <div class="faculty-card">
              <div class="faculty-name">${f.name}</div>
              <div class="faculty-designation">${f.designation}</div>
              <div style="font-size:0.72rem;color:var(--blue-light);margin-top:3px;">${f.expertise}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="about-card reveal">
        <h2>Placement Record</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:20px;">
          <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:900;color:var(--blue-light);">${d.placements.rate}%</div><div style="font-size:0.77rem;color:var(--text-muted);">Placement Rate</div></div>
          <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:900;color:var(--blue-light);">${d.placements.avg}</div><div style="font-size:0.77rem;color:var(--text-muted);">Avg Package</div></div>
          <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:900;color:var(--blue-light);">${d.placements.highest}</div><div style="font-size:0.77rem;color:var(--text-muted);">Highest Package</div></div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${d.placements.companies.map(c => `<span class="company-chip" style="font-size:0.77rem;padding:6px 14px;">${c}</span>`).join('')}
        </div>
      </div>

      <div class="about-card reveal">
        <h2>Laboratories & Facilities</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${d.facilities.map(f => `<div style="background:var(--gray-100);border-radius:8px;padding:12px 16px;font-size:0.85rem;color:var(--text);">🔬 ${f}</div>`).join('')}
        </div>
      </div>
    </div>

    <!-- RIGHT COLUMN (SIDEBAR) -->
    <div>
      <div class="sidebar-card reveal">
        <h3>Department Info</h3>
        <ul class="info-list">
          <li><span class="info-key">Code</span><span class="info-val">${d.code}</span></li>
          <li><span class="info-key">Established</span><span class="info-val">${d.established}</span></li>
          <li><span class="info-key">Intake</span><span class="info-val">${d.intake} students</span></li>
          <li><span class="info-key">HOD</span><span class="info-val">${d.hod}</span></li>
          <li><span class="info-key">Alumni</span><span class="info-val">${d.alumni.toLocaleString()}+</span></li>
          <li><span class="info-key">Accreditation</span><span class="info-val">NBA</span></li>
        </ul>
      </div>

      <div class="sidebar-card reveal">
        <h3>Performance Metrics</h3>
        <div class="prog-bar-item"><div class="prog-bar-label"><span>Placement Rate</span><span>${d.placements.rate}%</span></div><div class="prog-bar-track"><div class="prog-bar-fill" data-width="${d.placements.rate}" style="width:0%"></div></div></div>
        <div class="prog-bar-item"><div class="prog-bar-label"><span>Research Output</span><span>88%</span></div><div class="prog-bar-track"><div class="prog-bar-fill" data-width="88" style="width:0%"></div></div></div>
        <div class="prog-bar-item"><div class="prog-bar-label"><span>Student Satisfaction</span><span>94%</span></div><div class="prog-bar-track"><div class="prog-bar-fill" data-width="94" style="width:0%"></div></div></div>
        <div class="prog-bar-item"><div class="prog-bar-label"><span>Infrastructure</span><span>92%</span></div><div class="prog-bar-track"><div class="prog-bar-fill" data-width="92" style="width:0%"></div></div></div>
      </div>

      <div class="sidebar-card reveal">
        <h3>Programs Offered</h3>
        <ul class="info-list">
          ${d.programs.map(p => `<li style="border:none;padding:8px 0;font-size:0.83rem;color:var(--text);">📚 ${p}</li>`).join('')}
        </ul>
      </div>

      <div class="sidebar-card reveal">
        <h3>Connect with Alumni</h3>
        <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:14px;">Connect with ${d.code} alumni for mentorship and career guidance</p>
        <button class="connect-btn" onclick="navigate('alumni')" style="display:block;width:100%;">View ${d.code} Alumni →</button>
      </div>
    </div>
  </div>
  `;
}
