import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "../styles/Register.css";
import Layout from "../components/Layout";
import { onRegistration } from "../services/auth";

const Register = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await onRegistration(values);
      console.log(response.data.message);
      setValues({ firstname: "", lastname: "", email: "", password: "" });
      Swal.fire(
        "Registration Successful",
        response.data.message,
        "success"
      ).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire(
        "Registration Failed",
        error.response.data.errors[0].msg,
        "error"
      );
      console.log(error.response.data.errors);
    }
  };

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="register-form">
        <h2 className="register-title">REGISTER</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="input-group">
            <label htmlFor="firstName" className="label-typography">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstname"
              className="input-field"
              placeholder="Enter your first name"
              autoComplete="off"
              value={values.firstname}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName" className="label-typography">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastname"
              className="input-field"
              placeholder="Enter your last name"
              autoComplete="off"
              value={values.lastname}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="label-typography">
              Enter Email
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
          <button className="register-button">Register</button>
        </form>
        <div className="social-buttons">
          <button className="social-button label-typography">
            <FontAwesomeIcon
              className="social-button-icon-primary"
              icon={faFacebook}
            />{" "}
            Register with Facebook
          </button>
          <button className="social-button label-typography">
            <FontAwesomeIcon
              icon={faGoogle}
              className="social-button-icon-secondary"
            />{" "}
            Register with Gmail
          </button>
        </div>
        <span className="already-have-container">
          Already have an account?
          <a href="/login" className="already-have-label">
            Login
          </a>
        </span>
      </div>
    </Layout>
  );
};

export default Register;
