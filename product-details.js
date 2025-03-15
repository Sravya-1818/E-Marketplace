// Ensure `products.js` is loaded first
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ product-details.js Loaded!");

    // Get the product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    if (typeof allProducts === "undefined") {
        console.error("❌ ERROR: 'allProducts' is not defined. Check if 'products.js' is loaded first.");
        return;
    }

    // Find the product in `allProducts`
    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        document.body.innerHTML = `
            <h2 style="text-align: center; color: red;">Product not found</h2>
            <p style="text-align: center;">Go back to <a href="products.html">Products</a></p>
        `;
        return;
    }

    // Populate product details
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;

    // Load Specifications
    const specsList = document.getElementById("product-specs");
    specsList.innerHTML = ""; // Clear previous data
    product.specifications.forEach(spec => {
        let li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
    });

    // Load Similar Products
    const similarProductsContainer = document.getElementById("similar-products-list");
    similarProductsContainer.innerHTML = ""; // Clear previous data
    product.similarProducts.forEach(similarId => {
        const similarProduct = allProducts.find(p => p.id === similarId);
        if (similarProduct) {
            similarProductsContainer.innerHTML += `
                <div class="product">
                    <a href="product-details.html?id=${similarProduct.id}">
                        <div class="product_category">
                            <img src="${similarProduct.image}" alt="${similarProduct.name}">
                        </div>
                        <div class="name">${similarProduct.name}</div>
                        <div class="price">${similarProduct.price}</div>
                    </a>
                </div>
            `;
        }
    });

    // Handle Add to Cart
    const addToCartButton = document.getElementById("addToCartBtn");
    if (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            console.log(`🛒 Adding product ID: ${product.id} to cart...`);
            addToCart(product.id);
        });
    } else {
        console.error("❌ ERROR: 'addToCartBtn' button not found in product-details.html.");
    }

    // Quantity Increase/Decrease
    let quantity = 1;
    document.getElementById("increase").addEventListener("click", () => {
        quantity++;
        document.getElementById("quantity").textContent = quantity;
    });

    document.getElementById("decrease").addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            document.getElementById("quantity").textContent = quantity;
        }
    });

    // Reviews Section
    const reviewsList = document.getElementById("reviews-list");
    const submitReviewButton = document.getElementById("submit-review");

    submitReviewButton.addEventListener("click", () => {
        const reviewText = document.getElementById("review-text").value;
        if (reviewText.trim() !== "") {
            const reviewDiv = document.createElement("div");
            reviewDiv.classList.add("review");
            reviewDiv.textContent = reviewText;
            reviewsList.appendChild(reviewDiv);
            document.getElementById("review-text").value = "";
        }
    });

});

// Function to add product to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = allProducts.find(p => p.id === productId);
    let quantity = parseInt(document.getElementById("quantity").textContent) || 1;

    if (product) {
        let cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart! 🛒`);
    } else {
        console.error("❌ ERROR: Product not found in database.");
    }
}

// Function to update cart count in navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let cartCountElement = document.getElementById("headerCartCount");

    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Run this function on page load to update the cart count
document.addEventListener("DOMContentLoaded", updateCartCount);
