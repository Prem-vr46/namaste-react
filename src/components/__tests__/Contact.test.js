import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Group contact page test cases", () => {
  beforeAll(() => {
    console.log("before all");
  });
  beforeEach(() => {
    console.log("before each");
  });
  afterAll(() => {
    console.log("after all");
  });
  test("Should load contact us comp", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact comp", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input box inside contact comp", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
  });
});
