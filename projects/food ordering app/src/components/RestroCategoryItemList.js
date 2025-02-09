import React from "react";
import { RES_MENU_IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const RestroCategoryItemList = ({ data }) => {
  console.log(data);
  const { name, price, description, defaultPrice, imageId, ratings } = data;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div data-testid="foodItems">
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-100">
            <p>{name}</p>
            <span>Rs.{price ? price / 100 : defaultPrice / 100}</span>
            <p>
              Ratings : {ratings.aggregatedRating.rating}&nbsp;(
              {ratings.aggregatedRating.ratingCount})
            </p>
            <p>
              Description : <i>{description}</i>
            </p>
          </div>

          <div className="">
            <div className="d-flex justify-content-end">
              <img
                src={RES_MENU_IMG_CDN + imageId}
                alt=""
                className="object-fit-cover w-50 h-50"
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" onClick={() => handleAddItem(data)}>
                Add+
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default RestroCategoryItemList;
