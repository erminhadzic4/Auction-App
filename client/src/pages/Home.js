import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getCategories } from "../services/utils";
import "../styles/LandingPage.css";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        const data = response.data;
        if (data.success) {
          setCategories(data.users);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="auction-container">
        <div className="left-column">
          <p className="category-title">CATEGORIES</p>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <div className="category-item">{category.name}</div>
              {index < categories.length - 1 && (
                <hr className="category-divider" />
              )}
            </React.Fragment>
          ))}
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
              <img src="product.png" alt="Product" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="content-section">
          <div className="card">
            <img src="product.png" />
            <h2>Card One</h2>
            <span className="card-text">Start From</span>
            <span className="card-price"> $59.99</span>
          </div>
          <div className="card">
            <img src="product.png" />
            <h2>Card Two</h2>
            <span className="card-text">Start From</span>
            <span className="card-price"> $59.99</span>
          </div>
          <div className="card">
            <img src="product.png" />
            <h2>Card Three</h2>
            <span className="card-text">Start From</span>
            <span className="card-price"> $59.99</span>
          </div>
          <div className="card">
            <img src="product.png" />
            <h2>Card Four</h2>
            <span className="card-text">Start From</span>
            <span className="card-price"> $59.99</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
