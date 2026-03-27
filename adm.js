function renderAdmissions() {
  return `
  <div class="admissions-hero">
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3.5rem);font-weight:900;margin-bottom:12px;">📝 Admissions 2025–26</h1>
    <p style="color:rgba(255,255,255,0.75);max-width:560px;margin:0 auto;">Join a legacy of excellence. Applications are now open for B.E., M.Tech, and Ph.D programs at BMSCE.</p>
    <div style="display:flex;gap:14px;justify-content:center;margin-top:28px;flex-wrap:wrap;">
      
    </div>
  </div>

  <div class="admissions-content">
    <h2 style="font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:28px;color:var(--text);">How to Apply</h2>
    <div class="admission-steps">
      <div class="step-card reveal"><div class="step-num">1</div><div class="step-title">Check Eligibility</div><div class="step-desc">Review program-specific eligibility criteria: KCET rank, JEE score, or management quota requirements.</div></div>
      <div class="step-card reveal"><div class="step-num">2</div><div class="step-title">Fill Application</div><div class="step-desc">Complete the online application form with accurate personal, academic, and contact details.</div></div>
      <div class="step-card reveal"><div class="step-num">3</div><div class="step-title">Upload Documents</div><div class="step-desc">Upload required documents: mark sheets, ID proof, category certificates, and photographs.</div></div>
      <div class="step-card reveal"><div class="step-num">4</div><div class="step-title">Pay Fees</div><div class="step-desc">Pay the application fee online via UPI, net banking, or credit/debit card.</div></div>
      <div class="step-card reveal"><div class="step-num">5</div><div class="step-title">Document Verification</div><div class="step-desc">Attend in-person verification with original documents at the Admissions Office.</div></div>
      <div class="step-card reveal"><div class="step-num">6</div><div class="step-title">Seat Confirmation</div><div class="step-desc">Receive seat allotment letter and complete fee payment to confirm your admission.</div></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:40px;" class="reveal">
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);">
        <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:16px;color:var(--text);">B.E. Programs</h3>
        <ul class="info-list">
          <li><span class="info-key">Entry</span><span class="info-val">KCET / JEE / Management</span></li>
          <li><span class="info-key">Duration</span><span class="info-val">4 Years (8 Semesters)</span></li>
          <li><span class="info-key">Seats</span><span class="info-val">720 (Total)</span></li>
          <li><span class="info-key">Fees (Govt. Quota)</span><span class="info-val">~₹80,000/yr</span></li>
          <li><span class="info-key">Fees (Mgmt. Quota)</span><span class="info-val">~₹2.5L/yr</span></li>
          <li><span class="info-key">Affiliation</span><span class="info-val">VTU, Belagavi</span></li>
        </ul>
      </div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);">
        <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:16px;color:var(--text);">M.Tech Programs</h3>
        <ul class="info-list">
          <li><span class="info-key">Entry</span><span class="info-val">PGCET / GATE / Management</span></li>
          <li><span class="info-key">Duration</span><span class="info-val">2 Years (4 Semesters)</span></li>
          <li><span class="info-key">Specializations</span><span class="info-val">8+</span></li>
          <li><span class="info-key">Fees</span><span class="info-val">~₹1.2L/yr</span></li>
          <li><span class="info-key">Scholarship</span><span class="info-val">AICTE PG Scholarship</span></li>
          <li><span class="info-key">Affiliation</span><span class="info-val">VTU, Belagavi</span></li>
        </ul>
      </div>
    </div>

    <div style="background:linear-gradient(135deg,var(--blue-mid),var(--blue-light));border-radius:var(--radius);padding:40px;margin-top:40px;text-align:center;color:#fff;" class="reveal">
      <h3 style="font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:12px;">Application Deadline</h3>
      <p style="opacity:0.85;margin-bottom:20px;">KCET Counselling: June 2025 &nbsp;|&nbsp; Management Quota: July 2025</p>
      
    </div>
  </div>
  `;
}
