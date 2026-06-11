/**
 * Primindita - Central Product Database (Bilingual)
 * Contains the premium illustration-based catalog of Sarees & Traditional Jewelry.
 * Accessible globally via window.products.
 */

window.products = [
    {
        id: "saree-jamdani-01",
        category: "clothing",
        titleEn: "Dhakai Jamdani - Crimson Bloom",
        titleBn: "রাই রাজেশ্বরী ঢাকাই জামদানি",
        price: 8500,
        tagsEn: ["Best Seller", "100% Handloom"],
        tagsBn: ["সেরা বিক্রেতা", "১০০% তাঁতশিল্প"],
        descriptionEn: "Woven meticulously over months by local artisans, this exquisite Dhakai Jamdani features high-relief floral motifs in rich Bengal Crimson and Kanak Gold threads. The border displays a traditional hand-drawn alpana lattice design.",
        descriptionBn: "উন্নত মানের সুতো ও নিপুণ কারিগরি ছোঁয়ায় বোনা ঐতিহ্যবাহী ঢাকাই জামদানি শাড়ি। লাল সিঁদুর আভা ও সোনালী জরির আল্পনা নকশায় মোড়ানো আঁচল আপনাকে দিবে এক অনন্য রাজকীয় অনুভূতি।",
        featuresEn: [
            "Pure premium cotton-silk blend yarn",
            "Intricate geometric alpana motifs on the pallu",
            "Length: 5.5 meters with customized blouse piece",
            "Weight: Light and elegantly breathable"
        ],
        featuresBn: [
            "প্রিমিয়াম সুতি-সিল্ক মিশ্রিত সুতোয় তৈরি",
            "আঁচলে জ্যামিতিক আল্পনার নিখুঁত বুনন",
            "দৈর্ঘ্য: ৫.৫ মিটার (ব্লাউজ পিস সহ)",
            "ওজন: পরতে অত্যন্ত আরামদায়ক ও হালকা"
        ],
        images: [
            // Image 1: Full folded presentation
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><circle cx="160" cy="160" r="140" fill="none" stroke="#A31D1D" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/><path d="M 60 250 C 90 270, 230 270, 260 250 L 250 140 C 220 160, 100 160, 70 140 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="2"/><path d="M 50 120 C 120 70, 200 70, 270 120 L 250 240 C 180 190, 120 190, 70 240 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="2.5"/><path d="M 50 120 C 120 70, 200 70, 270 120" fill="none" stroke="#D4AF37" stroke-width="12" opacity="0.95"/><circle cx="100" cy="180" r="5" fill="#D4AF37" stroke="#2D1113" stroke-width="1"/></g></svg>`,
            // Image 2: Detailed Pallu Close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="20" y="20" width="280" height="280" fill="#A31D1D" rx="8" stroke="#2D1113" stroke-width="2"/><path d="M 20 160 L 300 160" stroke="#D4AF37" stroke-width="10"/><path d="M 20 180 L 300 180" stroke="#FAF4E8" stroke-width="2" stroke-dasharray="6 4"/><g transform="translate(160, 90) scale(1.6)"><path d="M 0 -20 C -15 -5, -15 15, 0 25 C 15 15, 15 -5, 0 -20 Z" fill="#D4AF37"/><circle cx="0" cy="2" r="3" fill="#A31D1D"/></g></g></svg>`,
            // Image 3: Traditional Alpana Border lattice design
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 10 50 Q 80 10, 150 50 T 290 50" fill="none" stroke="#A31D1D" stroke-width="8"/><path d="M 10 50 Q 80 10, 150 50 T 290 50" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="4 2"/><g transform="translate(150, 180) scale(2.2)"><circle cx="0" cy="0" r="24" fill="none" stroke="#A31D1D" stroke-width="1.5"/><path d="M -24 0 L 24 0 M 0 -24 L 0 24" stroke="#D4AF37" stroke-width="1"/><circle cx="0" cy="0" r="6" fill="#A31D1D"/></g></g></svg>`,
            // Image 4: Traditional Saree drape posture zoom
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 20)"><path d="M 160 120 C 130 140, 100 220, 120 290" fill="none" stroke="#2D1113" stroke-width="14" stroke-linecap="round"/><path d="M 170 160 C 210 185, 250 230, 255 280 C 260 330, 225 390, 185 410 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="2"/><path d="M 170 160 C 210 185, 250 230, 255 280" fill="none" stroke="#D4AF37" stroke-width="6"/></g></svg>`,
            // Image 5: Artisanal Loom representation
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="40" y="40" width="240" height="240" fill="none" stroke="#2D1113" stroke-width="4" rx="4"/><line x1="80" y1="40" x2="80" y2="280" stroke="#EADCC9" stroke-width="2"/><line x1="120" y1="40" x2="120" y2="280" stroke="#EADCC9" stroke-width="2"/><line x1="160" y1="40" x2="160" y2="280" stroke="#EADCC9" stroke-width="2"/><line x1="200" y1="40" x2="200" y2="280" stroke="#EADCC9" stroke-width="2"/><line x1="240" y1="40" x2="240" y2="280" stroke="#EADCC9" stroke-width="2"/><path d="M 30 160 L 290 160" stroke="#A31D1D" stroke-width="8"/><circle cx="160" cy="160" r="15" fill="#D4AF37"/></g></svg>`
        ],
        svgMarkup: `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><circle cx="160" cy="160" r="140" fill="none" stroke="#A31D1D" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/><circle cx="160" cy="160" r="130" fill="#FAF4E8"/><path d="M 60 250 C 90 270, 230 270, 260 250 L 250 140 C 220 160, 100 160, 70 140 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="2"/><path d="M 75 253 C 105 273, 215 273, 245 253 L 235 150 C 205 170, 115 170, 85 150 Z" fill="#801414" stroke="#2D1113" stroke-width="1" opacity="0.9"/><path d="M 50 120 C 120 70, 200 70, 270 120 L 250 240 C 180 190, 120 190, 70 240 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="2.5"/><path d="M 50 120 C 120 70, 200 70, 270 120" fill="none" stroke="#D4AF37" stroke-width="12" opacity="0.95"/><path d="M 50 120 C 120 70, 200 70, 270 120" fill="none" stroke="#FAF4E8" stroke-width="2" stroke-dasharray="3 3"/><g transform="translate(160, 140) scale(0.85)"><path d="M 0 -30 C -25 -10, -25 20, 0 35 C 25 20, 25 -10, 0 -30 Z" fill="#D4AF37" stroke="#2D1113" stroke-width="1.5"/><path d="M 0 -30 C -10 -40, -30 -30, -10 -10" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/><circle cx="0" cy="5" r="4" fill="#FAF4E8"/></g><circle cx="100" cy="180" r="5" fill="#D4AF37" stroke="#2D1113" stroke-width="1"/><circle cx="210" cy="180" r="5" fill="#D4AF37" stroke="#2D1113" stroke-width="1"/><circle cx="155" cy="210" r="5" fill="#D4AF37" stroke="#2D1113" stroke-width="1"/><circle cx="155" cy="95" r="4" fill="#D4AF37"/><g stroke="#D4AF37" stroke-width="2"><line x1="70" y1="240" x2="70" y2="255"/><circle cx="70" cy="258" r="3" fill="#D4AF37"/><line x1="120" y1="225" x2="120" y2="240"/><circle cx="120" cy="243" r="3" fill="#D4AF37"/><line x1="170" y1="225" x2="170" y2="240"/><circle cx="170" cy="243" r="3" fill="#D4AF37"/><line x1="220" y1="230" x2="220" y2="245"/><circle cx="220" cy="248" r="3" fill="#D4AF37"/></g></g></svg>`
    },
    {
        id: "saree-tasar-02",
        category: "clothing",
        titleEn: "Vintage Gorod - Ivory Lal-Par",
        titleBn: "গরদ সিল্ক - লালপেড়ে ক্যানভাস",
        price: 9200,
        tagsEn: ["Festive Special", "Traditional"],
        tagsBn: ["উৎসবের আমেজ", "ঐতিহ্যবাহী"],
        descriptionEn: "The signature look of the elegant Bengali woman. Made from premium mulberry silk, this classic Gorod features a smooth warm ivory canvas complemented by a striking, solid Crimson-red border lined with geometric gold patterns.",
        descriptionBn: "বাঙালিয়ানার চিরায়ত সৌন্দর্যের রূপক—লাল পেড়ে গরদ শাড়ি। খাঁটি গরদ সিল্কের বুননে তৈরি এই শাড়িটির মূল জমিন হাতির দাঁতের মতো সাদা এবং পাড়টি গাঢ় লাল ও অলংকৃত সোনালী সুতো দিয়ে সাজানো।",
        featuresEn: [
            "100% Pure Mulberry Gorod Silk",
            "High-contrast solid red border and pallu",
            "Iconic design used for traditional festivities and pujas",
            "Comes with Silk Mark validation"
        ],
        featuresBn: [
            "১০০% খাঁটি গরদ রেশম সুতোয় বোনা",
            "উজ্জ্বল বৈসাদৃশ্যময় লাল পাড় ও নিখুঁত ফিনিশিং",
            "পূজা ও বাঙালি ঐতিহ্যের সবচেয়ে কাঙ্ক্ষিত নকশা",
            "সিল্ক মার্ক অনুমোদিত মানসম্পন্ন কাপড়"
        ],
        images: [
            // Image 1: Main folded presentation
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 70 100 L 250 100 L 230 260 L 90 260 Z" fill="#FDFBF7" stroke="#2D1113" stroke-width="1.5"/><path d="M 70 100 L 95 100 L 110 260 L 90 260 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="1.5"/><path d="M 225 100 L 250 100 L 230 260 L 210 260 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="1.5"/></g></svg>`,
            // Image 2: Red border close-up with geometric gold work
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="20" y="20" width="280" height="280" fill="#FAF4E8" stroke="#2D1113" stroke-width="2"/><rect x="180" y="20" width="120" height="280" fill="#A31D1D"/><path d="M 180 40 L 160 60 L 180 80 L 160 100 L 180 120 L 160 140" fill="none" stroke="#D4AF37" stroke-width="4"/><path d="M 220 20 L 220 300" stroke="#D4AF37" stroke-width="2" stroke-dasharray="6 3"/></g></svg>`,
            // Image 3: Solid Pallu detail
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="20" y="20" width="280" height="280" fill="#A31D1D" rx="4" stroke="#2D1113" stroke-width="2"/><g transform="translate(160, 160) scale(1.8)"><circle cx="0" cy="0" r="16" fill="none" stroke="#D4AF37" stroke-width="1.5"/><path d="M 0 -16 L 0 16 M -16 0 L 16 0" stroke="#FAF4E8" stroke-width="1"/></g></g></svg>`,
            // Image 4: Model drapery presentation zoom
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(50, 20)"><path d="M 150 100 L 120 280 L 230 280 Z" fill="#FDFBF7" stroke="#2D1113" stroke-width="1.5"/><path d="M 150 100 L 120 280" stroke="#A31D1D" stroke-width="14"/><path d="M 120 280 L 230 280" stroke="#D4AF37" stroke-width="8"/></g></svg>`,
            // Image 5: Raw Silk Skein Close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 60 160 C 100 100, 220 100, 260 160 C 220 220, 100 220, 60 160 Z" fill="none" stroke="#EADCC9" stroke-width="8"/><path d="M 80 160 C 110 120, 210 120, 240 160" fill="none" stroke="#D4AF37" stroke-width="2"/><circle cx="160" cy="160" r="30" fill="none" stroke="#A31D1D" stroke-width="1.5" stroke-dasharray="4 2"/></g></svg>`
        ],
        svgMarkup: `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><circle cx="160" cy="160" r="140" fill="none" stroke="#FAF4E8" stroke-width="1"/><circle cx="160" cy="160" r="130" fill="#FFFFFF" stroke="#EADCC9" stroke-width="1.5"/><path d="M 70 100 L 250 100 L 230 260 L 90 260 Z" fill="#FDFBF7" stroke="#2D1113" stroke-width="1.5"/><path d="M 70 100 L 95 100 L 110 260 L 90 260 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="1.5"/><path d="M 225 100 L 250 100 L 230 260 L 210 260 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="1.5"/><path d="M 95 110 L 102 115 L 95 120 L 102 125 L 95 130 L 102 135 L 95 140" fill="none" stroke="#D4AF37" stroke-width="2"/><path d="M 97 180 L 104 185 L 97 190 L 104 195 L 97 200 L 104 205 L 97 210" fill="none" stroke="#D4AF37" stroke-width="2"/><path d="M 223 110 L 216 115 L 223 120 L 216 125 L 223 130 L 216 135 L 223 140" fill="none" stroke="#D4AF37" stroke-width="2"/><path d="M 221 180 L 214 185 L 221 190 L 214 195 L 221 200 L 214 205 L 221 210" fill="none" stroke="#D4AF37" stroke-width="2"/><path d="M 75 140 C 130 145, 190 145, 245 140 L 235 180 C 180 185, 130 185, 85 180 Z" fill="#A31D1D" stroke="#2D1113" stroke-width="1.5"/><line x1="82" y1="160" x2="238" y2="160" stroke="#D4AF37" stroke-width="3"/><line x1="82" y1="160" x2="238" y2="160" stroke="#FAF4E8" stroke-width="1" stroke-dasharray="2 2"/><g transform="translate(160, 210) scale(1.1) rotate(15)"><path d="M0 -15 C -15 -30, -30 -15, -15 0 Z" fill="#A31D1D" opacity="0.9"/><path d="M0 -15 C 15 -30, 30 -15, 15 0 Z" fill="#A31D1D" opacity="0.9"/><path d="M0 15 C -15 30, -30 15, -15 0 Z" fill="#A31D1D" opacity="0.9"/><path d="M0 15 C 15 30, 30 15, 15 0 Z" fill="#A31D1D" opacity="0.9"/><circle cx="0" cy="0" r="5" fill="#D4AF37"/><path d="M 0 0 Q 20 -20, 25 -30" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="-30" r="2.5" fill="#D4AF37"/></g></g></svg>`
    },
    {
        id: "saree-cotton-03",
        category: "clothing",
        titleEn: "Royal Nilambari - Indigo Alpana",
        titleBn: "নীলাম্বরী সুতি - আল্পনা নকশা",
        price: 3600,
        tagsEn: ["Casual Luxury", "Pure Cotton"],
        tagsBn: ["আরামদায়ক বিলাস", "খাঁটি সুতি"],
        descriptionEn: "A breath of heritage. Hand-dyed in authentic indigo blue, the Nilambari Saree displays dynamic block-printed traditional white alpana motifs across the body, with a rich floral pattern covering the whole drape.",
        descriptionBn: "ঐতিহ্যের এক প্রশান্ত পরশ। খাঁটি সুতি সুতোয় বোনা এবং গাঢ় নীল রঙে রঞ্জিত ‘নীলাম্বরী’। এর সারা শরীরে ব্লক-প্রিন্ট করা সাদা শঙ্খ ও আল্পনার রূপরেখা আপনাকে দেবে স্নিগ্ধ আভিজাত্য।",
        featuresEn: [
            "Premium lightweight Tangail cotton weave",
            "Artisanal indigo dye with block-printed details",
            "Superb comfort for humid tropical summers",
            "Easy care draping style"
        ],
        featuresBn: [
            "প্রিমিয়াম টাঙ্গাইল সুতি তাঁতের সুক্ষ্ম কাজ",
            "প্রাকৃতিক উপায়ে নীল রঙে রঞ্জিত শাড়ি",
            "গ্রীষ্মকালীন ব্যবহারের জন্য আরামদায়ক ও হালকা",
            "সহজে কুঁচি ও ভাঁজ ধরে রাখার উপযোগী"
        ],
        images: [
            // Image 1: Main folded indigo Saree
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 80 110 C 100 90, 220 90, 240 110 L 250 240 C 230 260, 90 260, 70 240 Z" fill="#1D2E54" stroke="#2D1113" stroke-width="2"/></g></svg>`,
            // Image 2: Handblock printed white alpana close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="20" y="20" width="280" height="280" fill="#1D2E54" rx="4" stroke="#2D1113" stroke-width="2"/><g transform="translate(160, 160) scale(1.6)"><path d="M -30 0 Q 0 -30, 30 0 T -30 0" fill="none" stroke="#FAF4E8" stroke-width="2"/><path d="M -30 10 Q 0 -20, 30 10 T -30 10" fill="none" stroke="#D4AF37" stroke-width="1.5"/></g></g></svg>`,
            // Image 3: Hemline tassels close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><line x1="20" y1="160" x2="300" y2="160" stroke="#1D2E54" stroke-width="6"/><line x1="40" y1="160" x2="40" y2="240" stroke="#D4AF37" stroke-width="3"/><line x1="100" y1="160" x2="100" y2="240" stroke="#D4AF37" stroke-width="3"/><line x1="160" y1="160" x2="160" y2="240" stroke="#D4AF37" stroke-width="3"/><line x1="220" y1="160" x2="220" y2="240" stroke="#D4AF37" stroke-width="3"/><line x1="280" y1="160" x2="280" y2="240" stroke="#D4AF37" stroke-width="3"/></g></svg>`,
            // Image 4: Drape presentation zoom
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(50, 20)"><path d="M 150 100 Q 110 240, 180 340" fill="none" stroke="#1D2E54" stroke-width="18"/><path d="M 150 100 Q 110 240, 180 340" fill="none" stroke="#FAF4E8" stroke-width="2" stroke-dasharray="6 3"/></g></svg>`,
            // Image 5: Tangail Cotton Weft representation
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="20" y="20" width="280" height="280" fill="#1D2E54" stroke="#2D1113" stroke-width="2"/><line x1="40" y1="20" x2="40" y2="300" stroke="#FAF4E8" stroke-width="1" opacity="0.3"/><line x1="80" y1="20" x2="80" y2="300" stroke="#FAF4E8" stroke-width="1" opacity="0.3"/><line x1="120" y1="20" x2="120" y2="300" stroke="#FAF4E8" stroke-width="1" opacity="0.3"/><line x1="20" y1="80" x2="300" y2="80" stroke="#FAF4E8" stroke-width="1" opacity="0.3"/><circle cx="160" cy="160" r="10" fill="#FAF4E8"/></g></svg>`
        ],
        svgMarkup: `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><circle cx="160" cy="160" r="140" fill="none" stroke="#1D2E54" stroke-width="1" stroke-dasharray="3 3" opacity="0.4"/><circle cx="160" cy="160" r="130" fill="#FCF8F2"/><path d="M 80 110 C 100 90, 220 90, 240 110 L 250 240 C 230 260, 90 260, 70 240 Z" fill="#1D2E54" stroke="#2D1113" stroke-width="2"/><path d="M 90 120 C 110 110, 210 110, 230 120" fill="none" stroke="#FAF4E8" stroke-width="4"/><path d="M 95 135 C 115 125, 205 125, 225 135" fill="none" stroke="#FAF4E8" stroke-width="2"/><path d="M 100 150 C 118 140, 202 140, 220 150" fill="none" stroke="#FAF4E8" stroke-width="1.5" stroke-dasharray="3 2"/><g transform="translate(160, 195) scale(1.3)"><circle cx="0" cy="0" r="18" fill="none" stroke="#FAF4E8" stroke-width="1.5"/><circle cx="0" cy="0" r="12" fill="none" stroke="#FAF4E8" stroke-width="1" stroke-dasharray="2 2"/><line x1="0" y1="-18" x2="0" y2="-12" stroke="#FAF4E8" stroke-width="1.5"/><line x1="0" y1="18" x2="0" y2="12" stroke="#FAF4E8" stroke-width="1.5"/><line x1="-18" y1="0" x2="-12" y2="0" stroke="#FAF4E8" stroke-width="1.5"/><line x1="18" y1="0" x2="12" y2="0" stroke="#FAF4E8" stroke-width="1.5"/><circle cx="0" cy="0" r="4" fill="#D4AF37"/></g><path d="M 70 240 C 90 260, 230 260, 250 240" fill="none" stroke="#D4AF37" stroke-width="3" stroke-linecap="round"/></g></svg>`
    },
    {
        id: "jewelry-jhumka-01",
        category: "jewelry",
        titleEn: "Mayur Kanti Jhumka - Peacock Earrings",
        titleBn: "ময়ূরকণ্ঠী ঝুমকো - রাজকীয় দুল",
        price: 4800,
        tagsEn: ["Premium Craft", "Pure Brass & Gold-Plated"],
        tagsBn: ["অনন্য কারুকাজ", "স্বর্ণালী গিল্ট ও ব্রাস"],
        descriptionEn: "Inspired by the classical royal court ornaments of ancient Bengal. These dangling chandelier Jhumkas feature sculpted twin peacocks rendered in detailed gold filigree work, finished with small crimson coral beads.",
        descriptionBn: "রাজকীয় ময়ূর নকশায় খোদাই করা অনিন্দ্য সুন্দর স্বর্ণালী ঝুমকো জোড়া। নিখুঁত ফিলিগ্রি ঝালরের কাজের সাথে নিচে দুলতে থাকা লাল ও সাদা পুঁতি আপনার আভিজাত্য বহুগুণ বাড়িয়ে তুলবে।",
        featuresEn: [
            "High-grade brass body with 22k gold microplating",
            "Intricate handmade peacock feather engraving",
            "Authentic Crimson-coral hanging beads",
            "Hypoallergenic skin-friendly ear posts"
        ],
        featuresBn: [
            "উন্নত মানের ব্রাসের উপর ২২ ক্যারেট সোনার জলছাপ",
            "হাতে খোদাই করা চমৎকার জোড়া ময়ূর নকশা",
            "নিচে ঝুলন্ত উজ্জ্বল প্রবাল পুঁতির নিখুঁত কাজ",
            "সংবেদনশীল ত্বকের জন্য সম্পূর্ণ নিরাপদ ও হালকা"
        ],
        images: [
            // Image 1: Main pair design
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 20)"><circle cx="160" cy="180" r="140" fill="none" stroke="#D4AF37" stroke-width="1" stroke-dasharray="2 4" opacity="0.3"/><circle cx="160" cy="50" r="12" fill="none" stroke="#D4AF37" stroke-width="4"/><path d="M 100 210 Q 160 160, 220 210 Z" fill="#D4AF37" stroke="#2D1113" stroke-width="2.5"/></g></svg>`,
            // Image 2: Top peacock stud detailed close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40) scale(1.4)"><circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="4 2"/><g transform="translate(100, 100) scale(1.2)"><circle cx="0" cy="0" r="18" fill="#D4AF37"/><circle cx="0" cy="0" r="10" fill="#A31D1D"/><path d="M -15 -15 Q -30 -30, -35 -10" fill="none" stroke="#D4AF37" stroke-width="3"/></g></g></svg>`,
            // Image 3: Chandelier dome intricate filigree close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 20 200 Q 160 100, 300 200 Z" fill="#D4AF37" stroke="#2D1113" stroke-width="4"/><path d="M 40 200 Q 160 130, 280 200" fill="none" stroke="#FAF4E8" stroke-width="2" stroke-dasharray="4 2"/><circle cx="160" cy="165" r="12" fill="#A31D1D"/></g></svg>`,
            // Image 4: Bottom hanging coral beads close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><line x1="80" y1="40" x2="80" y2="240" stroke="#D4AF37" stroke-width="4"/><circle cx="80" cy="240" r="12" fill="#A31D1D"/><line x1="160" y1="40" x2="160" y2="260" stroke="#D4AF37" stroke-width="4"/><circle cx="160" cy="260" r="15" fill="#FAF4E8" stroke="#D4AF37" stroke-width="2"/><line x1="240" y1="40" x2="240" y2="240" stroke="#D4AF37" stroke-width="4"/><circle cx="240" cy="240" r="12" fill="#A31D1D"/></g></svg>`,
            // Image 5: Profile perspective mockup
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 120 40 Q 60 140, 100 240" fill="none" stroke="#2D1113" stroke-width="8" stroke-linecap="round"/><g transform="translate(130, 130) scale(0.8)"><circle cx="0" cy="0" r="10" fill="#D4AF37"/><path d="M -10 15 Q 0 5, 10 15 Z" fill="#D4AF37"/><circle cx="0" cy="22" r="3" fill="#A31D1D"/></g></g></svg>`
        ],
        svgMarkup: `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 20)"><circle cx="160" cy="180" r="140" fill="none" stroke="#D4AF37" stroke-width="1" stroke-dasharray="2 4" opacity="0.3"/><circle cx="160" cy="50" r="12" fill="none" stroke="#D4AF37" stroke-width="4"/><circle cx="160" cy="50" r="4" fill="#A31D1D"/><g transform="translate(160, 85)"><circle cx="0" cy="0" r="14" fill="#D4AF37" stroke="#2D1113" stroke-width="1.5"/><circle cx="0" cy="0" r="8" fill="#A31D1D"/><circle cx="0" cy="0" r="3" fill="#D4AF37"/><circle cx="0" cy="-14" r="3" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1"/><circle cx="14" cy="0" r="3" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1"/><circle cx="0" cy="14" r="3" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1"/><circle cx="-14" cy="0" r="3" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1"/></g><g transform="translate(160, 150)"><path d="M -5 -20 Q -40 -35, -45 -5 C -45 15, -15 15, -5 20" fill="none" stroke="#D4AF37" stroke-width="4" stroke-linecap="round"/><circle cx="-35" cy="-20" r="3.5" fill="#A31D1D"/><path d="M 5 -20 Q 40 -35, 45 -5 C 45 15, 15 15, 5 20" fill="none" stroke="#D4AF37" stroke-width="4" stroke-linecap="round"/><circle cx="35" cy="-20" r="3.5" fill="#A31D1D"/></g><path d="M 100 210 Q 160 160, 220 210 Z" fill="#D4AF37" stroke="#2D1113" stroke-width="2.5"/><path d="M 115 210 Q 160 180, 205 210" fill="none" stroke="#A31D1D" stroke-width="3"/><path d="M 100 214 L 220 214" stroke="#D4AF37" stroke-width="4"/><g stroke="#2D1113" stroke-width="1.2"><line x1="110" y1="216" x2="110" y2="245" stroke="#D4AF37" stroke-width="2"/><circle cx="110" cy="245" r="4.5" fill="#A31D1D" stroke="#D4AF37" stroke-width="1"/><line x1="130" y1="216" x2="130" y2="260" stroke="#D4AF37" stroke-width="2"/><circle cx="130" cy="260" r="4.5" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1"/><circle cx="130" cy="270" r="3.5" fill="#D4AF37"/><line x1="160" y1="216" x2="160" y2="275" stroke="#D4AF37" stroke-width="2"/><circle cx="160" cy="275" r="6" fill="#A31D1D" stroke="#D4AF37" stroke-width="1.5"/><circle cx="160" cy="288" r="4" fill="#D4AF37"/><line x1="190" y1="216" x2="190" y2="260" stroke="#D4AF37" stroke-width="2"/><circle cx="190" cy="260" r="4.5" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1"/><circle cx="190" cy="270" r="3.5" fill="#D4AF37"/><line x1="210" y1="216" x2="210" y2="245" stroke="#D4AF37" stroke-width="2"/><circle cx="210" cy="245" r="4.5" fill="#A31D1D" stroke="#D4AF37" stroke-width="1"/></g></g></svg>`
    },
    {
        id: "jewelry-sitahar-02",
        category: "jewelry",
        titleEn: "Shonar Toru - Royal Choker Sitahar",
        titleBn: "সোনার তরী - রাজকীয় সীতাহার",
        price: 12500,
        tagsEn: ["Premium Heritage", "Limited Edition"],
        tagsBn: ["অভিজাত ঐতিহ্য", "সীমিত সংস্করণ"],
        descriptionEn: "A magnificent statement necklace displaying fluid leaf-motifs. Styled as a layered Sitahar that gracefully fits around the neck and cascades down the chest, using fine granular filigree and hand-cut polished crimson stones.",
        descriptionBn: "বাঙালি বধূর সবচেয়ে প্রিয় অলংকার—সীতাহার। সোনার তরীর পাতা ও লতা-পাতার নিখুঁত কারুকাজে নির্মিত এই নেকলেসটি আপনার উৎসবের সাজকে পরিপূর্ণ করে রাজকীয় গাম্ভীর্য এনে দেবে।",
        featuresEn: [
            "Traditional double-layered design with adjustable silk chord",
            "Chased leaf plates matching ancient jewelry models",
            "Embellished with deep red hand-cut ruby glass stones",
            "Heirloom finish that does not tarnish easily"
        ],
        featuresBn: [
            "দ্বি-স্তর বিশিষ্ট ঐতিহ্যবাহী রাজকীয় ঝুলন্ত চেইন",
            "আভিজাত্যময় লতা-পাতা নকশার স্বর্ণালী ফিনিশিং",
            "গাঢ় লাল রঙের রুবি কুন্দন পাথরের ব্যবহার",
            "দীর্ঘস্থায়ী উজ্জ্বল পলিশ ও উন্নত বুনন কাঠামো"
        ],
        images: [
            // Image 1: Full layered view
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 20)"><circle cx="160" cy="180" r="140" fill="none" stroke="#D4AF37" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/><path d="M 60 70 C 100 190, 220 190, 260 70" fill="none" stroke="#D4AF37" stroke-width="6"/></g></svg>`,
            // Image 2: Central Lotus Pendant Close-up
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40) scale(1.3)"><rect x="20" y="20" width="200" height="200" fill="none" stroke="#D4AF37" stroke-width="2" rx="4"/><g transform="translate(120, 120) scale(1.4)"><path d="M -30 -10 C -10 -35, 10 -35, 30 -10 L 0 30 Z" fill="#D4AF37"/><path d="M -10 -5 C -3 -15, 3 -15, 10 -5 L 0 12 Z" fill="#A31D1D"/></g></g></svg>`,
            // Image 3: Upper choker detailed links
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 20 80 Q 160 160, 300 80" fill="none" stroke="#D4AF37" stroke-width="14"/><circle cx="60" cy="94" r="5" fill="#A31D1D"/><circle cx="110" cy="112" r="5" fill="#A31D1D"/><circle cx="160" cy="118" r="5" fill="#A31D1D"/><circle cx="210" cy="112" r="5" fill="#A31D1D"/><circle cx="260" cy="94" r="5" fill="#A31D1D"/></g></svg>`,
            // Image 4: Fine granular gold filigree zoom
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><circle cx="160" cy="160" r="80" fill="none" stroke="#D4AF37" stroke-width="12"/><circle cx="160" cy="160" r="80" fill="none" stroke="#FAF4E8" stroke-width="2" stroke-dasharray="4 2"/><circle cx="160" cy="160" r="40" fill="#A31D1D"/></g></svg>`,
            // Image 5: Adjustable Silk Chord and gold tassels
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><path d="M 160 20 L 160 200" stroke="#2D1113" stroke-width="4"/><path d="M 140 200 L 140 260" stroke="#D4AF37" stroke-width="2"/><path d="M 180 200 L 180 260" stroke="#D4AF37" stroke-width="2"/><circle cx="140" cy="265" r="4" fill="#A31D1D"/><circle cx="180" cy="265" r="4" fill="#A31D1D"/></g></svg>`
        ],
        svgMarkup: `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 20)"><circle cx="160" cy="180" r="140" fill="none" stroke="#D4AF37" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/><path d="M 60 70 C 100 190, 220 190, 260 70" fill="none" stroke="#D4AF37" stroke-width="6"/><path d="M 72 70 C 110 170, 210 170, 248 70" fill="none" stroke="#FAF4E8" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M 40 70 C 90 250, 230 250, 280 70" fill="none" stroke="#D4AF37" stroke-width="4"/><path d="M 40 70 C 90 250, 230 250, 280 70" fill="none" stroke="#A31D1D" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="100" cy="125" r="5" fill="#A31D1D" stroke="#D4AF37" stroke-width="1"/><circle cx="220" cy="125" r="5" fill="#A31D1D" stroke="#D4AF37" stroke-width="1"/><circle cx="120" cy="148" r="6" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1.5"/><circle cx="200" cy="148" r="6" fill="#FAF4E8" stroke="#D4AF37" stroke-width="1.5"/><g transform="translate(160, 215)"><path d="M -35 -15 C -15 -45, 15 -45, 35 -15 L 0 35 Z" fill="#D4AF37" stroke="#2D1113" stroke-width="2"/><path d="M -15 -10 C -5 -25, 5 -25, 15 -10 L 0 15 Z" fill="#A31D1D" stroke="#D4AF37" stroke-width="1.5"/><circle cx="0" cy="-3" r="4.5" fill="#FAF4E8"/><circle cx="-25" cy="15" r="4.5" fill="#A31D1D" stroke="#D4AF37" stroke-width="1"/><circle cx="25" cy="15" r="4.5" fill="#A31D1D" stroke="#D4AF37" stroke-width="1"/><path d="M 0 35 L 0 55" stroke="#D4AF37" stroke-width="3" stroke-linecap="round"/><circle cx="0" cy="58" r="5" fill="#D4AF37"/></g><circle cx="60" cy="70" r="8" fill="#D4AF37"/><circle cx="260" cy="70" r="8" fill="#D4AF37"/></g></svg>`
    },
    {
        id: "jewelry-bala-03",
        category: "jewelry",
        titleEn: "Mayur Shankha Bala - Traditional Bangles",
        titleBn: "ময়ূর শঙ্খ বালা - খোদাই করা বালা",
        price: 3200,
        tagsEn: ["Artisanal Style", "Set of 2"],
        tagsBn: ["কারিগরি বৈচিত্র্য", "২ পিসের সেট"],
        descriptionEn: "Classic broad-faced hinged wristlets with gorgeous engraving. Depicting detailed traditional alpana waves and twin locking peacock heads aligned in full relief, these premium gold-brushed bangles add historic charm to your attire.",
        descriptionBn: "ঐতিহ্যবাহী ময়ূরমুখী নকশার অত্যন্ত রাজকীয় স্বর্ণালী বালাজোড়া। বলয় জুড়ে খোদাই করা সূক্ষ্ম কারুকার্য ও প্যাঁচানো লক ডিজাইন আধুনিক ও সাবেকিয়ানা সাজের চমৎকার মেলবন্ধন ঘটায়।",
        featuresEn: [
            "Solid brass composite core with heavy antique gold lacquer",
            "Symmetrical twin peacock locks easily adjustable",
            "Set consists of 2 highly matching hand-polished bangles",
            "Universal size with easy hinge opening"
        ],
        featuresBn: [
            "শক্ত ব্রাস কোর এবং এন্টিক গোল্ড পলিশ ফিনিশিং",
            "সুবিধাজনক ব্যবহারের জন্য দুই প্রান্তের ময়ূরমুখ লকিং ব্যবস্থা",
            "এক জোড়া নিখুঁত সমতা বজায় রাখা খোদাইকৃত কঙ্কণ",
            "সব ধরণের হাতের কবজির উপযোগী কবজা বা স্প্রিং লক"
        ],
        images: [
            // Image 1: Full bangle presentation
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><circle cx="160" cy="160" r="100" fill="none" stroke="#D4AF37" stroke-width="22"/></g></svg>`,
            // Image 2: Symmetrical twin peacock locks detail
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40) scale(1.4)"><rect x="20" y="20" width="160" height="160" fill="none" stroke="#D4AF37" stroke-width="1.5" rx="4"/><g transform="translate(80, 80)"><rect x="-10" y="-12" width="20" height="16" rx="4" fill="#A31D1D"/><path d="M -10 -6 C -25 -20, -35 0, -10 6" fill="#D4AF37" stroke="#2D1113"/><path d="M 10 -6 C 25 -20, 35 0, 10 6" fill="#D4AF37" stroke="#2D1113"/></g></g></svg>`,
            // Image 3: Engraved alpana wave filigree zoom
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="20" y="80" width="280" height="120" fill="#D4AF37" rx="8"/><path d="M 30 140 Q 95 100, 160 140 T 290 140" fill="none" stroke="#FAF4E8" stroke-width="6"/><circle cx="95" cy="115" r="5" fill="#A31D1D"/><circle cx="225" cy="115" r="5" fill="#A31D1D"/></g></svg>`,
            // Image 4: Pair side-by-side presentation
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40) scale(0.9)"><circle cx="100" cy="160" r="70" fill="none" stroke="#D4AF37" stroke-width="14"/><circle cx="220" cy="160" r="70" fill="none" stroke="#D4AF37" stroke-width="14"/></g></svg>`,
            // Image 5: Solid Brass Core representation
            `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><rect x="60" y="60" width="200" height="200" fill="none" stroke="#2D1113" stroke-width="8" rx="8"/><rect x="80" y="80" width="160" height="160" fill="none" stroke="#EADCC9" stroke-width="2"/><circle cx="160" cy="160" r="20" fill="#D4AF37"/></g></svg>`
        ],
        svgMarkup: `<svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"><rect width="100%" height="100%" fill="#FAF4E8"/><g transform="translate(40, 40)"><circle cx="160" cy="160" r="140" fill="none" stroke="#A31D1D" stroke-width="1" stroke-dasharray="2 3" opacity="0.3"/><circle cx="160" cy="160" r="100" fill="none" stroke="#2D1113" stroke-width="26"/><circle cx="160" cy="160" r="100" fill="none" stroke="#D4AF37" stroke-width="22"/><circle cx="160" cy="160" r="100" fill="none" stroke="#A31D1D" stroke-width="10" stroke-dasharray="12 12"/><circle cx="160" cy="160" r="88" fill="#FAF4E8" stroke="#2D1113" stroke-width="1.5"/><circle cx="160" cy="160" r="112" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="3 3"/><g transform="translate(160, 60)"><rect x="-10" y="-12" width="20" height="16" rx="4" fill="#A31D1D" stroke="#FAF4E8" stroke-width="1.5"/><circle cx="0" cy="-4" r="3" fill="#D4AF37"/><path d="M -10 -6 C -25 -20, -35 0, -10 6" fill="#D4AF37" stroke="#2D1113" stroke-width="1.5"/><circle cx="-22" cy="-6" r="2.5" fill="#A31D1D"/><path d="M 10 -6 C 25 -20, 35 0, 10 6" fill="#D4AF37" stroke="#2D1113" stroke-width="1.5"/><circle cx="22" cy="-6" r="2.5" fill="#A31D1D"/></g><g transform="translate(160, 260) scale(0.8)"><path d="M -50 0 Q -25 -15, 0 0 T 50 0" fill="none" stroke="#FAF4E8" stroke-width="3" stroke-linecap="round"/><circle cx="-25" cy="-8" r="3" fill="#D4AF37"/><circle cx="25" cy="-8" r="3" fill="#D4AF37"/></g></g></svg>`
    }
];