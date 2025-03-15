document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Checkout page loaded!");

    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const subtotalElement = document.getElementById("subtotal");
    const shippingElement = document.getElementById("shipping");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");
    const orderItemsContainer = document.getElementById("order-items");

    let subtotal = 0;
    cart.forEach(item => {
        const price = parseFloat(item.price.replace("₹", "").replace(",", ""));
        subtotal += price * item.quantity;
        orderItemsContainer.innerHTML += `<p>${item.quantity}x ${item.name} - ₹${price}</p>`;
    });

    const shipping = subtotal > 5000 ? 0 : 50;  // Free shipping if > ₹5000
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    // Update Order Summary
    subtotalElement.textContent = subtotal.toFixed(2);
    shippingElement.textContent = shipping.toFixed(2);
    taxElement.textContent = tax.toFixed(2);
    totalElement.textContent = total.toFixed(2);

    // Payment Integration with Razorpay
    document.getElementById("payBtn").addEventListener("click", function () {
        const options = {
            key: "rzp_test_yourapikey", // Replace with your Razorpay Key ID
            amount: total * 100, // Razorpay expects amount in paise
            currency: "INR",
            name: "MyShop",
            description: "Payment for your order",
            image: "logo.png",
            handler: function (response) {
                alert("Payment Successful! Order ID: " + response.razorpay_payment_id);
                localStorage.removeItem("cart"); // Clear cart after payment
                window.location.href = "order-success.html"; // Redirect to success page
            },
            prefill: {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
            },
            theme: {
                color: "#6a3de8"
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
    });
});
