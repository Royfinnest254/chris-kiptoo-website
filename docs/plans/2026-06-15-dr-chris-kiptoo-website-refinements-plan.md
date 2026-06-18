# Dr. Chris Kiptoo Personal Website: Revisions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the portal layout to implement a comprehensive 4-column footer, an interactive slideshow component on the home page with manual buttons, and update the gallery page so that all photos are uncropped (object-fit: contain) and show description text directly beneath them.

**Architecture:** Modified static HTML layouts, updated stylesheet styles for slideshow navigation, footer structures, and gallery cards, and expanded javascript interactions.

**Tech Stack:** HTML5, CSS3, ES6 JavaScript.

---

### Task 1: Add Comprehensive Footer Across All Pages

**Files:**
- Modify: `index.html`
- Modify: `about.html`
- Modify: `treasury.html`
- Modify: `trade.html`
- Modify: `environment.html`
- Modify: `kicp.html`
- Modify: `gallery.html`
- Modify: `contact.html`

- [ ] **Step 1: Write and inject comprehensive footer in HTML files**
  Inject a 4-column layout footer featuring: brand logo/emblem, quick site links, treasury office coordinates, external ministerial portal references, copyright, and legal public capacity disclaimer text.
  Expected: All footers updated to comprehensive structure.

---

### Task 2: Implement Interactive Slideshow on Home Page

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`
- Modify: `js/main.js`

- [ ] **Step 1: Rewrite Hero section in index.html**
  Remove the background hero slideshow and place a structured carousel slideshow with manual navigation triggers inside the Hero container.
  Structure:
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
              <p class="hero-intro">Dedicated economist and public servant leading fiscal policy stewardship, economic planning, and community environmental conservation in the Republic of Kenya.</p>
              <div class="hero-cta">
                  <a href="about.html" class="btn btn-primary">Read Biography</a>
                  <a href="contact.html" class="btn btn-secondary">Get in Touch</a>
              </div>
          </div>
      </div>
      <!-- Slideshow Navigation Controls -->
      <button class="slide-control prev" id="prev-slide" aria-label="Previous Slide">&#10094;</button>
      <button class="slide-control next" id="next-slide" aria-label="Next Slide">&#10095;</button>
      <div class="slide-indicators">
          <span class="slide-dot active" data-index="0"></span>
          <span class="slide-dot" data-index="1"></span>
          <span class="slide-dot" data-index="2"></span>
      </div>
  </section>
  ```

- [ ] **Step 2: Update CSS styling rules**
  Add styles for `.slide-control` and `.slide-indicators` in `css/style.css`.
  ```css
  .slide-control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(29, 53, 87, 0.6);
      color: var(--color-text-light);
      border: none;
      padding: 1rem;
      cursor: pointer;
      font-size: 1.5rem;
      z-index: 5;
      transition: background-color 0.2s ease;
  }
  .slide-control:hover {
      background-color: var(--color-primary);
  }
  .slide-control.prev { left: 1.5rem; }
  .slide-control.next { right: 1.5rem; }
  
  .slide-indicators {
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
      z-index: 5;
  }
  .slide-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.4);
      cursor: pointer;
      transition: background-color 0.2s ease;
  }
  .slide-dot.active {
      background-color: var(--color-text-light);
  }
  ```

- [ ] **Step 3: Update JS Main file**
  Implement the interactive click listeners for manual control.
  ```javascript
  // Slideshow Logic
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slide-dot');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');

  if (slides.length > 0) {
      let currentSlide = 0;
      let slideInterval = setInterval(nextSlide, 5000);

      function showSlide(index) {
          slides[currentSlide].classList.remove('active');
          dots[currentSlide].classList.remove('active');
          currentSlide = (index + slides.length) % slides.length;
          slides[currentSlide].classList.add('active');
          dots[currentSlide].classList.add('active');
      }

      function nextSlide() {
          showSlide(currentSlide + 1);
      }

      function prevSlide() {
          showSlide(currentSlide - 1);
      }

      if (nextBtn) {
          nextBtn.addEventListener('click', () => {
              nextSlide();
              resetTimer();
          });
      }

      if (prevBtn) {
          prevBtn.addEventListener('click', () => {
              prevSlide();
              resetTimer();
          });
      }

      dots.forEach((dot, idx) => {
          dot.addEventListener('click', () => {
              showSlide(idx);
              resetTimer();
          });
      });

      function resetTimer() {
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, 5000);
      }
  }
  ```

---

### Task 3: Restructure Gallery Grid & Captions (`gallery.html` & `css/style.css`)

**Files:**
- Modify: `gallery.html`
- Modify: `css/style.css`

- [ ] **Step 1: Rewrite gallery cards in gallery.html**
  Remove the hover overlays and place descriptions directly beneath each image.
  Example Card:
  ```html
  <div class="gallery-card-item">
      <div class="gallery-img-container">
          <img src="assets/media/gallery-budget-2026.jpg" alt="FY 2026/27 Budget Statement Presentation" loading="lazy">
      </div>
      <div class="gallery-card-caption-block">
          <span class="gallery-card-date">11 June 2026</span>
          <p class="gallery-card-desc">Presentation of the KSh 4.82 Trillion Budget Statement at Parliament Buildings.</p>
      </div>
  </div>
  ```

- [ ] **Step 2: Update Grid Styling**
  Modify the stylesheet so that `gallery-img-container` contains the full image without clipping.
  ```css
  .full-gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
  }
  .gallery-card-item {
      background-color: var(--color-bg-white);
      border: 1px solid #E2E8F0;
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      cursor: pointer;
      transition: transform 0.2s ease;
  }
  .gallery-card-item:hover {
      transform: translateY(-2px);
  }
  .gallery-img-container {
      height: 240px;
      background-color: #E2E8F0; /* Fallback frame background */
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
  }
  .gallery-img-container img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain; /* Do not crop the images */
      display: block;
  }
  .gallery-card-caption-block {
      padding: 1.25rem;
      border-top: 1px solid #F1F5F9;
  }
  .gallery-card-date {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: var(--color-accent-slate);
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
  }
  .gallery-card-desc {
      font-size: 0.9rem;
      line-height: 1.4;
      color: #334155;
  }
  ```
