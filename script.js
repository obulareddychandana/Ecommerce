// Initialize an empty cart array from sessionStorage
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(productName, price) {
    // Create a product object and add it to the cart
    const product = { name: productName, price: price };
    cart.push(product);

    // Update cart data in sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user
    alert(productName + " added to cart!");
}

// Function to add an item and redirect to the Billing page
function addToCartAndRedirect(productName, price) {
    addToCart(productName, price);
    goToBilling();
}

// Function to navigate to the Billing page
function goToBilling() {
    // Redirect to billing.html
    window.location.href = 'billing.html';
}

// Billing page: Load cart items and display them
function loadCart() {
    // Retrieve the cart data from sessionStorage
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    let total = 0;

    // Display each item in the cart
    savedCart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = `${item.name}: $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    // Display total price
    document.getElementById('totalPrice').innerText = `Total: $${total.toFixed(2)}`;
}

// Confirm order function
function confirmOrder() {
    // Alert the user and clear cart
    alert("Thank you for your order!");

    // Clear cart data in sessionStorage and reset in memory
    sessionStorage.removeItem('cart');
    cart = [];

    // Optionally, redirect to a Thank You or Home page after confirmation
    window.location.href = 'index.html';
}

// Call loadCart() only on the Billing page
if (window.location.pathname.endsWith('billing.html')) {
    document.addEventListener('DOMContentLoaded', loadCart);
}
