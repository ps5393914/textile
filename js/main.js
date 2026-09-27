// Cart and Wishlist state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function saveState() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateBadges();
}

function updateBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishlistBadge = document.getElementById('wishlist-badge');
  
  if (cartBadge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
  
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId, quantity = 1, size = null, color = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const itemSize = size || product.sizes[0];
  const itemColor = color || product.colors[0];

  const existingItem = cart.find(item => item.id === productId && item.size === itemSize && item.color === itemColor);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      quantity: quantity,
      size: itemSize,
      color: itemColor
    });
  }
  
  saveState();
  alert(`${product.name} added to cart!`);
}

function buyNow(productId) {
  addToCart(productId);
  window.location.href = 'cart.html';
}

function toggleWishlist(productId, btnElement) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    if(btnElement) btnElement.classList.remove('active');
  } else {
    wishlist.push(productId);
    if(btnElement) btnElement.classList.add('active');
  }
  saveState();
}

function isInWishlist(productId) {
  return wishlist.includes(productId);
}

// Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if(mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
