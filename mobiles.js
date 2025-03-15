document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ mobiles.js Loaded!");

    const mobilesList = document.getElementById("mobiles-list");

    if (!mobilesList) {
        console.error("❌ ERROR: 'mobiles-list' container not found.");
        return;
    }

    // Ensure `allProducts` is available
    if (typeof allProducts === "undefined") {
        console.error("❌ ERROR: 'allProducts' is not defined! Check if products.js is loaded.");
        return;
    }

    // Filter only mobiles from `products.js`
    const mobiles = allProducts.filter(product => product.category === "mobiles");

    if (mobiles.length === 0) {
        console.error("❌ No mobiles found in allProducts.");
        mobilesList.innerHTML = "<p>No mobiles available.</p>";
        return;
    }

    // Populate mobiles dynamically
    mobiles.forEach(mobile => {
        mobilesList.innerHTML += `
            <div class="product">
                <div class="like"><i class="fa fa-heart heart-icon"></i></div>
                <div class="product_category"><img src="${mobile.image}" alt="${mobile.name}"></div>
                <div class="name">${mobile.name}</div>
                <div class="price">${mobile.price}</div>
                <div class="shopping">
                    <a href="product-details.html?id=${mobile.id}" class="buy-btn">Buy Now</a>
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </div>
            </div>
        `;
    });

    console.log("✅ Mobiles Loaded Successfully!");
});
