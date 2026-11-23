import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [availability, setAvailability] = useState("");

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  let products = [
    {
      id: 1,
      name: "Samsung Galaxy M14 5G",
      category: "Electronics",
      price: "12,499",
      originalPrice: "14,999",
      rating: 4.4,
      reviews: 1850,
      discount: "17%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    },
    {
      id: 2,
      name: "Apple iPhone 15",
      category: "Electronics",
      price: "59,999",
      originalPrice: "69,999",
      rating: 4.8,
      reviews: 3200,
      discount: "14%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    {
      id: 3,
      name: "boAt Rockerz 450 Headphones",
      category: "Electronics",
      price: "1,499",
      originalPrice: "2,990",
      rating: 4.3,
      reviews: 2400,
      discount: "50%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 4,
      name: "Sony Wireless Bluetooth Speaker",
      category: "Electronics",
      price: "3,499",
      originalPrice: "4,999",
      rating: 4.5,
      reviews: 980,
      discount: "30%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    },
    {
      id: 5,
      name: "Dell Inspiron 15 Laptop",
      category: "Electronics",
      price: "52,999",
      originalPrice: "59,999",
      rating: 4.6,
      reviews: 1250,
      discount: "12%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 6,
      name: "Canon EOS DSLR Camera",
      category: "Electronics",
      price: "42,999",
      originalPrice: "49,999",
      rating: 4.7,
      reviews: 850,
      discount: "14%",
      isAvailable: false,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 7,
      name: "Men's Casual Cotton T-Shirt",
      category: "Fashion",
      price: "499",
      originalPrice: "999",
      rating: 4.2,
      reviews: 1450,
      discount: "50%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 8,
      name: "Men's Slim Fit Jeans",
      category: "Fashion",
      price: "1,199",
      originalPrice: "1,999",
      rating: 4.3,
      reviews: 920,
      discount: "40%",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    },
    {
      id: 9,
      name: "Women's Floral Summer Dress",
      category: "Fashion",
      price: "899",
      originalPrice: "1,499",
      rating: 4.5,
      reviews: 780,
      discount: "40%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500",
    },
    {
      id: 10,
      name: "Women's Casual Handbag",
      category: "Fashion",
      price: "1,499",
      originalPrice: "2,499",
      rating: 4.4,
      reviews: 1100,
      discount: "40%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    },
    {
      id: 11,
      name: "Nike Air Max Running Shoes",
      category: "Footwear",
      price: "4,999",
      originalPrice: "6,999",
      rating: 4.7,
      reviews: 2100,
      discount: "29%",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 12,
      name: "Adidas Men's Sports Shoes",
      category: "Footwear",
      price: "2,999",
      originalPrice: "4,499",
      rating: 4.5,
      reviews: 1350,
      discount: "33%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
    },
    {
      id: 13,
      name: "Women's Running Sneakers",
      category: "Footwear",
      price: "1,799",
      originalPrice: "2,999",
      rating: 4.3,
      reviews: 650,
      discount: "40%",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    },
    {
      id: 14,
      name: "Men's Formal Leather Shoes",
      category: "Footwear",
      price: "2,499",
      originalPrice: "3,999",
      rating: 4.4,
      reviews: 540,
      discount: "38%",
      isAvailable: false,
      image:
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500",
    },
    {
      id: 15,
      name: "Wooden Coffee Table",
      category: "Home & Furniture",
      price: "3,499",
      originalPrice: "4,999",
      rating: 4.5,
      reviews: 420,
      discount: "30%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500",
    },
    {
      id: 16,
      name: "Modern Sofa Set",
      category: "Home & Furniture",
      price: "24,999",
      originalPrice: "32,999",
      rating: 4.6,
      reviews: 310,
      discount: "24%",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    },
    {
      id: 17,
      name: "LED Table Lamp",
      category: "Home & Furniture",
      price: "799",
      originalPrice: "1,299",
      rating: 4.2,
      reviews: 870,
      discount: "38%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    },
    {
      id: 18,
      name: "Decorative Wall Clock",
      category: "Home & Furniture",
      price: "599",
      originalPrice: "999",
      rating: 4.1,
      reviews: 620,
      discount: "40%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500",
    },
    {
      id: 19,
      name: "Prestige Electric Kettle",
      category: "Kitchen",
      price: "1,299",
      originalPrice: "1,799",
      rating: 4.4,
      reviews: 1600,
      discount: "28%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1594213114663-d94db9b1712b?w=500",
    },
    {
      id: 20,
      name: "Non-Stick Cookware Set",
      category: "Kitchen",
      price: "2,499",
      originalPrice: "3,499",
      rating: 4.5,
      reviews: 950,
      discount: "29%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1584990347449-a4c6e7c9c5f4?w=500",
    },
    {
      id: 21,
      name: "Stainless Steel Water Bottle",
      category: "Kitchen",
      price: "499",
      originalPrice: "799",
      rating: 4.3,
      reviews: 1850,
      discount: "38%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    },
    {
      id: 22,
      name: "Smart Fitness Watch",
      category: "Electronics",
      price: "2,499",
      originalPrice: "3,999",
      rating: 4.4,
      reviews: 2700,
      discount: "38%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 23,
      name: "Women's Analog Wrist Watch",
      category: "Fashion",
      price: "1,899",
      originalPrice: "2,999",
      rating: 4.5,
      reviews: 760,
      discount: "37%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
    },
    {
      id: 24,
      name: "Ray-Ban Aviator Sunglasses",
      category: "Accessories",
      price: "5,499",
      originalPrice: "7,499",
      rating: 4.7,
      reviews: 1400,
      discount: "27%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      id: 25,
      name: "Leather Men's Wallet",
      category: "Accessories",
      price: "699",
      originalPrice: "1,199",
      rating: 4.3,
      reviews: 890,
      discount: "42%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    },
    {
      id: 26,
      name: "Yoga Exercise Mat",
      category: "Sports",
      price: "799",
      originalPrice: "1,299",
      rating: 4.4,
      reviews: 1150,
      discount: "38%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    },
    {
      id: 27,
      name: "Adjustable Dumbbell Set",
      category: "Sports",
      price: "3,499",
      originalPrice: "4,999",
      rating: 4.6,
      reviews: 720,
      discount: "30%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
    },
    {
      id: 28,
      name: "The Psychology of Money",
      category: "Books",
      price: "299",
      originalPrice: "399",
      rating: 4.8,
      reviews: 4500,
      discount: "25%",
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    },
    {
      id: 29,
      name: "The Alchemist Book",
      category: "Books",
      price: "249",
      originalPrice: "350",
      rating: 4.7,
      reviews: 3800,
      discount: "29%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    },
    {
      id: 30,
      name: "Minimalist Skincare Combo",
      category: "Beauty",
      price: "899",
      originalPrice: "1,299",
      rating: 4.5,
      reviews: 1950,
      discount: "31%",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
    },
  ];

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleAvailabilityChange = (value) => {
    setAvailability(value);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(20000);
    setSelectedRating(0);
    setAvailability("");
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch = Number(product.price.replace(",", "")) <= maxPrice;

    const ratingMatch = product.rating >= selectedRating;

    const availabilityMatch =
      availability === "" ||
      (availability === "inStock" && product.isAvailable) ||
      (availability === "outOfStock" && !product.isAvailable);

    return categoryMatch && priceMatch && ratingMatch && availabilityMatch;
  });

  return (
    <div>
      <main className="products-page">
        <section className="products-banner">
          <div className="banner-content">
            <h1>
              All <span>Products</span>
            </h1>
            <p> Explore our wide range of top quality products </p>
          </div>
        </section>

        <section className="products-content">
          <aside className="filter-sidebar">
            <div className="filter-title">
              <h3>FILTERS</h3>
              <button onClick={clearFilters}>Clear All</button>
            </div>

            <div className="filter-group">
              <h4>Categories</h4>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Electronics")}
                  onChange={() => handleCategoryChange("Electronics")}
                />
                Electronics
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Fashion")}
                  onChange={() => handleCategoryChange("Fashion")}
                />
                Fashion
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Home & Kitchen")}
                  onChange={() => handleCategoryChange("Home & Kitchen")}
                />{" "}
                Home & Kitchen
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Beauty")}
                  onChange={() => handleCategoryChange("Beauty")}
                />{" "}
                Beauty
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Sports")}
                  onChange={() => handleCategoryChange("Sports")}
                />{" "}
                Sports
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Books")}
                  onChange={() => handleCategoryChange("Books")}
                />{" "}
                Books{" "}
              </label>
            </div>

            <div className="filter-group">
              <h4>Price Range</h4>
              <input
                type="range"
                min="199"
                max="20000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <div className="price-range">
                <span>₹199</span>
                <span>₹{maxPrice}</span>
              </div>
            </div>

            <div className="filter-group">
              <h4>Ratings</h4>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedRating === 5}
                  onChange={() => handleRatingChange(5)}
                />{" "}
                ⭐⭐⭐⭐⭐ & above
              </label>

              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedRating === 4}
                  onChange={() => handleRatingChange(4)}
                />{" "}
                ⭐⭐⭐⭐☆ & above
              </label>

              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={selectedRating === 3}
                  onChange={() => handleRatingChange(3)}
                />{" "}
                ⭐⭐⭐☆☆ & above
              </label>
            </div>

            <div className="filter-group">
              <h4>Availability</h4>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={availability === "inStock"}
                  onChange={() => handleAvailabilityChange("inStock")}
                />{" "}
                In Stock
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={availability === "outOfStock"}
                  onChange={() => handleAvailabilityChange("outOfStock")}
                />{" "}
                Out of Stock
              </label>
            </div>
          </aside>

          <div className="products-area">
            <div className="products-header">
              <p>
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="product-image">
                      {product.discount && (
                        <span className="discount-badge">
                          -{product.discount}
                        </span>
                      )}
                      <button className="wishlist-button">♡</button>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <small>{product.category}</small>
                      <h3>{product.name}</h3>
                      <div className="rating">
                        ⭐ {product.rating}
                        <span> ({product.reviews})</span>
                      </div>
                      <div className="product-price">
                        {" "}
                        ₹{product.price}
                        <del>₹{product.originalPrice}</del>
                      </div>
                      <button className="add-cart-button">
                        🛒 Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <h3>No Products Found !</h3>
                  <p>Try changing your filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products;
