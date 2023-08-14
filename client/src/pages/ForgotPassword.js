import React, { useState } from "react";
import "sweetalert2/dist/sweetalert2.min.css";
import "../styles/ForgotPassword.css";
import Layout from "../components/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {};
  return (
    <Layout>
      <div className="forgot-password-form">
        <h2 className="forgot-password-title">FORGOT PASSWORD</h2>
        <p className="forgot-password-text">
          Lost your password? Please enter your email adress. You will receive a
          link to create a new password via email.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="label-typography">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="forgot-password-button">RESET PASSWORD</button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
