import React, { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

  const onlineSts = useOnlineStatus();

  // search Input handler
  const searchInpHandler = (event) => {
    setSearchText(event.target.value);
  };

  const submnitHandler = (event) => {
    event.preventDefault();
    // never ever change the main list, so we can filter from there, like below, and use filteredList for map function.
    const filteredList = restaurantsList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredList);
    setFilteredRestaurantsList(filteredList);
  };

  // here once the body component would have been rendered , we will fetch the data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    // ! update both the list, one for main list and second for using as filter

    // * main list for filter and all
    setRestaurantsList(
      //! Always use Optional Chaining (?.)
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // * using for show the data
    setFilteredRestaurantsList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineSts === false) {
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }

  // **************************************
  // * conditional rendering using if/else
  // if (restaurantsList.length === 0) {
  //   return <h1 className="text-white text-center my-5">Loading.....</h1>;
  // }

  // **************************************
  // * conditional rendering using ternery operator
  return restaurantsList && restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
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
                const filteredList = restaurantsList.filter(
                  (res) => res.info.avgRating > 4.2
                );
                // console.log(filteredList);
                setFilteredRestaurantsList(filteredList);
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
                value={searchText}
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
          {filteredRestaurantsList && filteredRestaurantsList.length > 0 ? (
            filteredRestaurantsList.map((restaurant) => (
              <div key={restaurant.info.id} className="col">
                <Link
                  to={"/restaurants/" + restaurant.info.id}
                  className="text-decoration-none"
                >
                  <RestroCard resDataList={restaurant} />
                </Link>
              </div>
            ))
          ) : (
            <h2 className="w-100 my-5 text-white text-center">
              {filteredRestaurantsList && filteredRestaurantsList.length === 0
                ? "Sorry, no restaurants found. Please try a different search."
                : ""}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
