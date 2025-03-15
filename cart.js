
        function renderCart() {
    const cartContainer = document.getElementById("cartItems");
    const headerCartCount = document.getElementById("headerCartCount");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
        headerCartCount.textContent = "0";
        return;
    }

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach((item, index) => {
        totalItems += item.quantity;
        subtotal += item.price * item.quantity;

        cartContainer.innerHTML += `
            <div class="item">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    headerCartCount.textContent = totalItems;
}

function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (quantity < 1) return;
    cart[index].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);

        // Sample cart data
        const cartData = [
            {
                id: 1,
                name: "Wireless Headphones",
                description: "Noise cancelling, 30hr battery life",
                price: 129.99,
                image: "C:\Users\Intel\Downloads\headphn.png",
                quantity: 1,
                color: "Purple"
            },
            {
                id: 2,
                name: "Smart Watch",
                description: "Fitness tracking, heart rate monitor",
                price: 199.99,
                image: "/api/placeholder/80/80",
                quantity: 1,
                color: "Blue"
            },
            {
                id: 3,
                name: "Portable Charger",
                description: "20000mAh, fast charging",
                price: 49.99,
                image: "/api/placeholder/80/80",
                quantity: 2,
                color: "Green"
            }
        ];
        
        // Function to render cart items
        function renderCart() {
            const cartContainer = document.getElementById('cartItems');
            const headerCartCount = document.getElementById('headerCartCount');
            cartContainer.innerHTML = '';
            
            let totalItems = 0;
            let subtotal = 0;
            
            if (cartData.length === 0) {
                cartContainer.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <h3 class="empty-message">Your cart is empty</h3>
                        <p>Looks like you haven't added anything to your cart yet.</p>
                        <a href="#" class="browse-btn">Browse Products</a>
                    </div>
                `;
                headerCartCount.textContent = '0';
                updateSummary(0, 0);
                return;
            }
            
            cartData.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-desc">${item.description}</div>
                        <div class="item-desc">Color: ${item.color}</div>
                    </div>
                    
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantityInput(${item.id}, this.value)">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    
                    <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                    
                    <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
                `;
                
                cartContainer.appendChild(itemElement);
                
                totalItems += item.quantity;
                subtotal += item.price * item.quantity;
            });
            
            // Update header cart count
            headerCartCount.textContent = totalItems;
            
            // Update summary
            updateSummary(totalItems, subtotal);
        }
        
        // Function to update summary
        function updateSummary(totalItems, subtotal) {
            document.getElementById('totalItems').textContent = totalItems;
            document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
            
            // Calculate shipping and tax
            const shipping = subtotal > 100 ? 0 : 9.99;
            const tax = subtotal * 0.08; // 8% tax rate
            const total = subtotal + shipping + tax;
            
            document.getElementById('shipping').textContent = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
            document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('total').textContent = `$${total.toFixed(2)}`;
        }
        
        // Function to update quantity
        function updateQuantity(itemId, newQuantity) {
            if (newQuantity < 1) return;
            
            const itemIndex = cartData.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                const oldQuantity = cartData[itemIndex].quantity;
                cartData[itemIndex].quantity = newQuantity;
                renderCart();
                
                // Show notification
                if (newQuantity > oldQuantity) {
                    showNotification("Quantity increased!");
                } else if (newQuantity < oldQuantity) {
                    showNotification("Quantity decreased");
                }
            }
        }
        
        // Function to handle quantity input change
        function updateQuantityInput(itemId, value) {
            updateQuantity(itemId, parseInt(value) || 1);
        }
        
        // Function to remove item
        function removeItem(itemId) {
            const itemIndex = cartData.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                const itemName = cartData[itemIndex].name;
                cartData.splice(itemIndex, 1);
                renderCart();
                showNotification(`${itemName} removed from cart`);
            }
        }
        
        // Function to show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationMessage = document.getElementById('notificationMessage');
            
            notificationMessage.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        // Checkout function
        document.getElementById('checkoutBtn').addEventListener('click', function() {
            if (cartData.length === 0) {
                showNotification("Your cart is empty. Please add items before checkout.");
                return;
            }
            
            showNotification("Proceeding to checkout!");
            // Here you would normally redirect to checkout page
        });
        
        // Initialize the cart
        renderCart();
