function renderAlumni() {
  return `
  <div class="alumni-hero">
    <h1>🤝 Alumni Network</h1>
    <p style="color:rgba(255,255,255,0.75);max-width:560px;margin:0 auto 32px;">30,000+ BMSCE alumni are making a difference across the world. Connect, mentor, and inspire the next generation.</p>
    <div style="display:flex;gap:32px;justify-content:center;flex-wrap:wrap;">
      <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:900;color:var(--gold);">30K+</div><div style="font-size:0.8rem;color:rgba(255,255,255,0.6);">Global Alumni</div></div>
      <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:900;color:var(--gold);">45+</div><div style="font-size:0.8rem;color:rgba(255,255,255,0.6);">Countries</div></div>
      <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:900;color:var(--gold);">500+</div><div style="font-size:0.8rem;color:rgba(255,255,255,0.6);">CEOs & Founders</div></div>
    </div>
  </div>

  <div style="max-width:1200px;margin:0 auto;padding:40px 24px 0;">
    <h3 style="font-size:1rem;font-weight:600;color:var(--text-muted);margin-bottom:16px;">Filter by Department</h3>
    <div class="dept-filter">
      <button class="filter-btn active" onclick="filterAlumni('all',this)">All</button>
      ${Object.entries(DEPARTMENTS).map(([k,d]) => `<button class="filter-btn" onclick="filterAlumni('${k}',this)">${d.emoji} ${d.code}</button>`).join('')}
    </div>
  </div>

  <div class="alumni-grid" id="alumniGrid">
    ${ALUMNI_DATA.map(a => renderAlumniCard(a)).join('')}
  </div>

  <div style="background:var(--gray-100);padding:64px 24px;text-align:center;">
    <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:var(--text);margin-bottom:16px;"></h2>
    <p style="color:var(--text-muted);max-width:560px;margin:0 auto 28px;"></p>
    
  </div>
  `;
}

function renderAlumniCard(a) {
  const d = DEPARTMENTS[a.dept];
  return `
    <div class="alumni-card reveal" data-dept="${a.dept}">
      <div class="alumni-avatar">${a.initial}</div>
      <div class="alumni-name">${a.name}</div>
      <div class="alumni-role">${a.role}</div>
      <div class="alumni-company">@ ${a.company}</div>
      <div class="alumni-dept">${d ? d.name : ''}</div>
      <div class="alumni-batch">Batch of ${a.batch}</div>
      <button class="connect-btn">Connect</button>
    </div>
  `;
}

function filterAlumni(dept, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('alumniGrid');
  const filtered = dept === 'all' ? ALUMNI_DATA : ALUMNI_DATA.filter(a => a.dept === dept);
  grid.innerHTML = filtered.length ? filtered.map(a => renderAlumniCard(a)).join('') : '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">No alumni found for this department yet.</div>';
}
