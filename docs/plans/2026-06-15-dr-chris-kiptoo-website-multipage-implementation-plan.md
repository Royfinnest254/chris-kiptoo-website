# Dr. Chris Kiptoo Personal Website: Multi-Page Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a highly comprehensive, multi-page public portal (Home, Biography, Treasury, Trade, Environment, KICP, Contact) for Dr. Chris Kiptoo, CBS, using a Light Navy Blue theme (no gold), white headers, and a homepage background photo slideshow.

**Architecture:** A multi-page HTML5 static application. Shared styles are defined in `css/style.css`. Pages include custom SVGs. Homepage features a full-bleed CSS/JS background slideshow using high-resolution images.

**Tech Stack:** HTML5, CSS3, ES6 JavaScript, Jest + JSDOM for utility testing.

---

### Task 1: Setup Multi-Page Assets

**Files:**
- Create: `assets/media/gallery-konza-aist.jpg`
- Create: `assets/media/gallery-kicp-community.jpg`

- [ ] **Step 1: Copy high-resolution slides images**
  Copy Konza Technopolis and KICP community engagement photos to the assets folder.
  Run:
  ```powershell
  Copy-Item -Path "C:\Users\roych\Downloads\drchriskiptoo\media\0020-dzhigxsjb2w-10.jpg" -Destination "assets/media/gallery-konza-aist.jpg"
  Copy-Item -Path "C:\Users\roych\Downloads\drchriskiptoo\media\0014-dzqc0tydkjg-17.jpg" -Destination "assets/media/gallery-kicp-community.jpg"
  ```
  Expected: Both high-resolution images copied.

---

### Task 2: Implement Styling Revisions (`css/style.css`)

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Update design tokens and layout classes**
  Update the style.css file to replace the gold tokens with light navy blue, style the header as solid white with dark navigation text, and define background slideshow styling.
  Replace `:root` variables and add slideshow keyframes:
  ```css
  :root {
      --color-primary: #1D3557;     /* Light Navy Blue Base */
      --color-primary-dark: #11223F;
      --color-accent-navy: #2E5B88;  /* Accent Light Navy */
      --color-accent-slate: #4F7EAD; /* Slate Blue */
      --color-card-bg: #F8FAFC;
      --color-text-light: #FFFFFF;
      --color-text-dark: #1E293B;
      --color-text-muted: #64748B;
      --color-bg-light: #F1F5F9;
      --color-bg-white: #FFFFFF;
      --font-headings: Georgia, "Times New Roman", serif;
      --font-body: Calibri, Arial, sans-serif;
  }
  ```
  Add header styles:
  ```css
  .site-header {
      background-color: var(--color-bg-white);
      color: var(--color-text-dark);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 2px solid #E2E8F0;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .logo-title {
      color: var(--color-primary);
  }
  .logo-subtitle {
      color: var(--color-accent-navy);
  }
  .main-navigation a {
      color: var(--color-text-dark);
      font-weight: 500;
  }
  .main-navigation a:hover {
      color: var(--color-accent-navy);
  }
  ```
  Add slideshow styling:
  ```css
  .hero-slideshow-container {
      position: relative;
      background-color: var(--color-primary-dark);
      color: var(--color-text-light);
      padding: 8rem 1.5rem;
      overflow: hidden;
  }
  .slideshow-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
  }
  .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 1s ease-in-out;
  }
  .slide.active {
      opacity: 0.4; /* Overlaid dark visibility */
  }
  .hero-slideshow-container .hero-container {
      position: relative;
      z-index: 2; /* Ensure text is above images */
      max-width: 1200px;
      margin: 0 auto;
  }
  ```
  Expected: Style.css successfully updated.

---

### Task 3: Build Homepage (`index.html`)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Rewrite index.html with slideshow and section teasers**
  Implement the background slideshow divs, clean SVG icons, and links to subpages.
  Code snippet for hero & cards navigation:
  ```html
  <section class="hero-slideshow-container">
      <div class="slideshow-background">
          <div class="slide active" style="background-image: url('assets/media/gallery-budget-2026.jpg');"></div>
          <div class="slide" style="background-image: url('assets/media/gallery-konza-aist.jpg');"></div>
          <div class="slide" style="background-image: url('assets/media/gallery-kicp-community.jpg');"></div>
      </div>
      <div class="hero-container">
          <div class="hero-content">
              <span class="hero-tag">Official Portal</span>
              <h1>Dr. Chris K. Kiptoo, CBS</h1>
              <p class="hero-role" style="color: #E2E8F0;">Principal Secretary, The National Treasury &amp; Economic Planning</p>
              <p class="hero-intro">Leading Kenya's fiscal planning and environmental stewardship through sustainable policy administration.</p>
              <div class="hero-cta">
                  <a href="about.html" class="btn btn-primary">Read Biography</a>
                  <a href="contact.html" class="btn btn-secondary">Get in Touch</a>
              </div>
          </div>
      </div>
  </section>
  ```
  Expected: index.html fully rewritten.

---

### Task 4: Create Detail Subpages

**Files:**
- Create: `about.html`
- Create: `treasury.html`
- Create: `trade.html`
- Create: `environment.html`
- Create: `kicp.html`
- Create: `contact.html`

- [ ] **Step 1: Create about.html**
  Create full page with detailed biographic statements, education timeline, and credential listings.
  
- [ ] **Step 2: Create treasury.html**
  Focus on the Budget 2026/27, tax policy measures, KRA, and STEM/Konza coordination. Include SVGs for economy/finance dashboard items.

- [ ] **Step 3: Create trade.html**
  Dedicated detail page for international trade agreements, export strategies, EAC integration.

- [ ] **Step 4: Create environment.html**
  Dedicated page for forestry policies, environmental actions, and national recognition.

- [ ] **Step 5: Create kicp.html**
  Dedicated page outlining KICP reforestation efforts, community empowerment, and the upcoming 10th Edition restoration celebration on July 11, 2026.

- [ ] **Step 6: Create contact.html**
  Detailed contact page with form inputs.

---

### Task 5: Implement Interactive Behaviors (`js/main.js`)

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Write slideshow and tab navigation scripts**
  Implement the auto-scrolling slideshow logic.
  Code:
  ```javascript
  document.addEventListener('DOMContentLoaded', () => {
      // Background slideshow logic
      const slides = document.querySelectorAll('.slide');
      if (slides.length > 0) {
          let currentSlide = 0;
          setInterval(() => {
              slides[currentSlide].classList.remove('active');
              currentSlide = (currentSlide + 1) % slides.length;
              slides[currentSlide].classList.add('active');
          }, 5000); // Shift slide every 5 seconds
      }
  });
  ```
  Expected: Slideshow scrolls correctly.

---

### Task 6: Walkthrough & Test Run

**Files:**
- Modify: `walkthrough.md`

- [ ] **Step 1: Run Jest tests**
  Verify all utility validation test targets still pass.
  Run: `npm test`
  Expected: PASS.

- [ ] **Step 2: Update Walkthrough**
  Update [walkthrough.md](file:///C:/Users/roych/.gemini/antigravity/brain/a2932d51-04ab-4e53-94e2-c42b3878df33/walkthrough.md) with details of the new multi-page structure.
