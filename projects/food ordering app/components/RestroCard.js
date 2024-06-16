import React from "react";

const RestroCard = ({ resName, cuisine }) => {
  return (
    <>
      <div class="card my-3">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/86086acc172bc3b8efda352459cd11c8"
          class="card-img-top"
          alt="res-logo"
        />
        <div class="card-body">
          <h4 class="card-title">{resName}</h4>
          <h5 class="card-subtitle mb-2 fw-normal">4.4 Stars</h5>
          <h5 class="card-subtitle mb-2 fw-normal">38 minutes</h5>
          <h6 class="card-subtitle mb-2 fw-light">{cuisine}</h6>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default RestroCard;
