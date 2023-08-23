import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getCategories, getProducts } from "../services/utils";
import "../styles/LandingPage.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState("new-arrival");
  const isAuth = localStorage.getItem("isAuth") === "true";

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
          {products.length > 0 && (
            <div className="product-card">
              <div className="product-details">
                <h5 className="product-title">{products[0].name}</h5>
                <p className="product-price">
                  Starting from ${products[0].starting_price}
                </p>
                <p className="product-description">{products[0].description}</p>
                {isAuth && (
                  <button className="product-bid-button">BID NOW</button>
                )}
              </div>
              <div className="product-image">
                <img src={products[0].image} alt={products[0].name} />
              </div>
            </div>
          )}
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
