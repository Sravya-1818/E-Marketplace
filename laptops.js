document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ laptops.js Loaded!");

    const laptopList = document.getElementById("laptop-list");

    if (!laptopList) {
        console.error("❌ ERROR: 'laptop-list' container not found.");
        return;
    }

    // Ensure `allProducts` is available
    if (typeof allProducts === "undefined") {
        console.error("❌ ERROR: 'allProducts' is not defined! Check if products.js is loaded.");
        return;
    }

    // Filter only laptops from `products.js`
    const laptops = allProducts.filter(product => product.category === "laptops");

    if (laptops.length === 0) {
        console.error("❌ No laptops found in allProducts.");
        laptopList.innerHTML = "<p>No laptops available.</p>";
        return;
    }

    // Populate laptops dynamically
    laptops.forEach(laptop => {
        laptopList.innerHTML += `
            <div class="product">
                <div class="like"><i class="fa fa-heart heart-icon"></i></div>
                <div class="product_category"><img src="${laptop.image}" alt="${laptop.name}"></div>
                <div class="name">${laptop.name}</div>
                <div class="price">${laptop.price}</div>
                <div class="shopping">
                    <a href="product-details.html?id=${laptop.id}" class="buy-btn">Buy Now</a>
                    <i class="fa fa-shopping-cart cart-icon"></i>
                </div>
            </div>
        `;
    });

    console.log("✅ Laptops Loaded Successfully!");
});
