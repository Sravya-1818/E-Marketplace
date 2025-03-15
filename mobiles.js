document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ mobiles.js Loaded!");

    // Check if 'allProducts' is available
    if (typeof allProducts === "undefined") {
        console.error("❌ ERROR: 'allProducts' is not defined. Check if 'products.js' is loaded before 'mobiles.js'.");
        return;
    }

    // Find the container where mobile products will be displayed
    let productList = document.getElementById("mobile-list");
    if (!productList) {
        console.error("❌ ERROR: 'mobile-list' container not found in HTML.");
        return;
    }

    // Filter mobiles from all products
    let mobiles = allProducts.filter(product => product.category === "mobiles");

    // Generate HTML for each mobile product
    mobiles.forEach(mobile => {
        productList.innerHTML += `
            <div class="product">
                <div class="product_category"><img src="${mobile.image}" alt="${mobile.name}"></div>
                <div class="name">${mobile.name}</div>
                <div class="price">${mobile.price}</div>
                <div class="shopping">
                    <button class="cart-btn" onclick="addToCart(${mobile.id})">
                        <i class="fa fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    });

    console.log("✅ Mobile products loaded successfully!");
});

