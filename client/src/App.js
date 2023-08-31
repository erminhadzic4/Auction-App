import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import AddProduct from "./components/AddProduct";

const PrivateRoutes = () => {
  const auth = useAuth();
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const RestrictedRoutes = () => {
  const auth = useAuth();
  return !auth.isAuthenticated ? <Outlet /> : <Navigate to="/my-account" />;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/shop/:id" element={<ProductDetails />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-account/add-product" element={<AddProduct />} />
          </Route>

          <Route element={<RestrictedRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
