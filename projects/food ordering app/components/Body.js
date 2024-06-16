import React from "react";
import RestroCard from "./RestroCard";

const Body = () => {
  return (
    <div className="app_body ">
      {/* Search Bar */}
      <form class="d-flex w-50 mx-auto">
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

      {/* Restaurant Card */}
      <div className="container res-container my-5">
        <div className="row res-card">
          <div className="col-md-3">
            <RestroCard
              resName="Champaran Meat House"
              cuisine="Kerala, Biryani, Beverages, North Indian"
            />
          </div>
          <div className="col-md-3">
            <RestroCard
              resName="KFC"
              cuisine="Burger, crispy chicken, Beverages"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
