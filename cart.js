// Function to get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Function to save cart back to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to remove item from cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    loadCart(); // Reload cart after removing item
}

// Function to calculate total price
function calculateTotal(cart) {
    let subtotal = 0;
    let totalItems = 0;
    
    cart.forEach(item => {
        subtotal += item.quantity * parseInt(item.price.replace("₹", "").replace(",", ""));
        totalItems += item.quantity;
    });

    let shipping = subtotal > 5000 ? 0 : 50; // Free shipping for orders above ₹5000
    let tax = Math.round(subtotal * 0.05); // 5% tax
    let total = subtotal + shipping + tax;

    document.getElementById("subtotal").textContent = `₹${subtotal}`;
    document.getElementById("totalItems").textContent = totalItems;
    document.getElementById("shipping").textContent = `₹${shipping}`;
    document.getElementById("tax").textContent = `₹${tax}`;
    document.getElementById("total").textContent = `₹${total}`;
}

// Function to load cart data into cart.html
function loadCart() {
    let cart = getCart();
    let cartItemsContainer = document.getElementById("cartItems");

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty. Start shopping!</p>";
        return;
    }

    cart.forEach(item => {
        let itemTotal = item.quantity * parseInt(item.price.replace("₹", "").replace(",", ""));
        
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" width="50">
                <div class="cart-details">
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: ₹${itemTotal}</p>
                    <button onclick="removeFromCart(${item.id})">❌ Remove</button>
                </div>
            </div>
        `;
    });

    calculateTotal(cart);
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", loadCart);
