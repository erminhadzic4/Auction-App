import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Layout from "../components/Layout";
import { onLogin } from "../services/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "sweetalert2/dist/sweetalert2.min.css";
import "../styles/Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await onLogin(values);
      auth.login();
      setValues({ email: "", password: "" });
      Swal.fire("Login Successful", response.data.message, "success");

      localStorage.setItem("firstname", response.data.firstname);
      localStorage.setItem("lastname", response.data.lastname);
    } catch (error) {
      setValues({ email: "", password: "" });
      Swal.fire("Login Failed", error.response.data.errors[0].msg, "error");
    }
  };

  return (
    <Layout>
      <div className="login-form">
        <h2 className="login-title">LOGIN</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="input-group">
            <label htmlFor="email" className="label-typography">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="Enter your email"
              autoComplete="off"
              value={values.email}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="input-group label-typography">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="Enter your password"
              autoComplete="off"
              value={values.password}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="remember-me">
            <div className="remember-me-checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="label-typography">
                Remember me
              </label>
            </div>
          </div>
          <button className="login-button">Login</button>
        </form>
        <div className="social-buttons">
          <button className="social-button label-typography">
            <FontAwesomeIcon
              className="social-button-icon-primary"
              icon={faFacebook}
            />{" "}
            Login with Facebook
          </button>
          <button className="social-button label-typography">
            <FontAwesomeIcon
              icon={faGoogle}
              className="social-button-icon-secondary "
            />{" "}
            Login with Gmail
          </button>
        </div>
        <Link to="/forgot-password" className="forgot-password-label">
          Forgot password?
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
