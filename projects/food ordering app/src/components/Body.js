import React, { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";

const Body = () => {
  // ***************************************
  // Refactor the onClick of top restaurant button

  // filterTopRes = () => {
  //   const topRes = resList.filter((res) => res.info.avgRating > 4.2);
  //   console.log(topRes);
  // };

  // ***************************************
  // copying the original data from "resList" to listOfRestaurants, also using "let " because we can modify the data.
  // let listOfRestaurants = resList;

  // ****************************************
  // we can also write useState() as different way :
  // it is just an destructuring
  // const arr = useState(resList);

  // first way
  // const [restaurantsList, setRestaurantsList] = arr;

  // second way
  // const restaurantsList = arr[0];
  // const setRestaurantsList = arr[1];

  // ****************************************
  // Below one was using mockdata
  // const [restaurantsList, setRestaurantsList] = useState(resList);

  // *******************************************
  // using live data and this array of objects so used empty array.
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchInp, setSearchInp] = useState("");

  // search Input handler
  const searchInpHandler = (event) => {
    setSearchInp(event.target.value);
  };

  const submnitHandler = (event) => {
    event.preventDefault();
    const filteredList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInp.toLowerCase())
    );
    setRestaurantsList(filteredList);
  };

  // here once the body component would have been rendered , we will fetch the data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantsList(
      //! Always use Optional Chaining (?.)
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="app_body ">
      {/* Restaurant Card */}
      <div className="container res-container my-5">
        <div className="d-flex flex-wrap  justify-content-between flex-column flex-md-row align-items-center">
          <div className="">
            {/* Top Restaurant Button */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const filteredList = resList.filter(
                  (res) => res.info.avgRating > 4.2
                );
                // console.log(filteredList)
                setRestaurantsList(filteredList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>

          <div>
            {/* Search Bar */}
            <form
              className="d-flex searchBar my-3 mx-auto"
              onSubmit={submnitHandler}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search By Name"
                aria-label="Search"
                name="search"
                value={searchInp}
                onChange={searchInpHandler}
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
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
          {restaurantsList.map((restaurant) => (
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
