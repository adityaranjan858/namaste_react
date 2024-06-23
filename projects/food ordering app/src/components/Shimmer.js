import React from "react";

const Shimmer = () => {
  const iterate = new Array(20).fill(null);

  return (
    <div className="container">
      {/* search and filter btn */}
      <div className="d-flex justify-content-between my-4">
        <div className="shimmer_effect"></div>
        <div className="shimmer_effect"></div>
      </div>
      {/* cards */}
      <div className="d-flex flex-wrap justify-content-between">
        {iterate.map((item, index) => (
          <div
            key={index}
            className="card shimmer_effect_container my-3 h-100 lh-base"
          >
            <img className="card-img-top" />
            <div className="card-body shimmer_effect_body">
              <h4 className="card-title shimmer_effect_item"></h4>
              <h5 className="card-subtitle  shimmer_effect_item mb-2 fw-normal"></h5>
              <h6 className="card-subtitle  shimmer_effect_item mb-2 fw-light"></h6>
              <h6 className="card-subtitle  shimmer_effect_item mb-2 fw-normal pt-1"></h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
