import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";

describe("HomePage", () => {
  test("renders the component with correct content", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const pageTitle = screen.getByText(/ברוך הבא/i);
    expect(pageTitle).toBeInTheDocument();

    const pageSubtitle = screen.getByText(
      /לניהול אחסון מקוון של המחלקה תקשורת חזותית/i
    );
    expect(pageSubtitle).toBeInTheDocument();

    const loginButton = screen.getByRole("button", { name: /להתחבר/i });
    expect(loginButton).toBeInTheDocument();

    const registerButton = screen.getByRole("button", { name: /להירשם/i });
    expect(registerButton).toBeInTheDocument();
  });
});
