/**
 * LOOM — FASHION STOREFRONT CLIENT ENGINE
 * Acdyon Technologies Frontend Challenge Track 2: The Premium Home Page
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PRODUCT CATALOG DATA
  // =========================================================================

  const PRODUCTS = [
    {
      id: 'prod-1',
      name: 'Oversized Linen Shirt',
      fabric: '100% Breathable Flax Linen',
      price: 2499,
      category: 'linen',
      colorways: [
        {
          name: 'Chalk White',
          hex: '#f5f3ef',
          mainImg: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Sand Dune',
          hex: '#d6cbbe',
          mainImg: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Charcoal Slate',
          hex: '#2b2a29',
          mainImg: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=85'
        }
      ]
    },
    {
      id: 'prod-2',
      name: 'Heavyweight Boxy Tee',
      fabric: 'Dense Organic Cotton Jersey',
      price: 1899,
      category: 'cotton',
      colorways: [
        {
          name: 'Oatmeal',
          hex: '#ded8ce',
          mainImg: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Washed Black',
          hex: '#1e1e1f',
          mainImg: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Muted Sage',
          hex: '#7d8c7c',
          mainImg: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=800&q=85'
        }
      ]
    },
    {
      id: 'prod-3',
      name: 'Pleated Relaxed Trousers',
      fabric: 'Woven Linen with Corozo Nut Buttons',
      price: 3299,
      category: 'linen',
      colorways: [
        {
          name: 'Dune Sand',
          hex: '#cfc4b4',
          mainImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Olive Drab',
          hex: '#555d4c',
          mainImg: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Midnight Navy',
          hex: '#1e2430',
          mainImg: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=85'
        }
      ]
    },
    {
      id: 'prod-4',
      name: 'Minimal Chore Jacket',
      fabric: 'Raw Unbleached Cotton Twill',
      price: 4199,
      category: 'outerwear',
      colorways: [
        {
          name: 'Natural Ecru',
          hex: '#e6ded1',
          mainImg: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Terracotta',
          hex: '#c47c5d',
          mainImg: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=85'
        },
        {
          name: 'Indigo Raw',
          hex: '#1b2d42',
          mainImg: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85',
          hoverImg: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85'
        }
      ]
    }
  ];

  // State
  let state = {
    activeCategory: 'all',
    selectedColorways: {
      'prod-1': 0,
      'prod-2': 0,
      'prod-3': 0,
      'prod-4': 0
    },
    cart: [
      {
        id: 'cart-item-1',
        productId: 'prod-1',
        name: 'Oversized Linen Shirt',
        colorwayName: 'Chalk White',
        price: 2499,
        thumb: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=200&q=80',
        qty: 1
      }
    ],
    searchOpen: false
  };

  // =========================================================================
  // 2. DOM ELEMENTS
  // =========================================================================

  const productsGrid = document.getElementById('products-grid');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop');
  const cartItemsList = document.getElementById('cart-items-list');
  const bagCountBadge = document.getElementById('bag-count-badge');
  const mobileBagNum = document.getElementById('mobile-bag-num');
  const cartItemCountText = document.getElementById('cart-item-count-text');
  const cartSubtotalVal = document.getElementById('cart-subtotal-val');
  const cartTotalVal = document.getElementById('cart-total-val');
  const checkoutDemoBtn = document.getElementById('checkout-demo-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  // Search Elements
  const searchTriggerBtn = document.getElementById('search-trigger-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResultsList = document.getElementById('search-results-list');
  const searchCloseKbd = document.getElementById('search-close-kbd');

  // Mobile Menu Elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBagTrigger = document.getElementById('mobile-bag-trigger');

  // Easter Egg
  const atelierBanner = document.getElementById('atelier-banner');
  const atelierDismissBtn = document.getElementById('atelier-dismiss-btn');

  // =========================================================================
  // 3. PRODUCT CARDS & COLOR SWATCH ENGINE
  // =========================================================================

  function renderProductGrid() {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    const filtered = state.activeCategory === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === state.activeCategory);

    filtered.forEach(p => {
      const activeIdx = state.selectedColorways[p.id] || 0;
      const activeColor = p.colorways[activeIdx];

      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-product-id', p.id);

      card.innerHTML = `
        <div class="product-media-box">
          <img class="product-main-img" id="img-main-${p.id}" src="${activeColor.mainImg}" alt="${p.name} in ${activeColor.name}" loading="lazy">
          <img class="product-hover-img" id="img-hover-${p.id}" src="${activeColor.hoverImg}" alt="${p.name} alternate angle" loading="lazy">

          <div class="product-hover-action">
            <button class="quick-add-btn" data-add-id="${p.id}" aria-label="Add ${p.name} to bag">
              + Quick Add
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-name-block">
            <h3 class="product-title">${escapeHtml(p.name)}</h3>
            <span class="product-fabric-line">${escapeHtml(p.fabric)}</span>
          </div>

          <div class="product-price-line">
            <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="product-color-name" id="label-color-${p.id}">${escapeHtml(activeColor.name)}</span>
          </div>

          <!-- Color Swatches (○ ○ ○) -->
          <div class="product-swatches" role="radiogroup" aria-label="Colorways for ${p.name}">
            ${p.colorways.map((c, idx) => `
              <button 
                class="swatch-dot ${idx === activeIdx ? 'active' : ''}" 
                style="background-color: ${c.hex};" 
                data-product-id="${p.id}" 
                data-color-idx="${idx}"
                title="${c.name}"
                aria-label="Select ${c.name}">
              </button>
            `).join('')}
          </div>
        </div>
      `;

      productsGrid.appendChild(card);
    });
  }

  function handleSwatchSelect(productId, colorIdx) {
    state.selectedColorways[productId] = colorIdx;
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    const color = prod.colorways[colorIdx];

    const mainImg = document.getElementById(`img-main-${productId}`);
    const hoverImg = document.getElementById(`img-hover-${productId}`);
    const label = document.getElementById(`label-color-${productId}`);

    if (mainImg) mainImg.src = color.mainImg;
    if (hoverImg) hoverImg.src = color.hoverImg;
    if (label) label.textContent = color.name;

    const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (card) {
      card.querySelectorAll('.swatch-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === colorIdx);
      });
    }
  }

  // =========================================================================
  // 4. SLIDE-OVER BAG DRAWER
  // =========================================================================

  function openBagDrawer() {
    if (cartDrawerBackdrop) {
      cartDrawerBackdrop.classList.add('active');
      cartDrawerBackdrop.setAttribute('aria-hidden', 'false');
    }
  }

  function closeBagDrawer() {
    if (cartDrawerBackdrop) {
      cartDrawerBackdrop.classList.remove('active');
      cartDrawerBackdrop.setAttribute('aria-hidden', 'true');
    }
  }

  function addItemToBag(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    const activeIdx = state.selectedColorways[productId] || 0;
    const color = prod.colorways[activeIdx];

    const existing = state.cart.find(i => i.productId === productId && i.colorwayName === color.name);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        id: 'item-' + Date.now(),
        productId: prod.id,
        name: prod.name,
        colorwayName: color.name,
        price: prod.price,
        thumb: color.mainImg,
        qty: 1
      });
    }

    renderBag();
    openBagDrawer();
  }

  function updateBagQty(itemId, delta) {
    const item = state.cart.find(i => i.id === itemId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(i => i.id !== itemId);
    }
    renderBag();
  }

  function renderBag() {
    if (!cartItemsList) return;
    cartItemsList.innerHTML = '';

    const totalCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    if (bagCountBadge) bagCountBadge.textContent = totalCount;
    if (mobileBagNum) mobileBagNum.textContent = totalCount;
    if (cartItemCountText) cartItemCountText.textContent = `(${totalCount} item${totalCount === 1 ? '' : 's'})`;

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="padding: 3.5rem 1rem; text-align: center; color: var(--text-muted);">
          <p style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 0.3rem;">Your bag is empty.</p>
          <p style="font-size: 0.82rem;">Explore our curated linen and organic cotton pieces.</p>
        </div>
      `;
    } else {
      state.cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
          <img class="cart-item-img" src="${item.thumb}" alt="${item.name}">
          <div class="cart-item-info">
            <div>
              <div class="cart-item-title">${escapeHtml(item.name)}</div>
              <div class="cart-item-color">Color: ${escapeHtml(item.colorwayName)}</div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div class="cart-qty-ctrl">
                <button class="qty-btn" data-cart-id="${item.id}" data-action="dec" aria-label="Decrease quantity">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" data-cart-id="${item.id}" data-action="inc" aria-label="Increase quantity">+</button>
              </div>
              <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
            </div>
          </div>
        `;
        cartItemsList.appendChild(row);
      });
    }

    if (cartSubtotalVal) cartSubtotalVal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (cartTotalVal) cartTotalVal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  // =========================================================================
  // 5. SEARCH MODAL
  // =========================================================================

  function openSearchModal() {
    state.searchOpen = true;
    if (searchModal) {
      searchModal.classList.add('active');
      searchModal.setAttribute('aria-hidden', 'false');
    }
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    renderSearchMatches();
  }

  function closeSearchModal() {
    state.searchOpen = false;
    if (searchModal) {
      searchModal.classList.remove('active');
      searchModal.setAttribute('aria-hidden', 'true');
    }
  }

  function renderSearchMatches() {
    if (!searchResultsList) return;
    const q = (searchInput?.value || '').toLowerCase().trim();

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.fabric.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q)
    );

    searchResultsList.innerHTML = '';

    if (matches.length === 0) {
      searchResultsList.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No matching garments found.</div>`;
      return;
    }

    matches.forEach(p => {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `
        <img class="search-thumb" src="${p.colorways[0].mainImg}" alt="${p.name}">
        <div style="flex: 1;">
          <div style="font-size: 0.88rem; font-weight: 600;">${escapeHtml(p.name)}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(p.fabric)}</div>
        </div>
        <div style="font-family: var(--font-serif); font-weight: 600;">₹${p.price.toLocaleString('en-IN')}</div>
      `;
      item.addEventListener('click', () => {
        addItemToBag(p.id);
        closeSearchModal();
      });
      searchResultsList.appendChild(item);
    });
  }

  // =========================================================================
  // 6. EVENT LISTENERS
  // =========================================================================

  // Category Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.activeCategory = tab.getAttribute('data-category');
      renderProductGrid();
    });
  });

  // Product Grid Delegation (Swatches & Quick Add)
  if (productsGrid) {
    productsGrid.addEventListener('click', (e) => {
      const swatch = e.target.closest('.swatch-dot');
      if (swatch) {
        const prodId = swatch.getAttribute('data-product-id');
        const colorIdx = parseInt(swatch.getAttribute('data-color-idx'), 10);
        handleSwatchSelect(prodId, colorIdx);
        return;
      }

      const addBtn = e.target.closest('.quick-add-btn');
      if (addBtn) {
        const prodId = addBtn.getAttribute('data-add-id');
        addItemToBag(prodId);
      }
    });
  }

  // Bag Drawer
  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openBagDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeBagDrawer);
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === cartDrawerBackdrop) closeBagDrawer();
    });
  }

  if (cartItemsList) {
    cartItemsList.addEventListener('click', (e) => {
      const qtyBtn = e.target.closest('.qty-btn');
      if (qtyBtn) {
        const cartId = qtyBtn.getAttribute('data-cart-id');
        const action = qtyBtn.getAttribute('data-action');
        updateBagQty(cartId, action === 'inc' ? 1 : -1);
      }
    });
  }

  if (checkoutDemoBtn) {
    checkoutDemoBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      alert(`✦ LOOM ATELIER CHECKOUT\n\nOrder payload verified: ${state.cart.length} piece(s).\nThank you for choosing conscious craftsmanship.`);
    });
  }

  // Search
  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearchModal);
  if (searchCloseKbd) searchCloseKbd.addEventListener('click', closeSearchModal);
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', renderSearchMatches);
  }

  // Mobile Menu
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !expanded);
      mobileDrawer.classList.toggle('active');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('active');
      });
    });
  }

  if (mobileBagTrigger) {
    mobileBagTrigger.addEventListener('click', () => {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer?.classList.remove('active');
      openBagDrawer();
    });
  }

  // Easter Egg Dismiss
  if (atelierDismissBtn && atelierBanner) {
    atelierDismissBtn.addEventListener('click', () => {
      atelierBanner.classList.remove('active');
    });
  }

  // =========================================================================
  // 7. EASTER EGG & KEYBOARD SHORTCUTS
  // =========================================================================

  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let konamiIdx = 0;

  function handleKonami(key) {
    if (key.toLowerCase() === konamiSequence[konamiIdx].toLowerCase()) {
      konamiIdx++;
      if (konamiIdx === konamiSequence.length) {
        if (atelierBanner) {
          atelierBanner.classList.add('active');
          atelierBanner.setAttribute('aria-hidden', 'false');
        }
        konamiIdx = 0;
      }
    } else {
      konamiIdx = 0;
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKonami(e.key);

    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);

    if (e.key === '/' && !isTyping) {
      e.preventDefault();
      openSearchModal();
      return;
    }

    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (state.searchOpen) closeSearchModal();
      else openSearchModal();
      return;
    }

    if (e.key === 'Escape') {
      if (state.searchOpen) { closeSearchModal(); return; }
      if (cartDrawerBackdrop?.classList.contains('active')) { closeBagDrawer(); return; }
      if (isTyping) { document.activeElement.blur(); return; }
    }
  });

  // =========================================================================
  // 8. THEME MANAGEMENT (REAL ALL-OR-NOTHING DARK MODE)
  // =========================================================================

  function initTheme() {
    const savedTheme = localStorage.getItem('loom-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('loom-theme', isDark ? 'dark' : 'light');
    });
  }

  // =========================================================================
  // 9. UTILS & INITIALIZATION
  // =========================================================================

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  // Bootstrap
  initTheme();
  renderProductGrid();
  renderBag();

})();
