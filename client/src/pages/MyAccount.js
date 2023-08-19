import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchProtectedInfo, onLogout } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Styles.css";

const MyAccount = () => {
  const auth = useAuth();
  const navigate = useNavigate();

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
      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    protectedInfo();
  }, []);

  return loading ? (
    <Layout>
      <h1>Loading ...</h1>
    </Layout>
  ) : (
    <Layout>
      <h1>My Account</h1>
      <div>
        <p>ID: {protectedData.id}</p>
        <p>First Name: {protectedData.firstname}</p>
        <p>Last Name: {protectedData.lastname}</p>
        <p>Email: {protectedData.email}</p>
      </div>

      <button onClick={() => logout()}>Logout</button>
    </Layout>
  );
};

export default MyAccount;
