import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 220px)" }}>
        <Outlet /> {/* es como children  */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
