import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  FaArrowRight,
  FaUser,
  FaStore,
  FaListAlt,
  FaHeart,
  FaCog,
  FaPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { fetchProtectedInfo, onLogout } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import Profile from "../components/Profile";
import "../styles/Styles.css";
import "../styles/MyAccount.css";

const MyAccount = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const [loading, setLoading] = useState(true);
  const [protectedData, setProtectedData] = useState(null);

  const logout = async () => {
    try {
      await onLogout();
      auth.logout();
      navigate("/login");
    } catch (error) {
      console.log(error.response);
    }
  };

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();
      setProtectedData(data.info);
      console.log(data.info);
      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    protectedInfo();
  }, []);

  const handleAddItemClick = () => {
    navigate("/my-account/add-product");
  };

  return (
    <Layout>
      <div className="container-title">
        <p className="title-left">Profile</p>
        <span>
          <Link to="/my-account" className="title-right-home">
            My Account
          </Link>
          <span className="title-right-icon">
            <FaArrowRight />
          </span>
          <span className="title-right-link">Profile</span>
        </span>
      </div>
      <div className="profile-form">
        <div className="top-buttons">
          <div className="left-buttons">
            <button className="primary-button">
              <FaUser className="faIcons" /> Profile
            </button>
            <button className="secondary-button">
              <FaStore className="faIcons" /> Seller
            </button>
            <button className="secondary-button">
              <FaListAlt className="faIcons" /> Bids
            </button>
            <button className="secondary-button">
              <FaHeart className="faIcons" /> Wishlist
            </button>
            <button className="secondary-button">
              <FaCog className="faIcons" /> Settings
            </button>
          </div>
          <button className="add-item-button" onClick={handleAddItemClick}>
            <FaPlus className="faPlus" /> ADD ITEM
          </button>
        </div>
        <Profile></Profile>
      </div>
    </Layout>
  );
};

export default MyAccount;
