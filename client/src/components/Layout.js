import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
