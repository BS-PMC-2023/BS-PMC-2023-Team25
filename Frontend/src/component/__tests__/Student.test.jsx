import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Student from "../Student";

describe("Student component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Student />
      </MemoryRouter>
    );
  });

  test("renders the welcome message", () => {
    const welcomeMessage = screen.getByText("Glad To See You Again!");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders the action prompt", () => {
    const actionPrompt = screen.getByText("What Would You Like To Do?");
    expect(actionPrompt).toBeInTheDocument();
  });
});
