import { useEffect } from "react";
import { SWIGGY_RESTAURANT_API } from "../utils/constant";
import { useParams } from "react-router";

const RestaurantMenuPage = () => {
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(SWIGGY_RESTAURANT_API);
  //     const value = await data.json();
  //     console.log(value);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const { resId } = useParams();

  return (
    <div className="menu-section">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Briyani</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenuPage;
