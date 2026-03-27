#  BMSCE – BMS College of Engineering Website
Tagline: Full-Stack College Portal with AI-Powered Chatbot
##  Project Overview
A modern, accessible, and fully responsive college website for **BMS College of Engineering, Bangalore** (Est. 1946). Built with dynamic routing, a built-in AI chatbot assistant, rich department pages, placement stats, alumni network, events, research, and campus life

##  Features
###  Multi-Page SPA Navigation
-Pages: Home, Departments, Placements, Alumni, Events, Research, Campus Life, Admissions
- Smooth scroll-to-top on every navigation
  
###  Departments
Dedicated pages for 8 departments:
- Computer Science · Electronics & Comm. · Mechanical · Civil
- AI & ML · Data Science · Electrical · Biotechnology
  
###  Placements
- Live stats: 98% placement rate, avg. ₹12.5 LPA
- Top recruiters, year-wise trends, animated progress bars
  Data used for Placements- https://sheetdb.io/api/v1/kcjj0f56v30ej
  
###  AI Chatbot Assistant
- Floating chatbot (`💬`) powered by keyword-matching responses
- Handles queries on admissions, placements, departments, events, and campus life
  
###  Accessibility Panel
Full WCAG-inspired accessibility controls:
- High Contrast · Grayscale · Highlight Links · Dyslexia Font
- Text Spacing · Reading Guide (mouse-follow bar) · Large Cursor · Hide Images
- Live sliders: Text Size (80–150%) · Line Height · Letter Spacing
- One-click Reset All

###  Dark / Light Mode
- Toggle with `🌙` / `☀️` button
- Smooth CSS variable-based theme switching
  
###  Global Search
- Live search suggestions from `SEARCH_DATA`
- Enter-to-navigate support
- Auto-dismiss on outside click

###  Announcement Ticker
- Continuous marquee with latest news, rankings, and events

###  Responsive Design
- Mobile hamburger menu
- Fluid grid layouts for all screen size
  
##  Tech Stack
| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Logic | Vanilla JavaScript (ES6+, strict mode) |
| Fonts | Google Fonts — Playfair Display, DM Sans, DM Mono |
| No frameworks | Zero dependencies, zero build step |

---

##  File Structure


bmsce-website/
├── index.html          # Main shell — navbar, footer, chatbot, init logic
├── style.css           # Global styles, themes, accessibility classes
├── data.js             # SEARCH_DATA, CHATBOT_RESPONSES, shared constants
├── home.js             # renderHome() — hero, stats, highlights
├── dept.js             # renderDept(param) — all 8 department pages
├── placement.js        # renderPlacements() — stats, charts, recruiters
├── alumni.js           # renderAlumni() — notable alumni, network
├── events.js           # renderEvents() — fest, workshops, calendar
├── research.js         # renderResearch() — labs, publications, centres
├── campus.js           # renderCampus() — hostel, clubs, facilities
└── adm.js              # renderAdmissions() — eligibility, fees, process





# Open directly in browser — no build step needed
open index.html

# Additional Features that can be implemented:
•	Integrated website access to the student portal 
•	Virtual campus tour

# Authors
Gowri T R
Jeshika J
Lalithya M R
