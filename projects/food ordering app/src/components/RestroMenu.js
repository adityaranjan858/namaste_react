import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_API, RES_MENU_IMG_CDN } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCategory from "./RestroCategory";

const RestroMenu = () => {
  // const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(2);

  // ! Now, There is no need to fetch data inside the component, we can make a custom hook and use it here.
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(RES_MENU_API + resId);
  //   const jsonData = await data.json();
  //   setResInfo(jsonData.data);
  // };

  const resInfo = useRestroMenu(resId);
  // console.log(resInfo);
  if (resInfo.length === 0) return <Shimmer />;

  const itemCards =
    resInfo?.cards && resInfo.cards.length > 4
      ? resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      : null;

  const categoryTitle =
    resInfo?.cards && resInfo.cards.length > 4
      ? resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      : null;

  const {
    name,
    city,
    locality,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    feeDetails,
    sla,
    labels,
  } =
    resInfo?.cards && resInfo.cards.length > 0
      ? resInfo.cards[2]?.card?.card?.info
      : null;

  return (
    <div className="menu container">
      <div className="mb-5 pb-3 border-bottom border-5 border-success-subtle">
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <h1>{name}</h1>
            <h3>
              {avgRating}({totalRatingsString})
            </h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>
              {locality}, {areaName}, {city}
            </h5>
          </div>
          <div>
            <h4>{costForTwoMessage}</h4>
            <h6>
              {labels[0].title} : {sla.slaString}
            </h6>
            <h6>
              {feeDetails.title} : {feeDetails.message}
            </h6>
          </div>
        </div>
      </div>
      <h2 className="pb-2 text-decoration-underline text-center mb-5">Menu</h2>

      {categoryTitle &&
        categoryTitle.length > 0 &&
        categoryTitle.map((category, index) =>
          category.card.card["@type"].includes(
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) ? (
            <RestroCategory
              key={category.card.card.title}
              data={category}
              showItems={index === showIndex ? true : false}
              setShowIndexes={() => setShowIndex(index)}
            />
          ) : (
            ""
          )
        )}

      {/* <div>
        {itemCards &&
          itemCards.length > 0 &&
          itemCards.map((items) => (
            <div key={items.card.info.id}>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <ul>
                    <li>{items.card.info.name}</li>
                    <li>Rs. {items.card.info.price / 100} </li>
                    <li>
                      {items.card.info.ratings.aggregatedRating.rating}&nbsp;(
                      {items.card.info.ratings.aggregatedRating.ratingCount})
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src={`${RES_MENU_IMG_CDN + items.card.info.imageId}`}
                    alt=""
                  />
                </div>
              </div>

              <hr />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default RestroMenu;
