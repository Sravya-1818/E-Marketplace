// Get the product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Find the product from `allProducts` (loaded from `products.js`)
const product = allProducts.find(p => p.id === productId);

if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;

    // Load Specifications
    const specsList = document.getElementById("product-specs");
    product.specifications.forEach(spec => {
        let li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
    });

    // Load Similar Products
    const similarProductsContainer = document.getElementById("similar-products-list");
    product.similarProducts.forEach(similarId => {
        const similarProduct = allProducts.find(p => p.id === similarId);
        if (similarProduct) {
            similarProductsContainer.innerHTML += `
                <div class="product">
                    <a href="product-details.html?id=${similarProduct.id}">
                        <div class="product_category"><img src="${similarProduct.image}" alt="${similarProduct.name}"></div>
                        <div class="name">${similarProduct.name}</div>
                        <div class="price">${similarProduct.price}</div>
                    </a>
                </div>
            `;
        }
    });
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
// Get the product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));
const product = allProducts.find(p => p.id === productId);

if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;

    // Load Specifications
    const specsList = document.getElementById("product-specs");
    product.specifications.forEach(spec => {
        let li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
    });

    // Add event listener for "Add to Cart" button
    document.getElementById("addToCartBtn").addEventListener("click", function() {
        addToCart(product.id);
    });

} else {
    document.body.innerHTML = "<h2>Product not found</h2>";
}
