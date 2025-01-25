import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
import Logo from "../../media/logo.png";
import icon from "../../media/user_icon.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const status = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={Logo} alt="Loading..." />
          </Link>
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
                <Link className="nav-link " aria-current="page" to="">
                  Online status
                  {status === true ? (
                    <i className="fa-solid fa-circle-check ps-1 text-success"></i>
                  ) : (
                    <i className="fa-solid fa-circle-check ps-1 text-danger"></i>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart-({cartItems.length} items)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/grocery">
                  Grocery
                </Link>
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
              <li className="nav-item">
                <Link className="nav-link" to="">
                  {loggedInUser}
                </Link>
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
