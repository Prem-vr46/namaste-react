import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import MOCK_DATA_HOC from "../mocks/resCardMockHOC.json";
import { withPromotionalFun } from "../RestaurantCard";

test("Should render RestaurantCard comp with data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const cardDetail = screen.getByText("Chinese Wok");
  expect(cardDetail).toBeInTheDocument();
});

test("Should render RestaurantCard comp with Veg label", () => {
  const VegRestaurant = withPromotionalFun(RestaurantCard);
  render(<VegRestaurant resData={MOCK_DATA_HOC} />);

  const vegDetail = screen.getByText("Veg");
  expect(vegDetail).toBeInTheDocument();
});
