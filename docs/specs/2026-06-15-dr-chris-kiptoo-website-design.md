# Design Specification: Dr. Chris Kiptoo Personal Website

## 1. Overview & Objectives
Dr. Chris Kiptoo, CBS, is the Principal Secretary for The National Treasury of Kenya. His personal website must serve as an authoritative, professional, and accessible digital portal detailing his career in public finance, trade, and environmental conservation, as well as his community leadership through the Kaptagat Integrated Conservation Programme (KICP).

## 2. Design Constraints (Visual Guidelines)
*   **Typography**:
    *   Headings: Georgia (serif, classic and institutional).
    *   Body: Calibri (sans-serif, neutral and highly legible).
*   **Color Palette**:
    *   Primary Background & Theme: Deep Navy Blue (`#0F1B2D`).
    *   Secondary Theme / Sections: Charcoal Dark (`#17253D`) and Off-White / Cream (`#F4F6F9`).
    *   Accent Colors: Warm Gold (`#C09E5A`) and Muted Teal (`#00869B`).
    *   *No gradients, no glassmorphism (backdrop-filter blur), and no animations that degrade institutional quality.*
*   **Structure**: 
    *   A single-page application (SPA) style layout with smooth scroll navigation and tabbed interfaces for complex sections (e.g., portfolios of Treasury, Trade, Environment).

## 3. Page Sections & Content Outline
1.  **Header & Navigation**:
    *   Left side: Coat of Arms of Kenya (emblem of public service) and National Treasury branding.
    *   Right side: Navigation links (Home, Profile, Portfolios, Gallery, Conservation, Contact).
2.  **Hero Section**:
    *   Background: Navy blue.
    *   Content: High-quality professional portrait, name: "Dr. Chris K. Kiptoo, CBS", official role: "Principal Secretary, The National Treasury & Economic Planning, Republic of Kenya", and call-to-actions.
3.  **Biography / Profile**:
    *   Professional summary highlighting over two decades in public service (Central Bank of Kenya, Office of the Prime Minister, IMF, PS Trade, PS Environment, PS National Treasury).
    *   Academic credentials: PhD in Finance (UoN), MSc in Economics (UoN), BSc (Egerton), and MEFMI Fellowship.
4.  **Leadership Portfolios (Tabbed Interface)**:
    *   **The National Treasury (2022–Present)**: Fiscal consolidation, expenditure rationalization, Eurobond negotiation, and SOE reforms.
    *   **Environment & Forestry (Previous PS)**: Environment conservation leadership, reforestation, Kaptagat watershed restoration, recognized as a National Hero (*Shujaa*) in 2025.
    *   **State Department of Trade (Previous PS)**: Regional integration, export promotion, bilateral trade agreements.
5.  **Recent Engagements / Gallery**:
    *   A card-based showcase featuring photos and structured summaries of key engagements (loaded from `posts.csv`):
        *   FY 2026/27 Budget Statement presentation.
        *   Finance Bill 2026 departmental committee retreat in Kiambu.
        *   MeetingSusan Burns, US Embassy Chargé d'Affaires ($1.6B Health Cooperation).
        *   Welcoming KRA Commissioner General Mr. Adan Mohamed.
        *   Briefing Head of Public Service Felix Koskei on KICP 10th Edition.
6.  **Conservation & Community (KICP)**:
    *   Spotlight on Kaptagat Integrated Conservation Programme (KICP). Announcement for the 10th Edition on July 11, 2026 at Penon Forest Block, Keiyo South, graced by the President.
7.  **Contact & Communications**:
    *   Official inquiries form.
    *   Office details: The National Treasury, Treasury Building, Harambee Avenue, Nairobi, Kenya.

## 4. Logo Assets
*   **Coat of Arms of Kenya**: Public service badge.
*   **KICP Logo**: Reforestation and community empowerment branding.

## 5. Technical Stack & SEO
*   **Technologies**: Vanilla HTML5, Vanilla CSS3 (custom responsive grid and custom properties), and vanilla ES6 JavaScript (for navigation scroll, active section states, tab switching, and contact form validation).
*   **Accessibility**: WCAG 2.1 AA compliant, proper ARIA labeling, semantic elements (`<header>`, `<section>`, `<article>`, `<main>`, `<footer>`), keyboard navigable.
*   **Performance**: Optimize local images (compressed format), lazy loading for images in the gallery, no render-blocking external scripts.
*   **SEO**:
    *   Meta description, title tags, schema markup for public figures.
