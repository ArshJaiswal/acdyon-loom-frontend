# Engineering Decisions & Design Rationale

**Project**: LOOM — Curated Everyday Fashion Platform  
**Track**: Part 2 (The Premium Home Page)  
**Author**: Candidate Submission  

---

### 1. Why this design and architecture strategy over the obvious alternative rejected?

**Rejected Alternative**: Building a feature-stuffed, cluttered e-commerce clone (with endless filter sidebars, countdown timers, fake social proof popups, and fabricated 5-star customer reviews).

**Chosen Strategy**: A focused, highly refined editorial landing page built with pure Vanilla Web standards (HTML5/CSS3/ES6+). It prioritizes typography-driven visual hierarchy (*Cormorant Garamond* paired with *Plus Jakarta Sans*), generous whitespace, and **tangible interactive product cards where color swatches (`○ ○ ○`) dynamically update the garment image in real time**.

**Why**:
1. **The 3-Second "Taste Over Scaffold" Rule**: Fashion consumers evaluate brand quality instantly through visual restraint, typography, and uncrowded layout pacing. Instead of overwhelming visitors with full checkout mechanics, the home page focuses on storytelling: an evocative hero (*"Wear what feels like you"*), the core product showcase, an editorial lookbook (*The Loom Edit*), and our 3-pillar philosophy (*The Loom Standard*).
2. **Interactive Proof of Product (Not Just Claims)**: Rather than making unverifiable claims, the product section provides real tactile interactions: dual-angle hover image reveals, active colorway switching on each card, and a slide-over bag drawer with instant item calculation.
3. **Honesty Through Design Rather Than Preaching**: We strictly avoided fake testimonials, fabricated user metrics, or artificial comparison claims against competitors. The design speaks for itself through material clarity (breathable linen, organic cotton jersey, corozo nut buttons) and restrained micro-interactions.
4. **All-or-Nothing Dark Mode Support**: In strict alignment with the prompt's guardrail (*"half-dark is worse than none"*), we engineered a complete luxury monochrome dark palette (`#0E0E10`, `#161618`, `#F5F2EA`) with smooth CSS variable switching, automatic OS `prefers-color-scheme` detection, and persistent theme storage.

---

### 2. One trade-off made under the time limit, and what I'd do with a real week.

**The Trade-off**:
To deliver an ultra-responsive, lightweight experience within the timeframe, garment photography and colorway changes are driven by curated image assets rather than a WebGL 3D fabric drape simulator.

**With a Real Week**:
1. **Interactive 3D Drape & Texture Inspector**: Implement a WebGL canvas to inspect 360° fabric drape and zoom into fiber textures.
2. **Interactive Fit Recommender**: Build a lightweight client-side sizing calculator (height, weight, fit preference) without page reloads.
3. **IndexedDB Local Bag Persistence**: Retain user bag items across browser sessions with an offline-first storage layer.
4. **Automated Cross-Device Visual Regression Suite**: Playwright tests verifying sub-16ms frame timing, zero layout thrashing, and strict viewport bounds at 390px (mobile) and 1440px+ (desktop).

---

### 3. Where did I use AI tools, and what did I personally verify or change afterward?

**Where AI Tools Were Used**:
- Assisting in scaffolding the initial editorial layout grid and color token variables (off-white, warm sand, terracotta, obsidian dark mode).
- Generating mock product catalog JSON structures for multi-colorway mapping.

**What I Personally Verified & Modified**:
1. **Interactive Card Architecture**: Designed and tested the product card interaction—ensuring color swatch clicks (`○ ○ ○`) update the target card's image and active outline seamlessly with zero layout shift.
2. **Editorial Typography & Spacing Restraint**: Hand-tuned typography line heights, serif letter-spacing, and removed unnecessary comparison tables to allow the page to breathe with luxury pacing.
3. **Comprehensive Dark Mode**: Audited every single component (cards, drawers, modals, announcement bar, navigation) to guarantee a flawless, all-or-nothing dark mode experience without unstyled or half-dark elements.
4. **Responsive Breakpoint Auditing**: Verified layout behavior at 390px mobile viewport (iPhone dimensions) ensuring zero horizontal scrollbars, proper touch targets, and fluid image scaling.
5. **Accessibility Maturity**: Added `@media (prefers-reduced-motion: reduce)` support, visible focus-visible outlines, proper `aria-expanded` state on the hamburger button, and keyboard escape guards.
