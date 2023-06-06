import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "../HomePage";

describe("HomePage", () => {
  test("renders the component with correct content", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    const pageTitleElements = screen.getAllByText("Welcome", { exact: false });
    expect(pageTitleElements.length).toBeGreaterThan(0);

    const pageSubtitle = screen.getByText(/To Online storage management of the visual communication department/i);
    expect(pageSubtitle).toBeInTheDocument();

    const loginButton = screen.getByRole("button", { name: /Sign in/i });
    expect(loginButton).toBeInTheDocument();

    const registerButton = screen.getByRole("button", { name: /Sign up/i });
    expect(registerButton).toBeInTheDocument();
  });
});
