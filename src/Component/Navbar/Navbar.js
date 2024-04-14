import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <div onClick={() => window.location.reload()}>
          <img src={Logo} alt="Institute Logo" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
