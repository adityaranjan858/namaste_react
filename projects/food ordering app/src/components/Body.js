import React from "react";
import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="app_body ">
      {/* Search Bar */}
      <form class="d-flex searchBar my-3 mx-auto">
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
        <div className="row res-card row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {/* Using props */}
          {/* <div className="col-md-3">
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
          </div> */}

          {/* Using Live data */}
          {resList.map((restaurant) => (
            <div className="col">
              <RestroCard key={restaurant.id} resDataList={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
