import React from "react";
import Layout from "../components/Layout";
import "../styles/Styles.css";

const Home = () => {
  return (
    <Layout>
      <div className="auction-container">
        <div className="left-column">
          <p className="category-title">CATEGORIES</p>
          <div className="category-item">Fashion</div>
          <hr className="category-divider" />
          <div className="category-item">Accessories</div>
          <hr className="category-divider" />
          <div className="category-item">Jewelry</div>
          <hr className="category-divider" />
          <div className="category-item">Shoes</div>
          <hr className="category-divider" />
          <div className="category-item">Sportware</div>
          <hr className="category-divider" />
          <div className="category-item">Home</div>
          <hr className="category-divider" />
          <div className="category-item">Electronics</div>
          <hr className="category-divider" />
          <div className="category-item">Mobile</div>
          <hr className="category-divider" />
          <div className="category-item">Computer</div>
          <hr className="category-divider" />
          <div className="category-item">All categories</div>
          {/* Add more categories */}
        </div>
        <div className="right-column">
          <div className="product-card">
            <div className="product-details">
              <h5 className="product-title">Running Shoes</h5>
              <p className="product-price">Starting from $59.99</p>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum hendrerit odio a erat lobortis auctor. Curabitur
                sodales pharetra placerat. Aenean auctor luctus tempus. Cras
                laoreet et magna in dignissim. Nam et tincidunt augue. Vivamus
                quis malesuada velit. In hac habitasse platea dictumst.
              </p>
              <button className="product-bid-button">BID NOW</button>
            </div>
            <div className="product-image">
              <img src="shoes_test.jpg" alt="Product" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
