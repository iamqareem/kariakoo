function verifyAge() {
    const age = document.getElementById('age').value;
    if (age >= 14) {
        window.location.href = 'category-selection.html';
    } else {
        window.location.href = 'https://t.me/moviesharingchannel'; // Replace with your Telegram channel URL
    }
}

// Load Products Based on Category
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const products = {
        raw: [
            { name: 'Raw Product 1', price: 100 },
            { name: 'Raw Product 2', price: 200 },
            // Add more products here
        ],
        blend: [
            { name: 'Blend Product 1', price: 300 },
            { name: 'Blend Product 2', price: 400 },
            // Add more products here
        ],
        hybrid: [
            { name: 'Hybrid Product 1', price: 500 },
            { name: 'Hybrid Product 2', price: 600 },
            // Add more products here
        ],
        spicy: [
            { name: 'Spicy Product 1', price: 700 },
            { name: 'Spicy Product 2', price: 800 },
            // Add more products here
        ],
    };

    if (document.getElementById('productList')) {
        const productList = document.getElementById('productList');
        if (category && products[category]) {
            products[category].forEach(product => {
                const li = document.createElement('li');
                li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>`;
                productList.appendChild(li);
            });
        } else {
            productList.innerHTML = '<li>No products available in this category.</li>';
        }
    }

    if (document.getElementById('cartItems')) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartList = document.getElementById('cartItems');
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(li);
            total += item.price;
        });
        document.getElementById('totalPrice').textContent = total;
    }
});

// Add to Cart
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

// Checkout
function checkout(method) {
    alert(`Checkout using ${method}`);
    // Implement payment logic here
}
