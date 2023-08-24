import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AuthProvider } from "./context/AuthContext";

const container = document.getElementById("root");
const root = createRoot(container);

const firebaseConfig = {
  apiKey: "AIzaSyB2ExD6MR6XGII-boypOe1Xpwc-5j64Ns8",
  authDomain: "auctionapp-85291.firebaseapp.com",
  projectId: "auctionapp-85291",
  storageBucket: "auctionapp-85291.appspot.com",
  messagingSenderId: "581054416630",
  appId: "1:581054416630:web:7f7652e332920573f8ced7",
  measurementId: "G-KXKJMRHQS3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
