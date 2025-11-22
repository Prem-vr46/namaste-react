import { CDN_URL } from "../utils/constant";
import { useState } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card m-4 p-4 w-[250px] text-center" style={styleCard}>
      <img
        alt="res-img"
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
