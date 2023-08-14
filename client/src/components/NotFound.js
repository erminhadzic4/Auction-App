import Layout from "./Layout";
import React from "react";
import "../styles/NotFound.css";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <Layout>
      <div className="error-404-container">
        <img src="404.png" className="error-404" alt="404"></img>
        <h1>Oooops! Looks like the page is not found.</h1>
        <p>
          <Link to={location.state?.from || "/"}>GO BACK</Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
