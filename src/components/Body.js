import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import usePremHook from "../utils/usePremHook";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  console.log("render");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // const premDetails = usePremHook();
  // if (premDetails !== null) {
  //   setListOfRestaurants(
  //     premDetails?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  //   setFilteredRestaurant(
  //     premDetails?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  // }

  const fetchData = async () => {
    const value = await fetch(SWIGGY_API);
    const resultJson = await value.json();
    setListOfRestaurants(
      resultJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      resultJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineData = useOnlineStatus();
  if (onlineData === false) {
    return <h1>You are offline !</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredValue = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredValue);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((el) => (
          <Link to={"/restaurants/" + el.info.id} key={el.info.id}>
            <RestaurantCard resData={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
