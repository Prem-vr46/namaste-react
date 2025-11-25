import { useEffect } from "react";
import { SWIGGY_RESTAURANT_API } from "../utils/constant";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

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
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="menu-section">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Briyani</li>
        <li>Coke</li>
      </ul>
      <div className="border border-black">
        <h2>chicken briyani</h2>
        <button
          className="border border-black p-3"
          onClick={() => handleAddItem("chicken briyani")}
        >
          Add
        </button>
      </div>
      <div className="border border-black">
        <h2>Grill chicken</h2>
        <button
          className="border border-black p-3"
          onClick={() => handleAddItem("Grill chicken")}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
