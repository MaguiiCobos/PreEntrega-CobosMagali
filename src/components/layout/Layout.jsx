
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
        <Outlet />     {/* es como children  */}
      <Footer />
    </div>
  );
}

export default Layout;
