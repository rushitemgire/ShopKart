import React from "react";
import secure from "../assets/icons/secure.png";
import clock from "../assets/icons/clock.png";
import expressDelivery from "../assets/icons/express-delivery.png";
import electronics from "../assets/images/electronics.jpg";
import fashion from "../assets/images/fashion.jpeg";
import kitchen from "../assets/images/kitchen.avif";
import beauty from "../assets/images/beauty.jpeg";
import sports from "../assets/images/sports.webp";
import books from "../assets/images/books.jpeg";
import "./Category.css";
import trending from "../assets/icons/trending.png";
import cartIcon from '../assets/icons/cart-icon.svg'
import headphone from "../assets/images/products/headphone.webp";
import noisefit from "../assets/images/products/noisefit.webp";
import sneakers from "../assets/images/products/sneakers.webp";
import jeans from "../assets/images/products/jeans.webp";
import airdopes from "../assets/images/products/airdopes.webp";
import iphone from "../assets/images/products/iphone.avif";
import ferrari from "../assets/images/products/ferrari.jxl";
import lamp from "../assets/images/products/lamp.webp";
import './Products.css'


function Home() {
  const products = [
    {
      id: 1,
      name: "Boat Rockers 400",
      category: "Electronics",
      price: "1999",
      ratings: "4.5/5",
      reviews: "1200",
      image: headphone,
    },

    {
      id: 2,
      name: "Noise ColorFit Pro 4",
      category: "Electronics",
      price: 2999,
      rating: 4.6,
      reviews: 2300,
      image: noisefit,
    },

    {
      id: 3,
      name: "Red Tape Sneakers",
      category: "Fashion",
      price: 2099,
      rating: 4.5,
      reviews: 890,
      image: sneakers,
    },

    {
      id: 4,
      name: "Levi's Jeans",
      category: "Fashion",
      price: 2099,
      rating: 4.5,
      reviews: 890,
      image: jeans,
    },

    {
      id: 5,
      name: "boAt Airdopes 141",
      category: "Electronics",
      price: 1299,
      rating: 4.4,
      reviews: 3400,
      image: airdopes,
    },

    {
      id: 6,
      name: "Iphone 17 pro max",
      category: "Electronics",
      price: 124000,
      rating: 4.9,
      reviews: 2100,
      image: iphone,
    },

    {
      id: 7,
      name: "Men's Casual Shirt",
      category: "Fashion",
      price: 899,
      rating: 4.3,
      reviews: 760,
      image: ferrari,
    },

    {
      id: 8,
      name: "Minimalist Table Lamp",
      category: "Home & Kitchen",
      price: 1199,
      rating: 4.5,
      reviews: 540,
      image: lamp,
    },
  ];

  return (
    <div className="Home">
      {/* Hero Section for Home   */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Good Choices. <br /> <span>Great Prices.</span>
          </h1>
          <p>
            Everything you need, <br /> Delivered to your Door..
          </p>
          <div className="hero-buttons">
            <button className="shop-btn">Shop Now ➡</button>
            <button className="deal-btn">Explore Deals</button>
          </div>

          {/* Hero Benifits  */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img src={secure} alt="Shield" />
              <p>100% Secure Payment</p>
            </div>

            <div className="benefit-item">
              <img src={clock} alt="Clock" />
              <p>7 Days Easy Returns</p>
            </div>

            <div className="benefit-item">
              <img src={expressDelivery} alt="expressDelivery" />
              <p>Fast & Free Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="section-heading">
          <h2>Shop By Category</h2>
          <a href="#">View all Categories ➡</a>
        </div>
        <div className="category-list">
          <div className="category-card electronics">
            <img src={electronics} alt="Electronics" />
            <h3>Electronics</h3>
            <p>1200+ Products</p>
          </div>

          <div className="category-card fashion">
            <img src={fashion} alt="Fashion" />
            <h3>Fashion</h3>
            <p>1200+ Products</p>
          </div>

          <div className="category-card home-kitchen">
            <img src={kitchen} alt="Home and Kitchen" />
            <h3>Home and Kitchen</h3>
            <p>1200+ Products</p>
          </div>

          <div className="category-card beauty">
            <img src={beauty} alt="Beauty Products" />
            <h3>Beauty Products</h3>
            <p>1200+ Products</p>
          </div>

          <div className="category-card sports">
            <img src={sports} alt="Sports" />
            <h3>Sports</h3>
            <p>1200+ Products</p>
          </div>

          <div className="category-card books">
            <img src={books} alt="Books" />
            <h3>Books</h3>
            <p>1200+ Products</p>
          </div>
        </div>
      </section>

      {/* Trending Products  */}
      <section className="products-section" id="trending">
        
        <div className="section-heading">
          <div className="trending-heading">
            <h2 className="trending-title">
              <span className="trending-icon">
                <img src={trending} alt="Trending" />
              </span>
              <span>
                Trending <strong>Now</strong>
              </span>
            </h2>
            <div className="trending-accent"></div>
            <p className="trending-subtitle">Most popular choices this week</p>
          </div>
          <a href="/products" className="view-products">View all Products <span>➡</span></a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-details">
                <div className="product-meta">
                  <span className="product-category">
                    {product.category}
                  </span>
                  <span className="product-rating">
                    ⭐ {product.rating} ({product.reviews})
                  </span>
                </div>
                <h3>{product.name}</h3>
                <div className="product-price">
                  ₹{product.price}
                </div>
                <div className="product-actions">
                  <button className="buy-now-button">
                    Buy Now
                  </button>
                  <button className="cart-button">
                    <img src={cartIcon} alt="Cart" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
