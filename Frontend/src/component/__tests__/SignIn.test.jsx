import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "../SignIn";
import UserDataService from "../../services/users";

jest.mock("../../services/users");

describe("SignIn component", () => {
  it("should render SignIn component", () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <SignIn />
      </Router>
    );

    // Assert the presence of form elements
    expect(getByText("Sign in")).toBeInTheDocument();
    expect(getByPlaceholderText("@sce.ac.il")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("should update email and password state on input change", () => {
    const { getByPlaceholderText } = render(
      <Router>
        <SignIn />
      </Router>
    );

    // Simulate input change events
    const emailInput = getByPlaceholderText("@sce.ac.il");
    fireEvent.change(emailInput, { target: { value: "test@sce.ac.il" } });

    const passwordInput = getByPlaceholderText("Enter Password");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

  });

  it("should call loginUser function and navigate on button click", () => {
    const loginUserMock = jest.fn().mockResolvedValue({ status: 200 });
    UserDataService.loginUser = loginUserMock;

    const { getByPlaceholderText, getByText } = render(
      <Router>
        <SignIn />
      </Router>
    );

    const emailInput = getByPlaceholderText("@sce.ac.il");
    const passwordInput = getByPlaceholderText("Enter Password");
    const loginButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "test@ac.sce.ac.il" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    expect(loginUserMock).toHaveBeenCalledWith(
      "test@ac.sce.ac.il",
      "password123"
    );

    // Add assertions for navigation if applicable
  });
});
