import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getCategories, getProducts } from "../services/utils";
import "../styles/LandingPage.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState("new-arrival");

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

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

  useEffect(() => {
    getProducts(
      selectedItem === "new-arrival" ? "creation_time" : "ending_time"
    )
      .then((response) => {
        const data = response.data;
        if (data.success) {
          setProducts(data.product);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedItem]);

  return (
    <Layout>
      <div className="auction-container">
        <div className="left-column">
          <p className="category-title">CATEGORIES</p>
          <div className="category-list">
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <div className="category-item">{category.name}</div>
                {index < categories.length - 1 && (
                  <hr className="category-divider" />
                )}
              </React.Fragment>
            ))}
          </div>
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
      <div className="filter-menu">
        <div
          className={`menu-item ${
            selectedItem === "new-arrival" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("new-arrival")}
        >
          New Arrival
        </div>
        <div
          className={`menu-item ${
            selectedItem === "last-chance" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("last-chance")}
        >
          Last Chance
        </div>
      </div>
      <hr className="filter-divider" />
      <div className="card-container">
        <div className="content-section">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <img src={product.image} alt={`Product ${index + 1}`} />
              <h2>{product.name}</h2>
              <span className="card-text">Start From</span>
              <span className="card-price"> ${product.starting_price}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
