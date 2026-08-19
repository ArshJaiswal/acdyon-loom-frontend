# Engineering Decisions & Design Rationale

**Project**: LOOM — Curated Everyday Fashion Platform  
**Track**: Part 2 (The Premium Home Page)  
**Author**: Arsh Jaiswal  

---

### 1. Why I chose this approach

**Alternative Considered**: Building a feature-heavy, crowded e-commerce interface with endless category sidebars, discount popups, and generic product grids.

**Chosen Strategy**: A focused, editorial landing page for **LOOM** built with clean Vanilla Web standards (HTML5, CSS3, ES6+). The design centers on typography-driven hierarchy (*Cormorant Garamond* paired with *Plus Jakarta Sans*), generous whitespace, and **tangible interactive product cards where color swatches (`○ ○ ○`) dynamically update the garment image in real time**.

**Why**:
1. **Focus on Taste and Presentation**: Fashion buyers respond to visual craft, typography, and clear layout pacing. Instead of cluttering the page with complex checkout mechanics, the home page focuses on storytelling: an evocative hero (*"Wear what feels like you"*), a curated product showcase, an editorial lookbook (*The Loom Edit*), and a 3-pillar philosophy (*The Loom Standard*).
2. **Interactive Proof of Product**: Rather than relying solely on static claims, the product section provides real tactile interactions: dual-angle hover image reveals, active colorway switching on each card, and a slide-over bag drawer with instant item calculation.
3. **Honesty Through Design**: We deliberately avoided fake reviews, fabricated customer numbers, or artificial comparison claims against competitors. The design communicates quality through material clarity (breathable linen, organic cotton jersey, corozo nut buttons) and restrained micro-interactions.
4. **Complete Dark Mode**: To satisfy the prompt's dark mode requirement properly, we implemented a cohesive monochrome dark palette (`#0E0E10`, `#161618`, `#F5F2EA`) with smooth CSS variable switching, automatic OS preference detection, and local storage persistence.

---

### 2. Trade-offs made under the time limit

**The Trade-off**:
Given the time limit, I prioritized a polished editorial homepage and functional product interactions over implementing a full backend checkout or complex 3D product previews.

**With More Time**:
1. **User Testing & Layout Validation**: Conduct user feedback sessions to refine navigation hierarchy, typography legibility across different screen densities, and interaction ergonomics.
2. **Product Discovery & Filtering**: Expand the catalog with multi-attribute filtering (size, fabric weight, fit silhouette) and search autocomplete.
3. **Bag State Persistence**: Enhance the client-side cart with offline persistence and cross-session storage so returning users keep their selections.

---

### 3. How I used AI and verified the output

**Where AI Tools Were Used**:
- Assisting with the initial HTML structure and CSS custom properties scaffolding.
- Generating sample product catalog data structures for multi-colorway mapping.

**What I Personally Verified & Modified**:
1. **Interactive Product Swatches**: Handled and tested the swatch interaction logic to ensure color selection cleanly updates the corresponding card's primary image and active ring with zero layout shift.
2. **Typography and Spacing Restraint**: Refined font sizes, letter spacing, and line heights, removing clutter and comparison tables to create a spacious, luxury editorial feel.
3. **Complete Dark Mode Integration**: Audited every UI element across both light and dark themes to ensure full visual consistency with no unstyled components.
4. **Responsive Layout Auditing**: Tested layout behavior on a 390px mobile viewport (iPhone dimensions) through to 1440px desktop, ensuring zero horizontal overflow and smooth touch targets.
5. **Accessibility Standards**: Added `@media (prefers-reduced-motion: reduce)` support, visible focus outlines, keyboard guards (<kbd>/</kbd>, <kbd>Esc</kbd>), and proper ARIA states.
