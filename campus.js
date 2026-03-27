function renderCampus() {
  const facilities = [
    { emoji: '📚', name: 'Central Library', desc: 'Over 1,00,000 volumes, digital databases, and reading rooms open 16 hours daily.', bg: '#1a3a5c' },
    { emoji: '🏋️', name: 'Sports Complex', desc: 'Multi-sport facility including cricket, basketball, badminton, and a state-of-the-art gymnasium.', bg: '#1a3a20' },
    { emoji: '🍽️', name: 'Cafeteria', desc: 'Multiple food courts serving diverse cuisines — vegetarian, vegan, and regional specialties.', bg: '#3a1a10' },
    { emoji: '🏠', name: 'Hostel Facilities', desc: 'Separate hostels for boys and girls with modern amenities, Wi-Fi, and 24×7 security.', bg: '#1a1a3a' },
    { emoji: '🏥', name: 'Health Centre', desc: 'On-campus medical facility with qualified doctors, ambulance service, and pharmacy.', bg: '#3a1a20' },
    { emoji: '🎭', name: 'Auditorium', desc: 'A 1000-seat air-conditioned auditorium for events, seminars, and cultural performances.', bg: '#2a1a3a' },
    { emoji: '🔬', name: 'Central Research Labs', desc: 'Advanced research infrastructure shared across departments for interdisciplinary work.', bg: '#1a2a3a' },
    { emoji: '🚌', name: 'Transportation', desc: 'Campus bus network covering major routes across Bangalore, managed by the college.', bg: '#3a2a10' },
    { emoji: '🌳', name: 'Green Campus', desc: 'Lush 20-acre campus with solar panels, rainwater harvesting, and an organic garden.', bg: '#0a2a10' },
  ];
  return `
  <div class="campus-hero">
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3.5rem);font-weight:900;margin-bottom:12px;">🏛️ Campus Life</h1>
    <p style="color:rgba(255,255,255,0.75);max-width:560px;margin:0 auto;">Experience a vibrant, inclusive campus where academics meet culture, sports, and lifelong friendships.</p>
  </div>

  <!-- VIRTUAL TOUR -->
  <div style="max-width:1100px;margin:0 auto;padding:64px 24px 40px;">
    <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-lg);">
      <div style="background:linear-gradient(135deg,var(--blue-dark),var(--blue-mid));height:360px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;position:relative;">
        <div style="position:absolute;inset:0;background:url('building.jpg') center/cover no-repeat;opacity:0.45;"></div>
        <div style="position:relative;text-align:center;">
          <div style="font-size:3.5rem;margin-bottom:12px;">🎬</div>
          <h3 style="color:#fff;font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:8px;">Virtual Campus Tour</h3>
          <p style="color:rgba(255,255,255,0.75);margin-bottom:20px;">Explore BMSCE from anywhere in the world</p>
          <button class="btn-primary" style="border:none;cursor:pointer;" onclick="alert('Virtual tour launching – B.S. Narayan Platinum Jubilee Academic Block and campus walkthrough')">▶ Start Virtual Tour</button>
        </div>
      </div>
      <div style="padding:24px;display:flex;gap:20px;flex-wrap:wrap;justify-content:center;">
        ${['Main Building', 'Library', 'Labs', 'Sports Ground', 'Hostel', 'Cafeteria'].map(p => `<span style="background:var(--gray-100);color:var(--text);padding:8px 18px;border-radius:20px;font-size:0.82rem;cursor:pointer;transition:all 0.3s;" onmouseover="this.style.background='var(--blue-mid)';this.style.color='#fff'" onmouseout="this.style.background='var(--gray-100)';this.style.color='var(--text)'">${p}</span>`).join('')}
      </div>
    </div>
  </div>

  <div class="campus-grid" style="padding-top:0;">
    ${facilities.map(f => `
      <div class="campus-card reveal">
        <div class="campus-img" style="background:linear-gradient(135deg,${f.bg},${f.bg}aa)">${f.emoji}</div>
        <div class="campus-body">
          <div class="campus-title">${f.name}</div>
          <div class="campus-desc">${f.desc}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <!-- STUDENT CLUBS -->
  <div style="background:var(--gray-100);padding:64px 24px;">
    <div style="max-width:1100px;margin:0 auto;">
      <h2 style="font-family:'Playfair Display',serif;font-size:2rem;margin-bottom:32px;color:var(--text);">Student Clubs & Chapters</h2>
      <div style="display:flex;flex-wrap:wrap;gap:12px;">
        ${['IEEE Student Branch','ACM Chapter','Robotics Club','Coding Club','NSS','NCC','Photography Club','Literary Club','Drama Club','Music Club','BMSCE Racing Team','GDSC BMSCE','CSI Chapter','SAE India'].map(c => `<div class="company-chip">${c}</div>`).join('')}
      </div>
    </div>
  </div>
  `;
}

