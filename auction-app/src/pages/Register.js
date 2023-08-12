import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./Register.css";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        firstname,
        lastname,
        email,
        password,
      });
      Swal.fire("Registration Successful", response.data.message, "success");
    } catch (error) {
      Swal.fire("Registration Failed", error.response.data.error, "error");
    }
  };

  return (
    <div className="register-form">
      <h2 className="register-title">REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName" className="label-typography">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="input-field"
            placeholder="Enter your first name"
            autoComplete="off"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName" className="label-typography">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="input-field"
            placeholder="Enter your last name"
            autoComplete="off"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="label-typography">
            Enter Email
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
        <div className="input-group label-typography">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Enter your password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default Register;
