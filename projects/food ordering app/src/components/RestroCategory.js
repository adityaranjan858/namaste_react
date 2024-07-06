import React, { useState } from "react";
import RestroCategoryItemList from "./RestroCategoryItemList";

const RestroCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const title = data?.card?.card?.title;
  const itemLists = data?.card?.card?.itemCards;

  const showItemsHandler = () => {
    setShowItems(!showItems);
  };

  return (
    <>
      <div
        className=" border-bottom border-bottom border-5 w-75 p-2 m-auto category_title"
        onClick={showItemsHandler}
      >
        <div className="d-flex justify-content-between">
          <div className="fw-bold fs-4">{title}</div>
          <div>
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>
        </div>
        {showItems &&
          itemLists &&
          itemLists.length > 0 &&
          itemLists.map((items) => (
            <RestroCategoryItemList
              key={items.card.info.id}
              data={items.card.info}
            />
          ))}
      </div>
    </>
  );
};

export default RestroCategory;
