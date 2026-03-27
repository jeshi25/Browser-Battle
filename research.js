function renderResearch() {
  const areas = [
    { icon: '🤖', title: 'Artificial Intelligence & ML', desc: 'Advancing AI through deep learning, NLP, computer vision, and reinforcement learning research.' },
    { icon: '🔌', title: 'VLSI & Embedded Systems', desc: 'Cutting-edge research in chip design, SoC development, and low-power embedded architectures.' },
    { icon: '🌱', title: 'Green Energy & Sustainability', desc: 'Renewable energy systems, smart grids, and sustainable engineering solutions for the future.' },
    { icon: '🧬', title: 'Bioinformatics & Genomics', desc: 'Computational approaches to biological problems including protein folding and genome analysis.' },
    { icon: '🏗️', title: 'Smart Infrastructure', desc: 'Research on smart cities, seismic engineering, and sustainable construction materials.' },
    { icon: '🛰️', title: 'Robotics & Automation', desc: 'Development of autonomous systems, industrial robots, and human-robot interaction frameworks.' },
    { icon: '🔒', title: 'Cybersecurity', desc: 'Network security, cryptography, and ethical hacking research to secure digital infrastructure.' },
    { icon: '📡', title: 'Communication Systems', desc: '5G/6G technology, millimeter wave communication, and next-gen wireless network research.' },
    { icon: '💊', title: 'Biomedical Engineering', desc: 'Medical device development, bio-signal processing, and health informatics.' },
  ];
  return `
  <div class="research-hero">
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3.5rem);font-weight:900;margin-bottom:12px;">🔬 Research & Innovation</h1>
    <p style="color:rgba(255,255,255,0.75);max-width:560px;margin:0 auto;">Pushing the boundaries of knowledge through interdisciplinary research, industry collaboration, and world-class publications.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;background:var(--blue-dark);max-width:100%;">
    <div style="padding:32px;text-align:center;border-right:1px solid rgba(255,255,255,0.1);"><div style="font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:900;color:var(--gold);">180+</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.65);">Publications (2024)</div></div>
    <div style="padding:32px;text-align:center;border-right:1px solid rgba(255,255,255,0.1);"><div style="font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:900;color:var(--gold);">₹24Cr</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.65);">Research Funding</div></div>
    <div style="padding:32px;text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:900;color:var(--gold);">12</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.65);">Research Centres</div></div>
  </div>

  <div class="research-grid">
    ${areas.map(a => `
      <div class="research-card reveal">
        <div class="research-icon">${a.icon}</div>
        <div class="research-title">${a.title}</div>
        <div class="research-desc">${a.desc}</div>
      </div>
    `).join('')}
  </div>
  `;
}


