import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "../Register";
import UserDataService from "../../services/users";

jest.mock("../../services/users");

describe("Register component", () => {
  it("calls createUser function on button click", () => {
    const createUserMock = jest.fn().mockResolvedValue({ status: 200 });
    UserDataService.createUser = createUserMock;

    render(
      <Router>
        <Register />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("@sce.ac.il");
    const usernameInput = screen.getByPlaceholderText("Enter User Name");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const typeSelect = screen.getByLabelText("I want to sign up as:");
    const registerButton = screen.getByText("Register");

    fireEvent.change(emailInput, { target: { value: "test@sce.ac.il" } });
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(typeSelect, { target: { value: "student" } });
    fireEvent.click(registerButton);

    expect(createUserMock).toHaveBeenCalledWith({
      email: "test@sce.ac.il",
      username: "testuser",
      password: "password123",
      type: "student",
    });

    // Add assertions for navigation if applicable
  });
});
