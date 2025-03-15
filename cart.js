// Function to get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Function to save cart to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to render cart items
function renderCart() {
    const cartContainer = document.getElementById("cartItems");
    const headerCartCount = document.getElementById("headerCartCount");
    let cart = getCart();
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything yet.</p>
                <a href="products.html" class="browse-btn">Browse Products</a>
            </div>
        `;
        headerCartCount.textContent = "0";
        updateSummary(0, 0);
        return;
    }

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach((item, index) => {
        totalItems += item.quantity;
        subtotal += parseFloat(item.price.replace("₹", "").replace(",", "")) * item.quantity; // Convert price to number

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="price">₹${item.price}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    headerCartCount.textContent = totalItems;
    updateSummary(totalItems, subtotal);
}

// Function to update quantity
function updateQuantity(index, newQuantity) {
    let cart = getCart();
    if (newQuantity < 1) return;

    cart[index].quantity = parseInt(newQuantity);
    saveCart(cart);
    renderCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

// Function to update cart summary (Subtotal, Tax, Total)
function updateSummary(totalItems, subtotal) {
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;

    const shipping = subtotal > 5000 ? 0 : 50; // Free shipping above ₹5000
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    document.getElementById('shipping').textContent = shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

// Checkout function
document.getElementById('checkoutBtn').addEventListener('click', function() {
    let cart = getCart();
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items before checkout.");
        return;
    }

    alert("Proceeding to checkout...");
    // Redirect to checkout page (if exists)
    // window.location.href = "checkout.html";
});

// Initialize the cart
document.addEventListener("DOMContentLoaded", renderCart);
