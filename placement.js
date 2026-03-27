/* ═══════════════════════════════════════════════
   BMSCE – Placements Page (placements.js)
   Live SheetDB + mock fallback data for all depts
═══════════════════════════════════════════════ */

const SHEETDB_URL = 'https://sheetdb.io/api/v1/kcjj0f56v30ej';

/* ── MOCK DATA fallback (used when sheet has no data for a dept) ── */
const MOCK_DATA = {
  cs: {
    total: 174, placed: 170, students: [
      { name: 'Aarav Sharma',    company: 'Google',     package: 32 },
      { name: 'Bhavya Reddy',    company: 'Microsoft',  package: 28 },
      { name: 'Chetan Gowda',    company: 'Amazon',     package: 24 },
      { name: 'Divya Nair',      company: 'Infosys',    package: 8  },
      { name: 'Esha Patil',      company: 'TCS',        package: 7  },
      { name: 'Farhan Sheikh',   company: 'Wipro',      package: 6.5},
      { name: 'Geetha Rao',      company: 'IBM',        package: 10 },
      { name: 'Harsha Bhat',     company: 'Salesforce', package: 18 },
      { name: 'Ishaan Mehta',    company: 'Adobe',      package: 22 },
      { name: 'Jyoti Kumari',    company: 'Oracle',     package: 14 },
      { name: 'Kiran Kumar',     company: 'Cisco',      package: 16 },
      { name: 'Lakshmi S.',      company: '',           package: 0  },
      { name: 'Manish Tiwari',   company: 'HCL',        package: 9  },
      { name: 'Neha Joshi',      company: 'Cognizant',  package: 7  },
      { name: 'Om Prakash',      company: '',           package: 0  },
    ],
    yearwise: { '2022': [152,148], '2023': [164,159], '2024': [174,170] },
  },
  ece: {
    total: 115, placed: 108, students: [
      { name: 'Aditya Bhat',     company: 'Intel',             package: 22 },
      { name: 'Bhoomika V.',     company: 'Qualcomm',          package: 26 },
      { name: 'Chirag Kulkarni', company: 'Samsung',           package: 18 },
      { name: 'Deepa Shetty',    company: 'Texas Instruments', package: 15 },
      { name: 'Elvin Joseph',    company: 'L&T',               package: 10 },
      { name: 'Fiona Dsouza',    company: 'ISRO',              package: 12 },
      { name: 'Ganesh Kamath',   company: 'Infosys',           package: 8  },
      { name: 'Harini Rao',      company: 'TCS',               package: 7  },
      { name: 'Ivan Thomas',     company: '',                  package: 0  },
      { name: 'Janaki Prasad',   company: 'Wipro',             package: 6.5},
      { name: 'Kavya Hegde',     company: 'Siemens',           package: 11 },
      { name: 'Lokesh N.',       company: '',                  package: 0  },
    ],
    yearwise: { '2022': [108,100], '2023': [112,106], '2024': [115,108] },
  },
  mech: {
    total: 112, placed: 100, students: [
      { name: 'Akash Singh',     company: 'L&T',        package: 9  },
      { name: 'Bharath Gowda',   company: 'BHEL',       package: 8  },
      { name: 'Chandana M.',     company: 'Boeing',     package: 18 },
      { name: 'Dinesh Reddy',    company: 'HAL',        package: 11 },
      { name: 'Ekta Sharma',     company: 'DRDO',       package: 12 },
      { name: 'Farida Begum',    company: 'Caterpillar',package: 14 },
      { name: 'Girish Kamath',   company: 'Infosys',    package: 7  },
      { name: 'Hema Latha',      company: '',           package: 0  },
      { name: 'Imran Khan',      company: 'TCS',        package: 6.5},
      { name: 'Jeevan Kumar',    company: '',           package: 0  },
    ],
    yearwise: { '2022': [100,88], '2023': [108,97], '2024': [112,100] },
  },
  civil: {
    total: 58, placed: 49, students: [
      { name: 'Anjali Verma',    company: 'L&T Construction', package: 8  },
      { name: 'Basavaraj K.',    company: 'NHAI',             package: 9  },
      { name: 'Chitra Naik',     company: 'Shapoorji',        package: 7  },
      { name: 'Darshan Gowda',   company: 'Afcons',           package: 8.5},
      { name: 'Ekanth Rao',      company: 'PWD',              package: 7  },
      { name: 'Fatima Zahra',    company: '',                 package: 0  },
      { name: 'Gopal Reddy',     company: 'L&T Construction', package: 8  },
      { name: 'Hemavathi S.',    company: '',                 package: 0  },
    ],
    yearwise: { '2022': [52,42], '2023': [55,46], '2024': [58,49] },
  },
  aiml: {
    total: 58, placed: 56, students: [
      { name: 'Arjun Kapoor',    company: 'Google DeepMind',   package: 62 },
      { name: 'Bhavana Sree',    company: 'Microsoft Research', package: 45 },
      { name: 'Chandan M.',      company: 'Amazon Alexa',      package: 38 },
      { name: 'Diya Iyer',       company: 'Meta AI',           package: 42 },
      { name: 'Eshaan Gupta',    company: 'Nvidia',            package: 35 },
      { name: 'Faraz Ansari',    company: 'Salesforce AI',     package: 24 },
      { name: 'Gayathri R.',     company: 'IBM Research',      package: 18 },
      { name: 'Hitesh Batra',    company: 'Wipro AI',          package: 12 },
      { name: 'Isha Sinha',      company: 'TCS iON',           package: 10 },
      { name: 'Jatin Sharma',    company: '',                  package: 0  },
      { name: 'Keerthi N.',      company: 'Accenture AI',      package: 14 },
      { name: 'Lavanya B.',      company: '',                  package: 0  },
    ],
    yearwise: { '2022': [42,40], '2023': [50,48], '2024': [58,56] },
  },
  ds: {
    total: 56, placed: 54, students: [
      { name: 'Anika Reddy',     company: 'Goldman Sachs',  package: 48 },
      { name: 'Bhuvan Chandra',  company: 'Databricks',     package: 36 },
      { name: 'Charu Mehta',     company: 'Snowflake',      package: 32 },
      { name: 'Devansh Jain',    company: 'JPMorgan',       package: 28 },
      { name: 'Elakkiya S.',     company: 'Nielsen',        package: 16 },
      { name: 'Faisal Noor',     company: 'Google',         package: 30 },
      { name: 'Garima Tiwari',   company: 'Amazon',         package: 26 },
      { name: 'Harshad Gole',    company: 'Morgan Stanley', package: 24 },
      { name: 'Ishanvi K.',      company: '',               package: 0  },
      { name: 'Jayesh Patel',    company: 'EY',             package: 14 },
      { name: 'Kavitha Rao',     company: '',               package: 0  },
    ],
    yearwise: { '2022': [38,36], '2023': [46,44], '2024': [56,54] },
  },
  eee: {
    total: 58, placed: 51, students: [
      { name: 'Anand Rajan',     company: 'ABB',              package: 12 },
      { name: 'Bindu Priya',     company: 'Siemens',          package: 13 },
      { name: 'Chetan Wali',     company: 'Schneider',        package: 11 },
      { name: 'Dhanya Nair',     company: 'MSEDCL',           package: 8  },
      { name: 'Eshwar Rao',      company: 'BESCOM',           package: 8.5},
      { name: 'Falguni Shah',    company: 'NTPC',             package: 10 },
      { name: 'Gowtham S.',      company: '',                 package: 0  },
      { name: 'Hamsika R.',      company: 'L&T',              package: 9  },
      { name: 'Irfan Ali',       company: '',                 package: 0  },
      { name: 'Janani K.',       company: 'Infosys',          package: 7  },
    ],
    yearwise: { '2022': [52,44], '2023': [55,48], '2024': [58,51] },
  },
  biotech: {
    total: 56, placed: 46, students: [
      { name: 'Aishwarya R.',    company: 'Biocon',          package: 9  },
      { name: 'Balaji M.',       company: 'Syngene',         package: 10 },
      { name: 'Chethana B.',     company: 'GSK',             package: 14 },
      { name: 'Dhruv Saxena',    company: "Dr. Reddy's",     package: 12 },
      { name: 'Esha Kumari',     company: 'Novozymes',       package: 11 },
      { name: 'Fathima N.',      company: '',                package: 0  },
      { name: 'Gaurav Sinha',    company: 'Serum Institute', package: 9  },
      { name: 'Hina Shaikh',     company: '',                package: 0  },
      { name: 'Indu Latha',      company: 'Biocon',          package: 8  },
      { name: 'Jagdish Rao',     company: '',                package: 0  },
    ],
    yearwise: { '2022': [48,38], '2023': [52,42], '2024': [56,46] },
  },
};

/* ── COLUMN AUTO-DETECT ── */
const DEPT_ALIASES = {
  cs:      ['CS','CSE','Computer Science','Computer Science & Engineering'],
  ece:     ['ECE','Electronics','Electronics & Communication','E&C'],
  mech:    ['MECH','ME','Mechanical','Mechanical Engineering'],
  civil:   ['CIVIL','CE','Civil','Civil Engineering'],
  aiml:    ['AIML','AI&ML','AI & ML','Artificial Intelligence','AI/ML'],
  ds:      ['DS','Data Science','DataScience'],
  eee:     ['EEE','Electrical','Electrical & Electronics','EE'],
  biotech: ['BT','BIOTECH','Biotechnology','Bio Technology'],
};

let _allStudents  = null;
let _detectedCols = {};
let _currentDept  = null;
let _activeCharts = [];   // track chart instances to destroy on re-render

function detectColumns(row) {
  const keys  = Object.keys(row);
  const lower = keys.map(k => k.toLowerCase().trim());
  const find  = (...c) => { for (const x of c) { const i = lower.findIndex(k => k.includes(x)); if (i !== -1) return keys[i]; } return null; };
  return {
    name:    find('name','student'),
    dept:    find('dept','department','branch','div'),
    company: find('company','employer','organisation','organization','firm','recruiter'),
    package: find('package','lpa','salary','ctc','stipend'),
    year:    find('year','batch','passout','graduating'),
    placed:  find('placed','status','offer','selected'),
  };
}

function matchDept(row, deptKey, col) {
  if (!col) return false;
  const val = (row[col] || '').toString().trim().toUpperCase();
  return (DEPT_ALIASES[deptKey] || []).some(a => val === a.toUpperCase() || val.includes(a.toUpperCase()));
}

async function fetchAllStudents() {
  if (_allStudents) return _allStudents;
  try {
    const res  = await fetch(SHEETDB_URL);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return [];
    _detectedCols = detectColumns(data[0]);
    _allStudents  = data;
    return data;
  } catch { return []; }
}

function parsePkg(val) {
  if (!val) return 0;
  const n = parseFloat(val.toString().replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}

function isPlaced(row) {
  const c = _detectedCols;
  if (c.placed) {
    const v = (row[c.placed] || '').toString().toLowerCase();
    return ['yes','placed','selected','1','true'].includes(v);
  }
  if (c.company) {
    const v = (row[c.company] || '').toString().trim();
    return v !== '' && !['not placed','na','-',''].includes(v.toLowerCase());
  }
  return false;
}

function destroyCharts() {
  _activeCharts.forEach(ch => { try { ch.destroy(); } catch(e){} });
  _activeCharts = [];
}

/* ══════════════════════════════════════════════
   MAIN RENDER
══════════════════════════════════════════════ */
function renderPlacements() {
  _currentDept = null;
  return `
  <div class="placement-hero">
    <h1>🏆 Placement & Careers</h1>
    <p>BMSCE consistently delivers exceptional placement outcomes, connecting talented engineers with world-class organizations.</p>
    <div class="placement-stats">
      <div class="p-stat"><div class="p-stat-num">98%</div><div class="p-stat-label">Overall Placement Rate</div></div>
      <div class="p-stat"><div class="p-stat-num">₹12.5L</div><div class="p-stat-label">Average Package</div></div>
      <div class="p-stat"><div class="p-stat-num">₹75L</div><div class="p-stat-label">Highest Package</div></div>
      <div class="p-stat"><div class="p-stat-num">250+</div><div class="p-stat-label">Recruiting Companies</div></div>
    </div>
  </div>

  <!-- DEPT BUTTONS — always visible -->
  <div class="placement-dept-nav" id="placementDeptNav">
    
  </div>

  <!-- CONTENT AREA — overview by default -->
  <div id="placementContent">${buildOverviewContent()}</div>
  `;
}

/* ── OVERVIEW ── */
function buildOverviewContent() {
  return `
  <div class="companies-section">
    <h2>Our Recruiters</h2>
    <div class="companies-grid">
      ${['Google','Microsoft','Amazon','Apple','Meta','Intel','Qualcomm','Samsung','IBM','Oracle',
         'Salesforce','Adobe','Cisco','Infosys','TCS','Wipro','HCL','Cognizant','Accenture',
         'Capgemini','L&T','Boeing','DRDO','ISRO','BHEL','ABB','Siemens','Schneider',
         'Deloitte','EY','KPMG','JPMorgan','Goldman Sachs','Morgan Stanley','Biocon','Syngene']
        .map(c => `<div class="company-chip">${c}</div>`).join('')}
    </div>
  </div>
  <div class="dept-placement">
    <h2>Department-wise Placements</h2>
    <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:20px;">Click any department above or any row below for live student-level data.</p>
    <div style="overflow-x:auto;">
      <table class="placement-table">
        <thead>
          <tr><th>Department</th><th>Placement Rate</th><th>Avg Package</th><th>Highest Package</th><th>Top Recruiters</th></tr>
        </thead>
        <tbody>
          ${Object.entries(DEPARTMENTS).map(([k, d]) => `
            <tr style="cursor:pointer;" onclick="openDeptPlacement('${k}')">
              <td><strong>${d.emoji} ${d.code}</strong><br><span style="font-size:0.75rem;color:var(--text-muted);">${d.name}</span></td>
              <td><div class="bar-cell"><div class="mini-bar" data-width="${d.placements.rate}" style="width:0%;min-width:60px;flex:0 0 auto;"></div><span>${d.placements.rate}%</span></div></td>
              <td><strong>${d.placements.avg}</strong></td>
              <td><strong style="color:var(--blue-light);">${d.placements.highest}</strong></td>
              <td style="font-size:0.78rem;color:var(--text-muted);">${d.placements.companies.slice(0,3).join(', ')} <span style="color:var(--blue-light);font-weight:600;">→</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>
  <div style="background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:64px 24px;text-align:center;">
    <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:#fff;margin-bottom:16px;">Placement Cell</h2>
    <p style="color:rgba(255,255,255,0.75);max-width:600px;margin:0 auto 28px;">Our dedicated Placement Cell works year-round to connect students with top opportunities.</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
      <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px 28px;color:#fff;"><div style="font-size:1.3rem;margin-bottom:6px;">📞</div><div style="font-size:0.82rem;opacity:0.75;">Placement Office</div><div style="font-weight:600;">+91-80-2662-2130</div></div>
      <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px 28px;color:#fff;"><div style="font-size:1.3rem;margin-bottom:6px;">✉️</div><div style="font-size:0.82rem;opacity:0.75;">Email</div><div style="font-weight:600;">placements@bmsce.ac.in</div></div>
      <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px 28px;color:#fff;"><div style="font-size:1.3rem;margin-bottom:6px;">🌐</div><div style="font-size:0.82rem;opacity:0.75;">T&P Portal</div><div style="font-weight:600;">tnp.bmsce.ac.in</div></div>
    </div>
  </div>
  `;
}

/* ══════════════════════════════════════════════
   OPEN DEPT
══════════════════════════════════════════════ */
async function openDeptPlacement(deptKey) {
  destroyCharts();
  _currentDept = deptKey;
  const dept = DEPARTMENTS[deptKey];

  // Highlight active btn
  document.querySelectorAll('.pdept-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`pdept-${deptKey}`);
  if (btn) btn.classList.add('active');

  // Show loader
  const content = document.getElementById('placementContent');
  content.innerHTML = `
    <div style="padding:60px 24px;text-align:center;">
      <div class="spinner"></div>
      <p style="color:var(--text-muted);margin-top:16px;font-size:0.9rem;">Loading data…</p>
    </div>`;
  document.getElementById('placementDeptNav').scrollIntoView({ behavior:'smooth', block:'start' });

  // Fetch live data
  const allData = await fetchAllStudents();
  const c = _detectedCols;

  // Live students for this dept
  let liveStudents = c.dept
    ? allData.filter(row => matchDept(row, deptKey, c.dept))
    : [];

  // Build unified student list: live first, then mock fallback
  const mock = MOCK_DATA[deptKey];
  let students; // [{name, company, package, placed}]

  if (liveStudents.length > 0) {
    students = liveStudents.map(row => ({
      name:    c.name    ? (row[c.name]    || '–') : '–',
      company: c.company ? (row[c.company] || '')  : '',
      package: c.package ? parsePkg(row[c.package]) : 0,
      placed:  isPlaced(row),
      live:    true,
    }));
  } else {
    // Use mock data
    students = mock.students.map(s => ({
      name:    s.name,
      company: s.company,
      package: s.package,
      placed:  s.company !== '',
      live:    false,
    }));
  }

  const total         = mock.total;   // always use mock totals for consistency
  const placedCount   = mock.placed;
  const unplacedCount = total - placedCount;
  const rate          = Math.round((placedCount / total) * 100);

  const pkgs   = students.filter(s => s.placed && s.package > 0).map(s => s.package);
  const avgPkg = pkgs.length ? (pkgs.reduce((a,b)=>a+b,0)/pkgs.length).toFixed(1) : '–';
  const maxPkg = pkgs.length ? Math.max(...pkgs).toFixed(1) : '–';
  const minPkg = pkgs.length ? Math.min(...pkgs).toFixed(1) : '–';

  // Company counts
  const companyCounts = {};
  students.filter(s => s.placed && s.company).forEach(s => {
    companyCounts[s.company] = (companyCounts[s.company] || 0) + 1;
  });
  const topCompanies = Object.entries(companyCounts).sort((a,b)=>b[1]-a[1]).slice(0,8);

  // Package ranges
  const ranges = { '<5 LPA':0, '5–10':0, '10–15':0, '15–25':0, '25+ LPA':0 };
  pkgs.forEach(p => {
    if (p < 5)       ranges['<5 LPA']++;
    else if (p < 10) ranges['5–10']++;
    else if (p < 15) ranges['10–15']++;
    else if (p < 25) ranges['15–25']++;
    else             ranges['25+ LPA']++;
  });

  // Year-wise from mock
  const yw = mock.yearwise;
  const years = Object.keys(yw).sort();

  const isLive = liveStudents.length > 0;

  content.innerHTML = `
    <!-- BACK BUTTON + HEADER -->
    <div class="pdept-detail-hero" style="background:linear-gradient(135deg,${dept.color},${dept.color}bb);">
      <div class="pdept-detail-inner">
        <button class="pdept-back-btn" onclick="backToOverview()">← Back to All Departments</button>
        <div style="font-size:3rem;margin:12px 0 8px;">${dept.emoji}</div>
        <h2>${dept.name}</h2>
        <p style="color:rgba(237, 230, 230, 0.75);font-size:0.9rem;margin-top:4px;">
          ${isLive
            ? '🟢 Live data from your spreadsheet'
            : '🟡 Sample data — add students in your sheet to see live data'}
        </p>
      </div>
    </div>

    <!-- STAT CARDS -->
    <div class="pdept-stats-row">
      <div class="pdept-stat-card"><div class="pdept-stat-num" style="color:var(--blue-light);">${total}</div><div class="pdept-stat-label">Total Students</div></div>
      <div class="pdept-stat-card"><div class="pdept-stat-num" style="color:#22c55e;">${placedCount}</div><div class="pdept-stat-label">Placed</div></div>
      <div class="pdept-stat-card"><div class="pdept-stat-num" style="color:#ef4444;">${unplacedCount}</div><div class="pdept-stat-label">Yet to be Placed</div></div>
      <div class="pdept-stat-card"><div class="pdept-stat-num" style="color:var(--gold);">${rate}%</div><div class="pdept-stat-label">Placement Rate</div></div>
      <div class="pdept-stat-card"><div class="pdept-stat-num" style="color:var(--blue-light);">₹${avgPkg}L</div><div class="pdept-stat-label">Avg Package</div></div>
      <div class="pdept-stat-card"><div class="pdept-stat-num" style="color:var(--gold);">₹${maxPkg}L</div><div class="pdept-stat-label">Highest Package</div></div>
    </div>

    <!-- CHARTS: 2-col grid with FIXED heights -->
    <div class="pdept-charts-row">
      <div class="pdept-chart-card">
        <h3 class="chart-title">Placed vs Not Placed</h3>
        <div class="chart-wrap">
          <canvas id="chartPie"></canvas>
        </div>
      </div>
      <div class="pdept-chart-card">
        <h3 class="chart-title">Package Distribution (LPA)</h3>
        <div class="chart-wrap">
          <canvas id="chartBar"></canvas>
        </div>
      </div>
      <div class="pdept-chart-card pdept-chart-full">
        <h3 class="chart-title">Year-wise Placement Trend</h3>
        <div class="chart-wrap chart-wrap-wide">
          <canvas id="chartLine"></canvas>
        </div>
      </div>
    </div>

    <!-- TOP COMPANIES -->
    ${topCompanies.length ? `
    <div class="pdept-section">
      <h3>Top Hiring Companies</h3>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;">
        ${topCompanies.map(([co, n]) =>
          `<div class="company-chip" style="display:flex;align-items:center;gap:8px;">
            ${co}
            <span style="background:var(--blue-mid);color:#fff;font-size:0.7rem;padding:2px 8px;border-radius:10px;">${n}</span>
          </div>`
        ).join('')}
      </div>
    </div>` : ''}

    <!-- STUDENT TABLE -->
    <div class="pdept-section">
      <div class="student-table-header">
        <h3 style="margin:0;">Student Placement Details</h3>
        <div class="student-table-controls">
          <input type="text" id="studentSearch" placeholder="🔍 Search name or company…"
            oninput="filterStudentTable()"
            class="student-search-input" />
          <select id="studentFilter" onchange="filterStudentTable()" class="student-filter-select">
            <option value="all">All Students</option>
            <option value="placed">Placed Only</option>
            <option value="unplaced">Not Placed</option>
          </select>
          <span id="studentCount" class="student-count-badge"></span>
        </div>
      </div>
      <div style="overflow-x:auto;margin-top:16px;">
        <table class="placement-table" id="studentTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Company</th>
              <th>Package (LPA)</th>
            </tr>
          </thead>
          <tbody id="studentTableBody">
            ${students.map((s, i) => `
              <tr class="student-row"
                  data-placed="${s.placed}"
                  data-search="${(s.name+' '+s.company).toLowerCase()}">
                <td style="color:var(--text-muted);font-size:0.8rem;">${i+1}</td>
                <td><strong>${s.name}</strong></td>
                <td>
                  <span style="
                    background:${s.placed ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.1)'};
                    color:${s.placed ? '#16a34a' : '#dc2626'};
                    padding:3px 10px;border-radius:12px;font-size:0.75rem;font-weight:600;">
                    ${s.placed ? '✓ Placed' : '○ Pending'}
                  </span>
                </td>
                <td>${s.placed && s.company ? s.company : '<span style="color:var(--text-muted);">–</span>'}</td>
                <td><strong style="color:var(--blue-light);">${s.placed && s.package > 0 ? '₹'+s.package+' L' : '–'}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  updateStudentCount();
  loadChartJs(() => drawDeptCharts(placedCount, unplacedCount, ranges, years, yw));
  setTimeout(initProgressBars, 200);
}

/* ── BACK TO OVERVIEW ── */
function backToOverview() {
  destroyCharts();
  _currentDept = null;
  document.querySelectorAll('.pdept-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('placementContent').innerHTML = buildOverviewContent();
  setTimeout(initProgressBars, 200);
  document.getElementById('placementDeptNav').scrollIntoView({ behavior:'smooth', block:'start' });
}

/* ── TABLE FILTER ── */
function filterStudentTable() {
  const q      = (document.getElementById('studentSearch')?.value || '').toLowerCase();
  const filter = document.getElementById('studentFilter')?.value || 'all';
  document.querySelectorAll('.student-row').forEach(row => {
    const okSearch = !q || row.dataset.search.includes(q);
    const okFilter = filter === 'all'
      || (filter === 'placed'   && row.dataset.placed === 'true')
      || (filter === 'unplaced' && row.dataset.placed === 'false');
    row.style.display = okSearch && okFilter ? '' : 'none';
  });
  updateStudentCount();
}

function updateStudentCount() {
  const el      = document.getElementById('studentCount');
  const visible = document.querySelectorAll('.student-row:not([style*="none"])').length;
  const total   = document.querySelectorAll('.student-row').length;
  if (el) el.textContent = `Showing ${visible} of ${total}`;
}

/* ── CHART.JS LOADER ── */
function loadChartJs(cb) {
  if (window.Chart) { cb(); return; }
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
  s.onload = cb;
  document.head.appendChild(s);
}

/* ── DRAW CHARTS ── */
function drawDeptCharts(placedCount, unplacedCount, ranges, years, yw) {
  const dark      = document.body.classList.contains('dark-mode');
  const textColor = dark ? '#e0eaf7' : '#1a2332';
  const gridColor = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  Chart.defaults.color       = textColor;
  Chart.defaults.borderColor = gridColor;

  // 1. DOUGHNUT
  const pieEl = document.getElementById('chartPie');
  if (pieEl) {
    const ch = new Chart(pieEl, {
      type: 'doughnut',
      data: {
        labels: ['Placed', 'Not Placed'],
        datasets: [{
          data: [placedCount, unplacedCount],
          backgroundColor: ['#22c55e','#ef4444'],
          borderWidth: 3,
          borderColor: dark ? '#0f1e32' : '#fff',
          hoverOffset: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: { position:'bottom', labels:{ padding:18, font:{ size:13 } } },
          tooltip: { callbacks:{ label: ctx => ` ${ctx.label}: ${ctx.raw} students` } }
        }
      }
    });
    _activeCharts.push(ch);
  }

  // 2. BAR – Package Ranges
  const barEl = document.getElementById('chartBar');
  if (barEl) {
    const ch = new Chart(barEl, {
      type: 'bar',
      data: {
        labels: Object.keys(ranges),
        datasets: [{
          label: 'Students',
          data: Object.values(ranges),
          backgroundColor: ['rgba(45,111,212,0.85)','rgba(56,189,248,0.85)','rgba(99,210,190,0.85)','rgba(232,168,32,0.85)','rgba(239,100,80,0.85)'],
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend:{ display:false } },
        scales: {
          y: { beginAtZero:true, ticks:{ stepSize:1 }, grid:{ color:gridColor } },
          x: { grid:{ display:false } }
        }
      }
    });
    _activeCharts.push(ch);
  }

  // 3. LINE – Year-wise
  const lineEl = document.getElementById('chartLine');
  if (lineEl && years.length) {
    const ch = new Chart(lineEl, {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Total Students',
            data: years.map(y => yw[y][0]),
            borderColor: '#2d6fd4',
            backgroundColor: 'rgba(45,111,212,0.1)',
            tension: 0.4, fill: true, pointRadius: 5, pointHoverRadius: 7,
          },
          {
            label: 'Placed',
            data: years.map(y => yw[y][1]),
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34,197,94,0.08)',
            tension: 0.4, fill: true, pointRadius: 5, pointHoverRadius: 7,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend:{ position:'bottom', labels:{ padding:16 } } },
        scales: {
          y: { beginAtZero:false, grid:{ color:gridColor } },
          x: { grid:{ display:false } }
        }
      }
    });
    _activeCharts.push(ch);
  }
}