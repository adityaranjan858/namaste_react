import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "./media/logo.png";
import icon from "./media/user_icon.png";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="left">
          <img className="logo" src={Logo} alt="Loading..." />
        </div>
        <div className="middle">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="right">
          <img className="user_icon" src={icon} alt="Loading..." />
        </div>
      </div>
      <h1 className="text-center my-5 display-1">Header Component</h1>
    </>
  );
};

export default Header;
