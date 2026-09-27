const products = [
  {
    id: 1,
    name: "Premium Silk Saree",
    category: "Women",
    subcategory: "Sarees",
    originalPrice: 4999,
    discountedPrice: 2499,
    discountPercentage: 50,
    rating: 4.8,
    reviewsCount: 124,
    image: "assets/images/women_saree_1790498518457.jpg",
    sizes: ["Free Size"],
    colors: ["Maroon/Gold"],
    description: "Elegant premium silk saree with intricate zari work. Perfect for festive occasions and weddings.",
    material: "Pure Silk",
    deliveryInfo: "Free delivery within 3-5 days.",
    isNew: true,
    isTrending: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Classic Leather Bomber Jacket",
    category: "Men",
    subcategory: "Jackets",
    originalPrice: 5999,
    discountedPrice: 3599,
    discountPercentage: 40,
    rating: 4.6,
    reviewsCount: 89,
    image: "assets/images/men_jacket_1790498530623.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Brown", "Black"],
    description: "Stylish and warm leather bomber jacket with premium finish. Suitable for winter and casual outings.",
    material: "Genuine Leather",
    deliveryInfo: "Free delivery within 3-5 days.",
    isNew: false,
    isTrending: true,
    isBestSeller: false
  },
  {
    id: 3,
    name: "Kids Floral Party Dress",
    category: "Kids",
    subcategory: "Dresses",
    originalPrice: 1999,
    discountedPrice: 999,
    discountPercentage: 50,
    rating: 4.9,
    reviewsCount: 210,
    image: "assets/images/kids_wear_1790498545394.jpg",
    sizes: ["2-3 Yrs", "4-5 Yrs", "6-7 Yrs", "8-9 Yrs"],
    colors: ["Teal/Floral"],
    description: "Cute and comfortable floral party dress with layered tulle. Perfect for birthdays and family functions.",
    material: "Cotton & Tulle",
    deliveryInfo: "Free delivery within 3-5 days.",
    isNew: true,
    isTrending: false,
    isBestSeller: true
  },
  {
    id: 4,
    name: "Men's Casual Cotton Shirt",
    category: "Men",
    subcategory: "Shirts",
    originalPrice: 1499,
    discountedPrice: 749,
    discountPercentage: 50,
    rating: 4.2,
    reviewsCount: 45,
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "White", "Olive"],
    description: "Breathable everyday cotton shirt. Standard fit.",
    material: "100% Cotton",
    deliveryInfo: "Standard delivery.",
    isNew: false,
    isTrending: false,
    isBestSeller: true
  },
  {
    id: 5,
    name: "Women's Designer Kurti",
    category: "Women",
    subcategory: "Kurtis",
    originalPrice: 2499,
    discountedPrice: 1299,
    discountPercentage: 48,
    rating: 4.5,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1583391733958-d25e07fac0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mustard", "Pink"],
    description: "Beautifully embroidered kurti for casual and festive wear.",
    material: "Rayon",
    deliveryInfo: "Standard delivery.",
    isNew: true,
    isTrending: true,
    isBestSeller: false
  },
  {
    id: 6,
    name: "Men's Slim Fit Jeans",
    category: "Men",
    subcategory: "Jeans",
    originalPrice: 2999,
    discountedPrice: 1499,
    discountPercentage: 50,
    rating: 4.3,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1542272604-780c85028209?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black", "Grey"],
    description: "Stretchable slim fit jeans for everyday comfort.",
    material: "Denim & Elastane",
    deliveryInfo: "Free delivery.",
    isNew: false,
    isTrending: false,
    isBestSeller: true
  },
  {
    id: 7,
    name: "Women's Casual T-Shirt",
    category: "Women",
    subcategory: "T-Shirts",
    originalPrice: 899,
    discountedPrice: 449,
    discountPercentage: 50,
    rating: 4.7,
    reviewsCount: 320,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Red"],
    description: "Soft cotton basic t-shirt.",
    material: "100% Cotton",
    deliveryInfo: "Standard delivery.",
    isNew: false,
    isTrending: false,
    isBestSeller: true
  },
  {
    id: 8,
    name: "Kids Winter Hoodie",
    category: "Kids",
    subcategory: "Hoodies",
    originalPrice: 1599,
    discountedPrice: 799,
    discountPercentage: 50,
    rating: 4.6,
    reviewsCount: 54,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    sizes: ["4-5 Yrs", "6-7 Yrs", "8-9 Yrs", "10-12 Yrs"],
    colors: ["Yellow", "Navy"],
    description: "Warm and cozy hoodie with fun prints.",
    material: "Fleece Cotton",
    deliveryInfo: "Standard delivery.",
    isNew: true,
    isTrending: true,
    isBestSeller: false
  }
];

// Helper functions for UI
function renderProductCard(product) {
  let badges = '';
  if (product.isNew) badges += `<span class="product-badge">New</span>`;
  if (product.isTrending) badges += `<span class="product-badge">Trending</span>`;
  
  // Format INR
  const formattedDiscounted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.discountedPrice);
  const formattedOriginal = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.originalPrice);

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" onclick="window.location.href='product.html?id=${product.id}'" style="cursor:pointer;">
        <div class="product-badges">
          ${badges}
          <span class="product-badge badge-discount">${product.discountPercentage}% OFF</span>
        </div>
        <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id}, this)">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category} | ${product.subcategory}</div>
        <h3 class="product-name" title="${product.name}">${product.name}</h3>
        <div class="product-rating">
          ${getStarRating(product.rating)}
          <span style="color:#777; font-size:0.8rem;">(${product.reviewsCount})</span>
        </div>
        <div class="product-price">
          <span class="discounted-price">${formattedDiscounted}</span>
          <span class="original-price">${formattedOriginal}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn btn-primary" onclick="buyNow(${product.id})">Buy Now</button>
        </div>
      </div>
    </div>
  `;
}

function getStarRating(rating) {
  let stars = '';
  for(let i=1; i<=5; i++) {
    if(i <= rating) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}
