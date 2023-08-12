import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import MyAccount from "./pages/MyAccount";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Login from "./pages/Login";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import Register from "./pages/Register";
// import LoginForm from "./pages/LoginForm";
// import RegisterForm from "./pages/RegisterForm";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
