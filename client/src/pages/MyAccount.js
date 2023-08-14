import React, { useEffect, useState } from "react";
import "../styles/Styles.css";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { fetchProtectedInfo, onLogout } from "../services/auth";
import { unauthenticateUser } from "../redux/slices/authSlice";

const MyAccount = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [protectedData, setProtectedData] = useState(null);

  const logout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
      localStorage.removeItem("firstname");
      localStorage.removeItem("lastname");
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
      <h2>{protectedData}</h2>

      <button onClick={() => logout()}>Logout</button>
    </Layout>
  );
};

export default MyAccount;
