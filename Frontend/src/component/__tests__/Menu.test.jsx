import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "../Menu";

// Mocking localStorage
jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((key) => `"mock value of ${key}"`);
const removeItemSpy = jest.spyOn(window.localStorage.__proto__, 'removeItem');

describe("Menu component", () => {
  afterEach(() => {
    removeItemSpy.mockClear(); // clear the spy after each test
  });

  it("renders Menu correctly", () => {
    const { getByText } = render(
      <Router>
        <Menu />
      </Router>
    );

    expect(getByText("Products")).toBeInTheDocument();
    expect(getByText("Loans")).toBeInTheDocument();
    expect(getByText("User Types")).toBeInTheDocument();
    expect(getByText("Contact Us")).toBeInTheDocument();
    expect(getByText("Logout")).toBeInTheDocument();
  });

  it("calls the logoutUser function on click", () => {
    const { getByText } = render(
      <Router>
        <Menu />
      </Router>
    );

    fireEvent.click(getByText("Logout"));

    expect(removeItemSpy).toHaveBeenCalledWith("email");
  });
});
