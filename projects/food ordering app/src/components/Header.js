import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import Logo from "../../media/logo.png";
import icon from "../../media/user_icon.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={Logo} alt="Loading..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    loginBtn === "Login"
                      ? setLoginBtn("Logout")
                      : setLoginBtn("Login");
                  }}
                >
                  {loginBtn}
                </button>
              </li>
            </ul>
            <div className="right">
              <img className="user_icon" src={icon} alt="Loading..." />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
