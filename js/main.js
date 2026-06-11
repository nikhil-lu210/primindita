/**
 * Primindita - Main Site Controller (Bilingual & Shared Shell Injection)
 * Dynamically injects Navigation, Footer, and Cart Drawers.
 * Manages English-Bengali toggles and coordinates layout interactions.
 */

(function () {
    // Translation dictionary for all globally injected UI components
    const TRANSLATIONS = {
        en: {
            navHome: "Home",
            navShop: "Shop",
            navLookbook: "Lookbook",
            navAbout: "About Her",
            navLangBtn: "বাংলা",
            cartTitle: "Your Shopping Bag",
            cartClose: "Close",
            cartSubtotalLabel: "Subtotal:",
            cartCheckoutBtn: "Proceed to Checkout",
            footerDesc: "Artisanal boutique celebrating the timeless beauty of pure Bengali handlooms and exquisite antique jewelry. Curated and modeled exclusively by women for women.",
            footerQuickLinks: "Quick Collections",
            footerContact: "Stay Connected",
            newsletterTitle: "Join Our Inner Circle",
            newsletterDesc: "Subscribe to receive early announcements, lookbook releases, and exclusive design drops.",
            newsletterPlaceholder: "Enter your email address...",
            newsletterBtn: "Subscribe",
            subscribeSuccess: "Thank you for subscribing! Welcome to the Primindita family.",
            whatsappInquiry: "Direct WhatsApp Line",
            allRights: "All Rights Reserved."
        },
        bn: {
            navHome: "প্রচ্ছদ",
            navShop: "সংগ্রহশালা",
            navLookbook: "চিত্রাবলী",
            navAbout: "তার গল্প",
            navLangBtn: "English",
            cartTitle: "আপনার শপিং থলি",
            cartClose: "বন্ধ করুন",
            cartSubtotalLabel: "সর্বমোট পরিমাণ:",
            cartCheckoutBtn: "অর্ডার সম্পন্ন করুন",
            footerDesc: "ঐতিহ্যবাহী ঢাকাই বুনন ও প্রাচীন বাঙালি গহনার এক অপরূপ মেলবন্ধন। একজন উদ্যোক্তা নারীর হাত ধরে নারীদের জন্যই সাজানো শৈল্পিক বুটিক হাউস।",
            footerQuickLinks: "চটজলদি লিংক",
            footerContact: "যোগাযোগ মাধ্যম",
            newsletterTitle: "আমাদের পরিবারের অংশ হোন",
            newsletterDesc: "নতুন ডিজাইন রিলিজ, এক্সক্লুসিভ অফার এবং বিশেষ আয়োজনের আপডেট সবার আগে পেতে সাবস্ক্রাইব করুন।",
            newsletterPlaceholder: "আপনার ইমেইল এড্রেসটি লিখুন...",
            newsletterBtn: "নিবন্ধন করুন",
            subscribeSuccess: "ধন্যবাদ! প্রিমিন্দীতা পরিবারে আপনাকে স্বাগত জানাচ্ছি।",
            whatsappInquiry: "সরাসরি হোয়াটসঅ্যআপ ইনকোয়ারি",
            allRights: "সর্বস্বত্ব সংরক্ষিত।"
        }
    };


    /**
     * Generates HTML layout for the common Header
     * @param {string} lang - Selected language code ('bn' | 'en')
     * @returns {string} Navigation Header HTML
     */
    function getHeaderTemplate(lang) {
        const isBn = lang === "bn";
        const t = TRANSLATIONS[lang];

        return `
        <nav class="bg-[#FDFBF7] border-b border-[#EADCC9] sticky top-0 z-40 transition-all duration-300">
            <!-- Decorative Top Alpana Ribbon -->
            <div class="alpana-border-top w-full"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20 items-center">
                    <!-- Brand Identity Section -->
                    <div class="flex items-center">
                        <a href="index.html" class="flex items-center gap-3">
                            <img src="logo.png" alt="Primindita Logo" class="h-14 w-auto transform transition-transform hover:scale-105" onerror="this.src='logo_with_bg.png'">
                            <span class="hidden sm:block font-editorial text-2xl text-charcoal font-semibold tracking-wide">
                                <span class="text-crimson">P</span>rimindita
                            </span>
                        </a>
                    </div>

                    <!-- Desktop Navigation Menu -->
                    <div class="hidden md:flex items-center gap-8">
                        <a href="index.html" class="font-bn font-ui text-sm font-medium text-charcoal hover:text-crimson transition-colors relative boutique-btn py-1">${t.navHome}</a>
                        <a href="shop.html" class="font-bn font-ui text-sm font-medium text-charcoal hover:text-crimson transition-colors relative boutique-btn py-1">${t.navShop}</a>
                        <a href="lookbook.html" class="font-bn font-ui text-sm font-medium text-charcoal hover:text-crimson transition-colors relative boutique-btn py-1">${t.navLookbook}</a>
                        <a href="about.html" class="font-bn font-ui text-sm font-medium text-charcoal hover:text-crimson transition-colors relative boutique-btn py-1">${t.navAbout}</a>
                    </div>

                    <!-- Action Utilities (Language, Cart, Mobile Drawer Toggle) -->
                    <div class="flex items-center gap-4">
                        <!-- Bilingual Language Switcher -->
                        <button id="lang-toggle-btn" onclick="window.toggleLanguage()" class="px-3 py-1.5 border border-[#A31D1D] rounded text-xs font-semibold text-crimson hover:bg-[#A31D1D] hover:text-[#FDFBF7] transition-all duration-300 font-bn">
                            ${t.navLangBtn}
                        </button>

                        <!-- Cart Button Trigger -->
                        <button onclick="window.Cart.openCartDrawer()" class="relative p-2 text-charcoal hover:text-crimson transition-colors duration-200">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <!-- Reactive Quantity Badge -->
                            <span id="nav-cart-badge" class="absolute -top-1 -right-1 bg-crimson text-[#FDFBF7] rounded-full text-[10px] w-5 h-5 flex items-center justify-center font-bold font-bn shadow-md hidden">
                                ০
                            </span>
                        </button>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-trigger" class="md:hidden p-2 text-charcoal hover:text-crimson transition-colors">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Navigation Sidebar Overlay -->
            <div id="mobile-sidebar" class="fixed inset-y-0 right-0 w-64 bg-[#FDFBF7] border-l border-[#EADCC9] shadow-2xl z-50 transform translate-x-full transition-transform duration-300 md:hidden">
                <div class="flex items-center justify-between p-4 border-b border-[#EADCC9]">
                    <img src="logo.png" alt="Primindita" class="h-10 w-auto">
                    <button id="mobile-sidebar-close" class="p-1.5 text-gray-400 hover:text-crimson">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col gap-4 p-6">
                    <a href="index.html" class="font-bn font-ui text-lg font-semibold text-charcoal hover:text-crimson py-2 border-b border-gray-100">${t.navHome}</a>
                    <a href="shop.html" class="font-bn font-ui text-lg font-semibold text-charcoal hover:text-crimson py-2 border-b border-gray-100">${t.navShop}</a>
                    <a href="lookbook.html" class="font-bn font-ui text-lg font-semibold text-charcoal hover:text-crimson py-2 border-b border-gray-100">${t.navLookbook}</a>
                    <a href="about.html" class="font-bn font-ui text-lg font-semibold text-charcoal hover:text-crimson py-2 border-b border-gray-100">${t.navAbout}</a>
                </div>
            </div>
        </nav>
        `;
    }

    /**
     * Generates HTML layout for the common Footer
     * @param {string} lang - Selected language code ('bn' | 'en')
     * @returns {string} Layout Footer HTML
     */
    function getFooterTemplate(lang) {
        const isBn = lang === "bn";
        const t = TRANSLATIONS[lang];

        return `
        <footer class="bg-white border-t border-[#EADCC9] relative mt-20">
            <!-- Ornamental Border Header -->
            <div class="alpana-border-bottom w-full"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <!-- Brand Intro -->
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-3">
                            <img src="logo.png" alt="Primindita" class="h-16 w-auto">
                            <span class="font-editorial text-2xl font-bold text-charcoal">
                                <span class="text-crimson">প্রিমিন্দীতা</span>
                            </span>
                        </div>
                        <p class="text-sm text-gray-500 font-bn leading-relaxed">
                            ${t.footerDesc}
                        </p>
                    </div>

                    <!-- Collections quick links -->
                    <div>
                        <h4 class="font-editorial text-lg font-bold text-charcoal mb-4 relative pb-2 border-b border-gray-100">
                            ${t.footerQuickLinks}
                        </h4>
                        <div class="flex flex-col gap-2 font-bn text-sm text-gray-500">
                            <a href="shop.html?category=clothing" class="hover:text-crimson transition-colors">${isBn ? "ঐতিহ্যবাহী ঢাকাই শাড়ি" : "Exquisite Sarees Collection"}</a>
                            <a href="shop.html?category=jewelry" class="hover:text-crimson transition-colors">${isBn ? "প্রিমিয়াম অ্যান্টিক গহনা" : "Antique Bridal Jewelry"}</a>
                            <a href="lookbook.html" class="hover:text-crimson transition-colors">${isBn ? "মিউজিয়াম ইন্টারেক্টিভ লুকবুক" : "Artistic Hotspot Lookbook"}</a>
                            <a href="about.html" class="hover:text-crimson transition-colors">${isBn ? "আমাদের ডিজাইনার পরিচিতি" : "Our Solo Model Story"}</a>
                        </div>
                    </div>

                    <!-- Newsletter Form & Social Links -->
                    <div>
                        <h4 class="font-editorial text-lg font-bold text-charcoal mb-4 relative pb-2 border-b border-gray-100">
                            ${t.newsletterTitle}
                        </h4>
                        <p class="text-xs text-gray-500 mb-4 font-bn">${t.newsletterDesc}</p>
                        
                        <!-- Mini Newsletter Block -->
                        <form id="newsletter-form" onsubmit="window.submitNewsletter(event)" class="flex border border-gray-200 rounded overflow-hidden shadow-sm mb-6">
                            <input type="email" required placeholder="${t.newsletterPlaceholder}" class="px-3 py-2 text-xs w-full focus:outline-none bg-[#FDFBF7]">
                            <button type="submit" class="bg-crimson text-white px-4 py-2 text-xs font-semibold hover:bg-[#801414] transition-colors font-bn">
                                ${t.newsletterBtn}
                            </button>
                        </form>

                        <div class="flex items-center gap-4">
                            <!-- Direct WhatsApp CTA Button -->
                            <a href="https://wa.me/8801700000000" target="_blank" class="flex items-center gap-2 px-3 py-1.5 bg-[#25D366] text-white text-xs font-bold rounded shadow hover:bg-[#20ba5a] transition-all">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.912 9.912 0 0 0 4.773 1.218h.004c5.505 0 9.988-4.478 9.989-9.984A9.985 9.985 0 0 0 12.012 2zm5.82 14.123c-.253.715-1.47 1.302-2.022 1.39-.49.077-.96.28-3.11-.6-2.583-1.057-4.218-3.692-4.347-3.864-.128-.173-1.042-1.39-1.042-2.651 0-1.261.643-1.88.872-2.126.229-.246.5-.308.667-.308h.478c.153 0 .358-.057.561.441.204.498.715 1.743.777 1.868.062.125.104.27.021.436-.083.167-.125.27-.25.416-.125.146-.263.327-.375.44-.125.125-.255.26-.11.51.146.25.648 1.071 1.39 1.733.957.854 1.761 1.118 2.011 1.243.25.125.395.104.54-.062.146-.167.623-.728.791-.977.167-.25.333-.208.562-.125.229.083 1.453.685 1.702.81.25.125.416.187.478.29.062.104.062.603-.191 1.319z"/>
                                </svg>
                                <span class="font-bn">${t.whatsappInquiry}</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p class="font-bn">© 2026 <span class="text-crimson font-semibold">প্রিমিন্দীতা (Primindita)</span>. ${t.allRights}</p>
                    <p class="font-ui">Handcrafted with Love for Bengali Traditions</p>
                </div>
            </div>
            <!-- Bottom Alpana ribbon -->
            <div class="alpana-border-bottom w-full opacity-50 absolute bottom-0 left-0"></div>
        </footer>
        `;
    }

    /**
     * Generates HTML layout for the slide-over Cart Drawer
     * @param {string} lang - Selected language code ('bn' | 'en')
     * @returns {string} Dynamic Cart Drawer container shell HTML
     */
    function getCartDrawerTemplate(lang) {
        const isBn = lang === "bn";
        const t = TRANSLATIONS[lang];

        return `
        <!-- Dark Background Backdrop Overlay -->
        <div id="cart-overlay" onclick="window.Cart.closeCartDrawer()" class="fixed inset-0 bg-black opacity-0 hidden transition-opacity duration-300 z-50"></div>
        
        <!-- Sliding Panel Drawer Container -->
        <div id="cart-drawer" class="fixed inset-y-0 right-0 max-w-md w-full bg-[#FDFBF7] border-l border-[#EADCC9] shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col">
            <!-- Header Block -->
            <div class="p-6 border-b border-gray-100 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <svg class="w-6 h-6 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h3 class="font-editorial text-lg font-semibold text-charcoal">
                        ${t.cartTitle} <span id="cart-count-badge" class="font-bn text-sm text-crimson font-medium">(০)</span>
                    </h3>
                </div>
                <button onclick="window.Cart.closeCartDrawer()" class="text-xs text-gray-400 hover:text-crimson font-medium font-bn flex items-center gap-1 transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ${t.cartClose}
                </button>
            </div>

            <!-- Scrollable Items Area -->
            <div id="cart-items-container" class="flex-1 overflow-y-auto px-6 divide-y divide-gray-100">
                <!-- Injected via cart.js -->
            </div>

            <!-- Footer Summary Controls -->
            <div class="p-6 border-t border-gray-100 bg-[#FAF4E8]">
                <div class="flex justify-between items-center mb-6">
                    <span class="text-sm text-gray-500 font-bn font-medium">${t.cartSubtotalLabel}</span>
                    <span id="cart-subtotal" class="text-lg font-bold text-crimson font-bn">৳ ০</span>
                </div>
                
                <a href="checkout.html" id="cart-checkout-btn" class="block w-full text-center py-3 bg-crimson text-[#FDFBF7] rounded font-semibold text-sm hover:bg-[#801414] shadow transition-colors font-bn duration-300">
                    ${t.cartCheckoutBtn}
                </a>
            </div>
        </div>
        `;
    }


    /**
     * Finds placeholder placeholders on the DOM and injects dynamic layout shells
     */
    function injectLayoutComponents() {
        const lang = localStorage.getItem("primindita_lang") || "bn";

        // Navigation Header
        const headerPlaceholder = document.getElementById("header-placeholder");
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = getHeaderTemplate(lang);
            setupHeaderListeners();
        }

        // Sidebar Cart Drawer Container
        const cartPlaceholder = document.getElementById("cart-drawer-placeholder");
        if (cartPlaceholder) {
            cartPlaceholder.innerHTML = getCartDrawerTemplate(lang);
        }

        // Footer Section
        const footerPlaceholder = document.getElementById("footer-placeholder");
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = getFooterTemplate(lang);
        }
    }


    /**
     * Scans the document for element containing bilingual 'data-en' and 'data-bn'
     * attributes, and dynamically updates their content instantly.
     * @param {string} lang - Selected language code ('bn' | 'en')
     */
    function translateDOMText(lang) {
        const elements = document.querySelectorAll("[data-en], [data-bn]");
        elements.forEach(el => {
            const translation = lang === "bn" ? el.getAttribute("data-bn") : el.getAttribute("data-en");
            if (translation) {
                // If the element is an input with a placeholder attribute, translate the placeholder
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    if (el.hasAttribute("placeholder")) {
                        el.setAttribute("placeholder", translation);
                    }
                } else {
                    el.textContent = translation;
                }
            }
        });
    }

    /**
     * Swaps translation state between English and Bengali globally.
     */
    window.toggleLanguage = function () {
        const currentLang = localStorage.getItem("primindita_lang") || "bn";
        const nextLang = currentLang === "bn" ? "en" : "bn";

        // Save new state
        localStorage.setItem("primindita_lang", nextLang);

        // Re-inject layout containers with new static variables
        injectLayoutComponents();

        // Scan the local DOM page for tags to translate
        translateDOMText(nextLang);

        // Reactively trigger Cart Drawer translation updates
        if (window.Cart && typeof window.Cart.renderCartDrawer === "function") {
            window.Cart.renderCartDrawer();
        }

        // Trigger custom page event for other modules
        window.dispatchEvent(new CustomEvent("priminditaLangUpdated", { detail: nextLang }));
    };


    /**
     * Initializes listeners for responsive drawer slide-overs
     */
    function setupHeaderListeners() {
        const trigger = document.getElementById("mobile-menu-trigger");
        const closeBtn = document.getElementById("mobile-sidebar-close");
        const sidebar = document.getElementById("mobile-sidebar");

        if (trigger && sidebar) {
            trigger.addEventListener("click", () => {
                sidebar.classList.remove("translate-x-full");
            });
        }

        if (closeBtn && sidebar) {
            closeBtn.addEventListener("click", () => {
                sidebar.classList.add("translate-x-full");
            });
        }
    }

    /**
     * Processes newsletter email submissions
     * @param {Event} event - Form submission callback
     */
    window.submitNewsletter = function (event) {
        event.preventDefault();
        const currentLang = localStorage.getItem("primindita_lang") || "bn";
        const t = TRANSLATIONS[currentLang];

        // Show success alert
        alert(t.subscribeSuccess);
        event.target.reset();
    };

    // On DOM ready, execute injections
    window.addEventListener("DOMContentLoaded", () => {
        injectLayoutComponents();
        const initialLang = localStorage.getItem("primindita_lang") || "bn";
        translateDOMText(initialLang);
    });
})();