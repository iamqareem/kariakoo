// Age Verification
function verifyAge() {
  const age = document.getElementById('age').value;
  if (age >= 18) {
    window.location.href = 'category-selection.html';
  } else {
    alert('You must be at least 18 years old to shop.');
  }
}

// Load Products Based on Category
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const products = {
    electronics: [
      { name: 'Laptop', price: 1000 },
      { name: 'Smartphone', price: 500 },
    ],
    clothing: [
      { name: 'T-Shirt', price: 20 },
      { name: 'Jeans', price: 50 },
    ],
    'home-goods': [
      { name: 'Sofa', price: 300 },
      { name: 'Dining Table', price: 150 },
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
