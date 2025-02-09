import React, { useContext } from "react";
import { RES_IMG_CDN } from "../utils/constants";
import { UserContext } from "../utils/UserContext";
// import RestroCard from "./RestroCard";

const RestroCard = (props) => {
  // using props
  // const { resName, cuisine } = props

  // using live data
  const { resDataList } = props;
  // console.log(resDataList);
  // console.log(resDataList[0].info.name);

  const {
    name,
    avgRatingString,
    cuisines,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = resDataList.info;

  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <div data-testid="resData" className="card my-3 h-100 lh-base">
        <img
          src={RES_IMG_CDN + cloudinaryImageId}
          className="card-img-top"
          alt="res-logo"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-subtitle mb-2 fw-normal">
            <i className="fa-solid fa-star"></i>
            {avgRatingString} <i className="fa-solid fa-circle"></i>{" "}
            {sla?.slaString}
          </h5>
          <h6 className="card-subtitle mb-2 fw-light">{cuisines.join(",")}</h6>
          <h6 className="card-subtitle mb-2 fw-normal pt-1">{costForTwo}</h6>
          <h6 className="card-subtitle mb-2 fw-normal pt-1">{loggedInUser}</h6>
        </div>
      </div>
    </>
  );
};

//  Higher order component

export const withRestroOPenStatus = (RestroCard) => {
  return (props) => {
    return (
      <>
        <label htmlFor="open">Restaurant is Open!!</label>
        <RestroCard {...props} />
      </>
    );
  };
};

export default RestroCard;
