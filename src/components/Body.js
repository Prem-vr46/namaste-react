import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotionalFun } from "./RestaurantCard";
import resList from "../utils/mockData";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import usePremHook from "../utils/usePremHook";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //console.log("render");
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

  const VegRestaurant = withPromotionalFun(RestaurantCard);
  const fetchData = async () => {
    const value = await fetch(SWIGGY_API);
    const resultJson = await value.json();
    //console.log(resultJson);
    setListOfRestaurants(
      resultJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      resultJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const { setUserName, loggedInUser } = useContext(UserContext);

  const onlineData = useOnlineStatus();
  if (onlineData === false) {
    return <h1>You are offline !</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(listOfRestaurants, "res list");
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
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res?.info?.avgRating >= 4.3;
              });
              console.log(filteredList);
              //setListOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>User name:</label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((el) => (
          <Link to={"/restaurants/" + el.info.id} key={el.info.id}>
            {el.info.veg ? (
              <VegRestaurant resData={el.info} />
            ) : (
              <RestaurantCard resData={el.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
