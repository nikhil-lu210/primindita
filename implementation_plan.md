# Implementation Plan - Primindita Multi-Page E-Commerce Website

We will design and implement a beautiful, illustration-based multi-page e-commerce website for the pure Bengali brand **প্রিমিন্দীতা (Primindita)**. The website will be built using HTML, CSS (Tailwind CSS via CDN), and JS.

## User Review Required

> [!NOTE]
> **Architecture & State Management**:
> To build a clean, maintainable multi-page static site, we propose a modular approach:
> 1. **Shared JavaScript Modules**: Store data and state globally in `js/products.js` (centralized product catalog) and `js/cart.js` (`localStorage` state manager for persistent shopping cart).
> 2. **Dynamic Shell Rendering**: Pages will have placeholders for common components (Navigation Header, Footer, and Cart Drawer), which will be rendered by `js/main.js` on load. This prevents template code duplication while allowing custom title and meta tags on each page for SEO.
> 3. **Bilingual Support (Bengali & English)**: We will include a language toggle in the navbar that dynamically updates all UI text across pages based on a simple translation dictionary in Javascript, defaulting to Bengali.

## Proposed Changes

We will create a clean and structured directory layout:
- `index.html` - Home Page
- `about.html` - Brand story and solo modeling showcase
- `shop.html` - Product collection grid with filters, search, and sorting
- `lookbook.html` - Interactive model-wear SVG lookbook with hotspots
- `product.html` - Dynamic product details page using `?id=X` query
- `checkout.html` - Checkout form and WhatsApp ordering helper
- `css/style.css` - Custom styles and animations (e.g. alpana, pulsating hotspots, boutique transitions)
- `js/products.js` - Shared product database
- `js/cart.js` - Shared shopping cart state management
- `js/main.js` - Shared layout injection, language toggling, and navbar interactive logic

---

### Shared CSS & Styling

#### [NEW] [style.css](file:///c:/laragon/www/primindita/css/style.css)
Will contain:
- Hand-drawn/illustration aesthetic variables (curated palette: Bengal Crimson, Cream, Gold, Charcoal).
- Custom font setups (Google Fonts: Hind Siliguri for Bengali, Playfair Display for editorial headings, Montserrat for English).
- Keyframe animations for hotspot pulses, floating lotus details, and alpana background rotation.
- Styling for boutique scrollbars.

---

### Core Business Logic & Data

#### [NEW] [products.js](file:///c:/laragon/www/primindita/js/products.js)
Stores the product database to avoid duplication. It will export/declare a global `products` array containing:
- Product details (id, title BN/EN, price, description BN/EN, category, SVG illustration code, features list).

#### [NEW] [cart.js](file:///c:/laragon/www/primindita/js/cart.js)
Stores the cart helper methods:
- Reading/writing to `localStorage`.
- Methods: `addToCart(id, qty)`, `removeFromCart(id)`, `updateCartQty(id, change)`, `getCartTotal()`, `getCartCount()`, `clearCart()`.
- Cart drawer rendering logic.

#### [NEW] [main.js](file:///c:/laragon/www/primindita/js/main.js)
Main page controller that will:
- Inject the common Navigation Header, Footer, and Cart Drawer HTML structure.
- Initialize navbar toggles, mobile sidebar, and cart slide-in drawer.
- Support dynamic language translation between Bengali and English.
- Handle newsletter subscriptions.

---

### Pages

#### [NEW] [index.html](file:///c:/laragon/www/primindita/index.html)
- SEO Meta tags: Descriptive title and meta description.
- Hero Section: Editorial typography alongside a large beautiful SVG illustration of an elegant Bengali woman, matching the branding logo.
- Featured Section: Highlight 3 premium products with quick-view and add-to-cart buttons.
- About Teaser: Teases her story as a solo model and designer.
- Newsletter signup.

#### [NEW] [about.html](file:///c:/laragon/www/primindita/about.html)
- SEO Meta tags: Story of Primindita.
- Narrative grid: Emphasizes the "solo women entrepreneurship" where she designs the products and is the sole face/model of the brand.
- Hand-drawn SVG illustration of a traditional saree drape pose.
- Instagram/WhatsApp direct link blocks.

#### [NEW] [shop.html](file:///c:/laragon/www/primindita/shop.html)
- Interactive product gallery.
- Live search bar and filtering buttons (All, Clothing, Jewelry).
- Sort dropdown (Price: Low to High, Price: High to Low, Default).
- Detailed catalog cards with SVG illustrations.

#### [NEW] [lookbook.html](file:///c:/laragon/www/primindita/lookbook.html)
- Interactive SVG hotspot illustration of a model dressed in traditional wear.
- Hotspot buttons (1: Peacock Jhumka, 2: Dhakai Jamdani Saree, etc.) that display product cards dynamically when hovered or clicked.
- Allows direct purchase from the lookbook screen.

#### [NEW] [product.html](file:///c:/laragon/www/primindita/product.html)
- Reads product `id` from URL query parameter (`?id=X`).
- Dynamically loads illustration, descriptions (dual language), details list, and pricing.
- Provides quantity selector, "Add to Cart" button, and direct "Order via WhatsApp" button.

#### [NEW] [checkout.html](file:///c:/laragon/www/primindita/checkout.html)
- Displays full order review.
- Bilingual checkout form (Name, Phone, Address, Payment Method).
- Custom scripts to compile and generate a WhatsApp message to the seller containing the order details, total, and customer info.
- Place Order confirmation.

---

## Verification Plan

### Automated Tests
We will check for Javascript errors in the console and test routing:
- Check that `localStorage` items persist when navigating between pages.
- Ensure language translations update correctly across all pages when toggled.

### Manual Verification
- Deploy local server to view output of `index.html`, `shop.html`, `lookbook.html`, etc.
- Verify responsiveness on mobile, tablet, and desktop viewports.
- Click hotspots on `lookbook.html` and verify the correct details are shown.
- Add products, modify quantities in the cart, and proceed to checkout.
- Verify checkout generates the correct WhatsApp link.
