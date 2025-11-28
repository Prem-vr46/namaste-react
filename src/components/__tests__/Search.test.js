import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockHomeData.json";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("Should render body comp", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const data = screen.getAllByTestId("resCard");
  expect(data.length).toBe(3);
});

test("should filter top rates rest", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const filterBtn = screen.getByRole("button", {
    name: "Top rated Restaurants",
  });

  fireEvent.click(filterBtn);
  const resDiv = screen.getAllByTestId("resCard");
  //console.log(resDiv.length);
  expect(resDiv.length).toBe(11);
});
