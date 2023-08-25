import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { getProductDetails } from "../services/utils";
import Swal from "sweetalert2";
import formatTimeLeft from "../services/dateUtil";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [bidAmount, setBidAmount] = useState(null);
  const [bidsCount, setbidsCount] = useState(null);
  const [selectedItem, setSelectedItem] = useState("details");
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  useEffect(() => {
    getProductDetails(id)
      .then((response) => {
        const data = response.data;
        if (data.success) {
          setProduct(data.product);
          setbidsCount(data.bidCount);
        } else {
          navigate("/404");
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        navigate("/404");
      });
  }, [id, navigate]);

  const handleBidChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handlePlaceBid = () => {
    if (
      !localStorage.getItem("isAuth") ||
      localStorage.getItem("isAuth") !== "true"
    )
      Swal.fire({
        title: "Login Required",
        text: "You must be logged in to place a bid.",
        icon: "info",
      });
    return;
  };

  return (
    <Layout>
      <div className="container-title">
        <p className="title-left">{product?.name}</p>
        <span>
          <Link to="/shop" className="title-right-shop">
            Shop
          </Link>
          <span className="title-right-icon">
            <FaArrowRight />
          </span>
          <span className="title-right-link">Single product</span>
        </span>
      </div>
      <div className="product-details-container">
        <div className="product-details-left">
          <img
            src={product?.image}
            alt={product?.name}
            className="product-image"
          />
        </div>
        <div className="product-details-right">
          <p className="product_title">{product?.name}</p>
          <span className="starting-text">Starts from</span>
          <span className="starting-price"> ${product?.starting_price}</span>
          <div className="product-details-info-container">
            <div className="product-details-info-box">
              <p>
                <span>Highest bid: </span>
                <span className="starting-price">
                  ${product?.current_price}
                </span>
              </p>
              <p>
                <span>Number of bids: </span>
                <span className="starting-price">{bidsCount}</span>
              </p>
              <p>
                <span>Time left: </span>
                <span className="starting-price">
                  {formatTimeLeft(product?.ending_time)}
                </span>
              </p>
            </div>
          </div>
          <div className="place-bid-section">
            <input
              className="input-field-bid"
              type="number"
              placeholder={`Enter ${
                parseFloat(product?.current_price) + 1
              }$ or higher`}
              value={bidAmount}
              onChange={handleBidChange}
            />
            <button className="btn-bid" onClick={handlePlaceBid}>
              PLACE BID
            </button>
          </div>
          <div className="filter-menu-3">
            <div
              className={`menu-item ${
                selectedItem === "details" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("details")}
            >
              Details
            </div>
            <div
              className={`menu-item ${
                selectedItem === "seller-information" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("seller-information")}
            >
              Seller information
            </div>
            <div
              className={`menu-item ${
                selectedItem === "customer-reviews" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("customer-reviews")}
            >
              Customer reviews
            </div>
          </div>
          <hr className="filter-divider" />
          <p className="details-text">{product?.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
