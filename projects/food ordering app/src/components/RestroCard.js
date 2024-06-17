import React from "react";
import { RES_IMG_CDN } from "../utils/constants";

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

  return (
    <>
      <div class="card my-3 h-100 lh-base">
        <img
          src={RES_IMG_CDN + cloudinaryImageId}
          class="card-img-top"
          alt="res-logo"
        />
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <h5 class="card-subtitle mb-2 fw-normal">
            <i class="fa-solid fa-star"></i>
            {avgRatingString} <i class="fa-solid fa-circle"></i> {sla.slaString}
          </h5>
          <h6 class="card-subtitle mb-2 fw-light">{cuisines.join(",")}</h6>
          <h6 class="card-subtitle mb-2 fw-normal pt-1">{costForTwo}</h6>
        </div>
      </div>
    </>
  );
};

export default RestroCard;
