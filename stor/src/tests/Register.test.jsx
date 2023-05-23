import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignIn from "../component/SignIn";

test("renders the SignIn component", () => {
  render(
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>
  );

  // Assert that the input fields are rendered
  expect(screen.getByPlaceholderText("הזן שם משתמש/ת")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("הזן סיסמא")).toBeInTheDocument();

  // Assert that the submit button is rendered
  expect(screen.getByText("כניסה")).toBeInTheDocument();
});

test("updates input values on change", () => {
  render(
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>
  );

  // Find the input fields
  const usernameInput = screen.getByPlaceholderText("הזן שם משתמש/ת");
  const passwordInput = screen.getByPlaceholderText("הזן סיסמא");

  // Simulate input changes
  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  // Assert that input values are updated
  expect(usernameInput.value).toBe("testuser");
  expect(passwordInput.value).toBe("testpassword");
});
