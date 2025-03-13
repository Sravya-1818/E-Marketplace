document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ headphones.js Loaded!");

    const headphonesList = document.getElementById("headphones-list");

    if (!headphonesList) {
        console.error("❌ ERROR: 'headphones-list' container not found.");
        return;
    }

    // Ensure `allProducts` is available
    if (typeof allProducts === "undefined") {
        console.error("❌ ERROR: 'allProducts' is not defined! Check if products.js is loaded.");
        return;
    }

    // Filter only headphones from `products.js`
    const headphones = allProducts.filter(product => product.category === "headphones");

    if (headphones.length === 0) {
        console.error("❌ No headphones found in allProducts.");
        headphonesList.innerHTML = "<p>No headphones available.</p>";
        return;
    }

    // Populate headphones dynamically
    headphones.forEach(headphone => {
        headphonesList.innerHTML += `
            <div class="product">
                <div class="like"><i class="fa fa-heart heart-icon"></i></div>
                <div class="product_category"><img src="${headphone.image}" alt="${headphone.name}"></div>
                <div class="name">${headphone.name}</div>
                <div class="price">${headphone.price}</div>
                <div class="shopping">
                    <a href="product-details.html?id=${headphone.id}" class="buy-btn">Buy Now</a>
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </div>
            </div>
        `;
    });

    console.log("✅ Headphones Loaded Successfully!");
});
