import React from "react";

const RestroCard = (props) => {
  // using props
  // const { resName, cuisine } = props

  // using live data
  const { resDataList } = props;
  // console.log(resDataList);
  // console.log(resDataList[0].info.name);

  const { name, avgRatingString, cuisines, cloudinaryImageId } =
    resDataList.info;

  return (
    <>
      <div class="card my-3">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
            cloudinaryImageId
          }
          class="card-img-top"
          alt="res-logo"
        />
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <h5 class="card-subtitle mb-2 fw-normal">{avgRatingString} Stars</h5>
          {/* <h5 class="card-subtitle mb-2 fw-normal">{resData.sla.slaString}</h5> */}
          <h6 class="card-subtitle mb-2 fw-light">{cuisines.join(",")}</h6>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default RestroCard;
