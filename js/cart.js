/**
 * Primindita - Shopping Cart & Drawer Manager
 * Manages localStorage synchronization and dynamically updates the sliding Cart Drawer.
 * Dispatches global custom events for seamless reactive UI updates.
 */

(function () {
    // Local storage key
    const CART_STORAGE_KEY = "primindita_cart";

    // Initialize global cart state manager on window object
    window.Cart = {
        /**
         * Retrieves the current cart from local storage
         * @returns {Array} Array of cart items { id, qty }
         */
        getCart: function () {
            try {
                const stored = localStorage.getItem(CART_STORAGE_KEY);
                return stored ? JSON.parse(stored) : [];
            } catch (e) {
                console.error("Failed to parse cart storage", e);
                return [];
            }
        },

        /**
         * Persists cart state and triggers global synchronization event
         * @param {Array} cart - Cart item array
         */
        saveCart: function (cart) {
            try {
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
                // Dispatch event so layout elements (navbar badge, etc.) update reactively
                window.dispatchEvent(new CustomEvent("priminditaCartUpdated", { detail: cart }));
                this.renderCartDrawer();
            } catch (e) {
                console.error("Failed to save cart state", e);
            }
        },

        /**
         * Adds an item to the cart or increments its quantity
         * @param {string} id - Product ID
         * @param {number} qty - Quantity to add
         */
        addToCart: function (id, qty = 1) {
            // Find product first to verify existence
            const product = window.products ? window.products.find(p => p.id === id) : null;
            if (!product) {
                console.error("Product not found in database: ", id);
                return;
            }

            let cart = this.getCart();
            const existingIndex = cart.findIndex(item => item.id === id);

            if (existingIndex > -1) {
                cart[existingIndex].qty += qty;
            } else {
                cart.push({ id, qty });
            }

            this.saveCart(cart);
            this.openCartDrawer();
        },

        /**
         * Removes an item entirely from the cart
         * @param {string} id - Product ID
         */
        removeFromCart: function (id) {
            let cart = this.getCart();
            cart = cart.filter(item => item.id !== id);
            this.saveCart(cart);
        },

        /**
         * Increments or decrements item quantity
         * @param {string} id - Product ID
         * @param {number} change - Positive or negative amount
         */
        updateCartQty: function (id, change) {
            let cart = this.getCart();
            const index = cart.findIndex(item => item.id === id);

            if (index > -1) {
                cart[index].qty += change;
                if (cart[index].qty <= 0) {
                    cart.splice(index, 1);
                }
                this.saveCart(cart);
            }
        },

        /**
         * Computes total item count
         * @returns {number} Sum of all product quantities
         */
        getCartCount: function () {
            return this.getCart().reduce((acc, item) => acc + item.qty, 0);
        },

        /**
         * Computes subtotal of current cart
         * @returns {number} Combined price value
         */
        getCartTotal: function () {
            const cart = this.getCart();
            if (!window.products) return 0;
            return cart.reduce((acc, cartItem) => {
                const product = window.products.find(p => p.id === cartItem.id);
                return acc + (product ? product.price * cartItem.qty : 0);
            }, 0);
        },

        /**
         * Wipes the cart storage
         */
        clearCart: function () {
            this.saveCart([]);
        },

        /**
         * Helper to convert numbers to beautiful Bengali digits if BN is active
         * @param {number|string} num - Value to format
         * @returns {string} Formatted number
         */
        formatNumber: function (num) {
            const isBn = (localStorage.getItem("primindita_lang") || "bn") === "bn";
            const numStr = String(num);
            if (!isBn) return numStr;

            const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
            return numStr.replace(/[0-9]/g, digit => bnDigits[parseInt(digit)]);
        },

        /**
         * Helper to format values as currency representations
         * @param {number} amount - Numerical value
         * @returns {string} Formatted currency text
         */
        formatCurrency: function (amount) {
            const isBn = (localStorage.getItem("primindita_lang") || "bn") === "bn";
            const formattedVal = this.formatNumber(amount.toLocaleString('en-IN'));
            return isBn ? `৳ ${formattedVal}` : `BDT ${formattedVal}`;
        },

        /**
         * Opens the Cart Slider Drawer
         */
        openCartDrawer: function () {
            const drawer = document.getElementById("cart-drawer");
            const overlay = document.getElementById("cart-overlay");
            if (drawer && overlay) {
                drawer.classList.remove("translate-x-full");
                overlay.classList.remove("hidden", "opacity-0");
                overlay.classList.add("opacity-50");
                document.body.classList.add("overflow-hidden");
            }
        },

        /**
         * Closes the Cart Slider Drawer
         */
        closeCartDrawer: function () {
            const drawer = document.getElementById("cart-drawer");
            const overlay = document.getElementById("cart-overlay");
            if (drawer && overlay) {
                drawer.classList.add("translate-x-full");
                overlay.classList.remove("opacity-50");
                overlay.classList.add("opacity-0");
                setTimeout(() => {
                    overlay.classList.add("hidden");
                }, 300);
                document.body.classList.remove("overflow-hidden");
            }
        },

        /**
         * Dynamically draws HTML content inside the global Cart Slider container
         */
        renderCartDrawer: function () {
            const container = document.getElementById("cart-items-container");
            const checkoutBtn = document.getElementById("cart-checkout-btn");
            const countBadge = document.getElementById("cart-count-badge");
            const navbarCountBadge = document.getElementById("nav-cart-badge");
            const subtotalEl = document.getElementById("cart-subtotal");

            if (!container) return;

            const cart = this.getCart();
            const lang = localStorage.getItem("primindita_lang") || "bn";
            const isBn = lang === "bn";

            // Update numerical notification badges
            const totalCount = this.getCartCount();
            const formattedCount = this.formatNumber(totalCount);

            if (countBadge) countBadge.textContent = `(${formattedCount})`;
            if (navbarCountBadge) {
                navbarCountBadge.textContent = formattedCount;
                if (totalCount > 0) {
                    navbarCountBadge.classList.remove("hidden");
                } else {
                    navbarCountBadge.classList.add("hidden");
                }
            }

            // Calculate & render subtotal
            const subtotal = this.getCartTotal();
            if (subtotalEl) {
                subtotalEl.textContent = this.formatCurrency(subtotal);
            }

            // Set state for checkout link
            if (checkoutBtn) {
                if (cart.length === 0) {
                    checkoutBtn.setAttribute("disabled", "true");
                    checkoutBtn.classList.add("opacity-50", "pointer-events-none");
                } else {
                    checkoutBtn.removeAttribute("disabled");
                    checkoutBtn.classList.remove("opacity-50", "pointer-events-none");
                }
            }

            // Empty cart placeholder template
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-64 text-center px-4">
                        <svg class="w-16 h-16 text-gray-300 mb-4 animate-float-lotus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <p class="font-bn font-medium text-lg text-charcoal mb-1">
                            ${isBn ? "আপনার থলিটি শূন্য!" : "Your bag is empty!"}
                        </p>
                        <p class="font-ui text-sm text-gray-400">
                            ${isBn ? "ঐতিহ্যের খোঁজে কেনাকাটা শুরু করুন।" : "Start exploring our artisanal collections."}
                        </p>
                    </div>
                `;
                return;
            }

            // Render active cart entries
            let htmlContent = "";
            cart.forEach(cartItem => {
                const product = window.products ? window.products.find(p => p.id === cartItem.id) : null;
                if (!product) return;

                const title = isBn ? product.titleBn : product.titleEn;
                const price = product.price;
                const formattedPrice = this.formatCurrency(price);
                const itemTotal = this.formatCurrency(price * cartItem.qty);

                htmlContent += `
                    <div class="flex items-center gap-4 py-4 border-b border-gray-100">
                        <!-- Small Mini SVG Frame -->
                        <div class="w-16 h-16 bg-cream-dark border border-[#EADCC9] rounded p-1 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                            ${product.svgMarkup}
                        </div>
                        
                        <!-- Details Content -->
                        <div class="flex-1 min-w-0">
                            <h4 class="${isBn ? 'font-bn text-sm' : 'font-ui text-xs'} font-semibold text-charcoal truncate mb-1">
                                ${title}
                            </h4>
                            <p class="text-xs text-crimson font-medium mb-2">${formattedPrice}</p>
                            
                            <!-- Counter & Delete Buttons -->
                            <div class="flex items-center justify-between">
                                <div class="flex items-center border border-gray-200 rounded">
                                    <button onclick="window.Cart.updateCartQty('${product.id}', -1)" class="px-2 py-0.5 text-gray-500 hover:text-crimson font-bold text-sm transition-colors">-</button>
                                    <span class="px-2 text-xs font-semibold text-charcoal select-none">${this.formatNumber(cartItem.qty)}</span>
                                    <button onclick="window.Cart.updateCartQty('${product.id}', 1)" class="px-2 py-0.5 text-gray-500 hover:text-crimson font-bold text-sm transition-colors">+</button>
                                </div>
                                
                                <button onclick="window.Cart.removeFromCart('${product.id}')" class="text-xs text-gray-400 hover:text-crimson font-medium flex items-center gap-0.5 transition-colors">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    ${isBn ? "বাদ দিন" : "Remove"}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = htmlContent;
        }
    };

    // Attach global window handlers so the DOM triggers them easily
    window.addEventListener("DOMContentLoaded", () => {
        window.Cart.renderCartDrawer();
    });
})();