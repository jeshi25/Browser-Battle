function renderEvents() {
  return `
  <div class="events-hero">
    <h1>🎉 Events & Activities</h1>
    <p style="color:rgba(255,255,255,0.75);max-width:560px;margin:0 auto;">Celebrate learning, innovation, and culture at BMSCE. From technical fests to cultural events, there's always something happening.</p>
  </div>

  <div style="background:linear-gradient(135deg,#1a0a28,#2d1060);padding:40px 24px;text-align:center;">
    <h2 style="font-family:'Playfair Display',serif;font-size:2.8rem;font-weight:900;color:#fff;margin-bottom:8px;">UTSAV 2025</h2>
    <p style="color:rgba(255,255,255,0.75);font-size:1.1rem;max-width:500px;margin:0 auto 24px;">Annual Technical & Cultural Fest · March 15–17, 2025</p>
    <div style="display:flex;gap:24px;justify-content:center;flex-wrap:wrap;margin-bottom:28px;">
      <div style="background:rgba(255,255,255,0.1);border-radius:10px;padding:16px 24px;color:#fff;"><div style="font-size:2rem;margin-bottom:4px;">50+</div><div style="font-size:0.78rem;opacity:0.7;">Events</div></div>
      <div style="background:rgba(255,255,255,0.1);border-radius:10px;padding:16px 24px;color:#fff;"><div style="font-size:2rem;margin-bottom:4px;">₹15L+</div><div style="font-size:0.78rem;opacity:0.7;">Prize Pool</div></div>
      <div style="background:rgba(255,255,255,0.1);border-radius:10px;padding:16px 24px;color:#fff;"><div style="font-size:2rem;margin-bottom:4px;">5K+</div><div style="font-size:0.78rem;opacity:0.7;">Participants</div></div>
    </div>
    
  </div>

  <div class="events-grid">
    ${EVENTS.map(ev => `
      <div class="event-card reveal">
        <div class="event-img">
          ${ev.emoji}
          <span class="event-tag">${ev.type}</span>
          <div class="event-date-badge">${ev.date}</div>
        </div>
        <div class="event-body">
          <div class="event-title">${ev.title}</div>
          <div class="event-meta">📍 ${ev.venue} &nbsp;|&nbsp; Registration: <strong style="color:${ev.registration==='Open'?'#22c55e':'#ef4444'}">${ev.registration}</strong></div>
          <div class="event-desc">${ev.desc}</div>
          
        </div>
      </div>
    `).join('')}
  </div>
  `;
}
