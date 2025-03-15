const allProducts = [
    // 📌 Laptops (8 Products)
    { id: 1, name: "Apple MacBook Air M2", price: "₹1,14,900", image: "laptops/01.png",
      description: "Ultra-thin MacBook powered by Apple M2 chip.",
      specifications: ["Processor: Apple M2", "RAM: 16GB", "Storage: 512GB SSD", "Battery: 18 Hours", "OS: macOS"],
      category: "laptops", similarProducts: [2, 3, 4] },

    { id: 2, name: "Dell XPS 13", price: "₹1,35,000", image: "laptops/02.png",
      description: "Premium Windows ultrabook with powerful specs.",
      specifications: ["Processor: Intel i7 13th Gen", "RAM: 16GB", "Storage: 1TB SSD", "Battery: 20 Hours", "OS: Windows 11"],
      category: "laptops", similarProducts: [1, 3, 4] },

    { id: 3, name: "HP Spectre x360", price: "₹1,25,000", image: "laptops/03.png",
      description: "Versatile convertible laptop with a premium design.",
      specifications: ["Processor: Intel i7 13th Gen", "RAM: 16GB", "Storage: 1TB SSD", "Battery: 22 Hours", "OS: Windows 11"],
      category: "laptops", similarProducts: [1, 2, 4] },

    { id: 4, name: "Asus ROG Zephyrus G14", price: "₹1,45,000", image: "laptops/04.png",
      description: "Gaming powerhouse with AMD Ryzen processor and RTX graphics.",
      specifications: ["Processor: AMD Ryzen 9", "RAM: 32GB", "Storage: 1TB SSD", "Battery: 10 Hours", "OS: Windows 11"],
      category: "laptops", similarProducts: [1, 2, 3] },

    { id: 5, name: "Lenovo ThinkPad X1 Carbon", price: "₹1,50,000", image: "laptops/05.png",
      description: "Business laptop with lightweight carbon-fiber chassis.",
      specifications: ["Processor: Intel i7 12th Gen", "RAM: 16GB", "Storage: 1TB SSD", "Battery: 24 Hours", "OS: Windows 11"],
      category: "laptops", similarProducts: [6, 7, 8] },

    { id: 6, name: "Acer Predator Helios 300", price: "₹1,20,000", image: "laptops/06.png",
      description: "Powerful gaming laptop with RGB keyboard.",
      specifications: ["Processor: Intel i9 12th Gen", "RAM: 32GB", "Storage: 1TB SSD", "Battery: 8 Hours", "OS: Windows 11"],
      category: "laptops", similarProducts: [5, 7, 8] },

    { id: 7, name: "MSI Stealth 15M", price: "₹1,40,000", image: "laptops/07.png",
      description: "Thin and light gaming laptop with high refresh rate display.",
      specifications: ["Processor: Intel i7 11th Gen", "RAM: 16GB", "Storage: 1TB SSD", "Battery: 10 Hours", "OS: Windows 11"],
      category: "laptops", similarProducts: [5, 6, 8] },

    { id: 8, name: "Samsung Galaxy Book 3", price: "₹1,10,000", image: "laptops/08.png",
      description: "Sleek Samsung laptop with AMOLED display.",
      specifications: ["Processor: Intel i5 12th Gen", "RAM: 16GB", "Storage: 512GB SSD", "Battery: 18 Hours", "OS: Windows 11"],
      category: "laptops", similarProducts: [5, 6, 7] },

    // 📌 Tablets (8 Products)
    { id: 9, name: "Apple iPad Pro M2", price: "₹1,12,900", image: "tabs/01.png",
      description: "The most powerful iPad ever with M2 chip.",
      specifications: ["Processor: Apple M2", "Display: 12.9-inch Retina XDR", "Battery: 10 Hours", "OS: iPadOS"],
      category: "tabs", similarProducts: [10, 11, 12] },

    { id: 10, name: "Samsung Galaxy Tab S9", price: "₹1,10,000", image: "tabs/02.png",
      description: "Samsung’s most advanced tablet with S-Pen support.",
      specifications: ["Processor: Snapdragon 8 Gen 2", "Display: 11-inch AMOLED", "Battery: 8000mAh", "OS: Android 14"],
      category: "tabs", similarProducts: [9, 11, 12] },

    // Add 6 more Tablets...

    // 📌 Mobiles (8 Products)
    { id: 17, name: "iPhone 15 Pro", price: "₹1,34,900", image: "mobiles/01.png",
        description: "Apple’s A17-powered flagship smartphone with pro cameras.",
        specifications: ["Processor: A17 Bionic", "Display: 6.1-inch OLED", "Battery: 3274mAh", "OS: iOS 17"],
        category: "mobiles", similarProducts: [18, 19, 20] },
  
      { id: 18, name: "Samsung Galaxy S24 Ultra", price: "₹1,29,999", image: "mobiles/02.png",
        description: "Samsung’s latest flagship with S-Pen support.",
        specifications: ["Processor: Snapdragon 8 Gen 3", "Display: 6.8-inch AMOLED", "Battery: 5000mAh", "OS: Android 14"],
        category: "mobiles", similarProducts: [17, 19, 20] },
  
      { id: 19, name: "OnePlus 12 Pro", price: "₹79,999", image: "mobiles/03.png",
        description: "OnePlus' premium smartphone with fast charging & AI features.",
        specifications: ["Processor: Snapdragon 8 Gen 3", "Display: 6.7-inch AMOLED", "Battery: 5400mAh", "OS: OxygenOS"],
        category: "mobiles", similarProducts: [17, 18, 20] },
  
      { id: 20, name: "Google Pixel 8 Pro", price: "₹1,06,999", image: "mobiles/04.png",
        description: "Google’s AI-powered smartphone with the best camera experience.",
        specifications: ["Processor: Google Tensor G3", "Display: 6.8-inch OLED", "Battery: 5050mAh", "OS: Android 14"],
        category: "mobiles", similarProducts: [17, 18, 19] },
  
      { id: 21, name: "Xiaomi 13 Ultra", price: "₹85,000", image: "mobiles/05.png",
        description: "Flagship Xiaomi phone with Leica camera and top-end specs.",
        specifications: ["Processor: Snapdragon 8 Gen 2", "Display: 6.73-inch AMOLED", "Battery: 5000mAh", "OS: MIUI 14"],
        category: "mobiles", similarProducts: [22, 23, 24] },
  
      { id: 22, name: "Realme GT Neo 5", price: "₹41,999", image: "mobiles/06.png",
        description: "Realme's flagship killer with 240W fast charging.",
        specifications: ["Processor: Snapdragon 8+ Gen 1", "Display: 6.7-inch AMOLED", "Battery: 4600mAh", "OS: Realme UI 5"],
        category: "mobiles", similarProducts: [21, 23, 24] },
  
      { id: 23, name: "Vivo X100 Pro", price: "₹89,999", image: "mobiles/07.png",
        description: "Vivo’s ultra-premium phone with ZEISS optics & gimbal camera.",
        specifications: ["Processor: MediaTek Dimensity 9300", "Display: 6.8-inch AMOLED", "Battery: 5000mAh", "OS: FuntouchOS"],
        category: "mobiles", similarProducts: [21, 22, 24] },
  
      { id: 24, name: "Nothing Phone 2", price: "₹49,999", image: "mobiles/08.png",
        description: "Unique transparent-backed phone with Glyph interface.",
        specifications: ["Processor: Snapdragon 8+ Gen 1", "Display: 6.7-inch OLED", "Battery: 4700mAh", "OS: Nothing OS"],
        category: "mobiles", similarProducts: [21, 22, 23] },
  

    // Add 6 more Mobiles...

    // 📌 Headphones (8 Products)
    { id: 25, name: "Sony WH-1000XM4", price: "₹29,990", image: "headphones/01.png",
        description: "Industry-leading noise cancellation and high-fidelity sound.",
        specifications: ["Noise Cancellation: Yes", "Battery Life: 30 Hours", "Bluetooth: 5.0", "Fast Charging: Yes"],
        category: "headphones", similarProducts: [26, 27, 28] },
  
      { id: 26, name: "Bose QuietComfort 45", price: "₹32,999", image: "headphones/02.png",
        description: "Adjustable noise-canceling headphones with deep bass.",
        specifications: ["Noise Cancellation: Adjustable", "Battery Life: 24 Hours", "Bluetooth: 5.1", "Lightweight: Yes"],
        category: "headphones", similarProducts: [25, 27, 28] },
  
      { id: 27, name: "Apple AirPods Max", price: "₹59,900", image: "headphones/03.png",
        description: "Apple's premium over-ear headphones with spatial audio.",
        specifications: ["Noise Cancellation: Active", "Battery Life: 20 Hours", "Bluetooth: Apple H1", "Dynamic Drivers: Yes"],
        category: "headphones", similarProducts: [25, 26, 28] },
  
      { id: 28, name: "JBL Tour One", price: "₹24,999", image: "headphones/04.png",
        description: "JBL's powerful noise-canceling headphones with deep bass.",
        specifications: ["Noise Cancellation: Adaptive", "Battery Life: 25 Hours", "Bluetooth: 5.0", "Voice Assistant: Yes"],
        category: "headphones", similarProducts: [25, 26, 27] },
  
      { id: 29, name: "Sennheiser Momentum 4", price: "₹34,990", image: "headphones/05.png",
        description: "Sennheiser's premium headphones with audiophile sound quality.",
        specifications: ["Noise Cancellation: Adaptive", "Battery Life: 60 Hours", "Bluetooth: 5.2", "Lightweight: Yes"],
        category: "headphones", similarProducts: [30, 31, 32] },
  
      { id: 30, name: "Beats Studio 3", price: "₹24,500", image: "headphones/06.png",
        description: "Beats Studio 3 with Pure Adaptive Noise Cancelling.",
        specifications: ["Noise Cancellation: Adaptive", "Battery Life: 22 Hours", "Bluetooth: Apple W1", "Fast Charging: Yes"],
        category: "headphones", similarProducts: [29, 31, 32] },
  
      { id: 31, name: "Anker Soundcore Life Q35", price: "₹9,999", image: "headphones/07.png",
        description: "Budget-friendly ANC headphones with high-quality sound.",
        specifications: ["Noise Cancellation: Hybrid ANC", "Battery Life: 40 Hours", "Bluetooth: 5.0", "Multipoint Connection: Yes"],
        category: "headphones", similarProducts: [29, 30, 32] },
  
      { id: 32, name: "Marshall Major IV", price: "₹14,999", image: "headphones/08.png",
        description: "Retro-styled wireless headphones with a long battery life.",
        specifications: ["Noise Cancellation: No", "Battery Life: 80 Hours", "Bluetooth: 5.0", "Wired Mode: Yes"],
        category: "headphones", similarProducts: [29, 30, 31] },
  

    // Add 6 more Headphones...
    { id: 33, name: "Apple Watch Ultra 2", price: "₹89,900", image: "watches/01.png",
        description: "Rugged smartwatch with extreme durability and advanced health tracking.",
        specifications: ["Display: 1.9-inch OLED", "Battery: 36 Hours", "OS: watchOS 10"],
        category: "watches", similarProducts: [34, 35, 36] },
  
      { id: 34, name: "Samsung Galaxy Watch 6", price: "₹29,999", image: "watches/02.png",
        description: "Stylish smartwatch with fitness tracking and Wear OS.",
        specifications: ["Display: 1.4-inch AMOLED", "Battery: 40 Hours", "OS: Wear OS"],
        category: "watches", similarProducts: [33, 35, 36] },
  
      { id: 35, name: "Garmin Fenix 7", price: "₹79,999", image: "watches/03.png",
        description: "Premium multi-sport GPS watch with topographic maps.",
        specifications: ["GPS: Yes", "Battery Life: 30 Days", "OS: Proprietary"],
        category: "watches", similarProducts: [33, 34, 36] },
  
      { id: 36, name: "Fitbit Sense 2", price: "₹21,999", image: "watches/04.png",
        description: "Advanced health-tracking smartwatch with ECG & SpO2.",
        specifications: ["Display: 1.6-inch AMOLED", "Battery: 6 Days", "OS: FitbitOS"],
        category: "watches", similarProducts: [33, 34, 35] },
  
      { id: 37, name: "Huawei Watch GT 3", price: "₹19,999", image: "watches/05.png",
        description: "Smartwatch with long battery life & accurate health tracking.",
        specifications: ["Display: 1.4-inch AMOLED", "Battery: 14 Days", "OS: HarmonyOS"],
        category: "watches", similarProducts: [38, 39, 40] },
  
      { id: 38, name: "OnePlus Watch 2", price: "₹17,999", image: "watches/06.png",
        description: "Premium design smartwatch with OxygenOS integration.",
        specifications: ["Display: 1.43-inch AMOLED", "Battery: 12 Days", "OS: Wear OS"],
        category: "watches", similarProducts: [37, 39, 40] },
  
      { id: 39, name: "Amazfit GTR 4", price: "₹15,999", image: "watches/07.png",
        description: "Affordable fitness smartwatch with Alexa built-in.",
        specifications: ["Display: 1.39-inch AMOLED", "Battery: 14 Days", "OS: Zepp OS"],
        category: "watches", similarProducts: [37, 38, 40] },
  
      { id: 40, name: "Realme Watch Pro", price: "₹9,999", image: "watches/08.png",
        description: "Budget-friendly smartwatch with SpO2 & heart rate tracking.",
        specifications: ["Display: 1.3-inch LCD", "Battery: 10 Days", "OS: Realme OS"],
        category: "watches", similarProducts: [37, 38, 39] }
  

 
];



