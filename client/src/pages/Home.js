import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/AuctionLandingPage.css";
import { getCategories } from "../services/utils";

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
              <img src="shoes_test.jpg" alt="Product" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
