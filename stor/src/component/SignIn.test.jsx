import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./SignIn";

describe("SignIn", () => {
  it("should render SignIn component", () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <SignIn />
      </Router>
    );

    // Assert the presence of form elements
    expect(getByText("עמוד התחברות")).toBeInTheDocument();
    expect(getByPlaceholderText("הזן שם משתמש/ת")).toBeInTheDocument();
    expect(getByPlaceholderText("הזן סיסמא")).toBeInTheDocument();
    expect(getByText("כניסה")).toBeInTheDocument();
  });

  it("should update name and password state on input change", () => {
    const { getByPlaceholderText } = render(
      <Router>
        <SignIn />
      </Router>
    );

    // Simulate input change events
    const nameInput = getByPlaceholderText("הזן שם משתמש/ת");
    fireEvent.change(nameInput, { target: { value: "John" } });

    const passwordInput = getByPlaceholderText("הזן סיסמא");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Assert the updated state values
    expect(nameInput.value).toBe("John");
    expect(passwordInput.value).toBe("password123");
  });

  it("should call setShowMenu and navigate to /products on button click", () => {
    const setShowMenu = jest.fn();
    const { getByText } = render(
      <Router>
        <SignIn setShowMenu={setShowMenu} />
      </Router>
    );

    const button = getByText("כניסה");
    fireEvent.click(button);

    // Assert that setShowMenu is called and navigation to /products occurs
    expect(setShowMenu).toHaveBeenCalledWith(true);
    expect(window.location.pathname).toBe("/products");
  });
});
