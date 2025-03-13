document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ watches.js Loaded!");

    const watchesList = document.getElementById("watches-list");

    if (!watchesList) {
        console.error("❌ ERROR: 'watches-list' container not found.");
        return;
    }

    // Ensure `allProducts` is available
    if (typeof allProducts === "undefined") {
        console.error("❌ ERROR: 'allProducts' is not defined! Check if products.js is loaded.");
        return;
    }

    // Filter only smartwatches from `products.js`
    const watches = allProducts.filter(product => product.category === "watches");

    if (watches.length === 0) {
        console.error("❌ No watches found in allProducts.");
        watchesList.innerHTML = "<p>No smartwatches available.</p>";
        return;
    }

    // Populate smartwatches dynamically
    watches.forEach(watch => {
        watchesList.innerHTML += `
            <div class="product">
                <div class="like"><i class="fa fa-heart heart-icon"></i></div>
                <div class="product_category"><img src="${watch.image}" alt="${watch.name}"></div>
                <div class="name">${watch.name}</div>
                <div class="price">${watch.price}</div>
                <div class="shopping">
                    <a href="product-details.html?id=${watch.id}" class="buy-btn">Buy Now</a>
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </div>
            </div>
        `;
    });

    console.log("✅ Smartwatches Loaded Successfully!");
});
