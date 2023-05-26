import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Manager from "../Manager";

describe("Manager component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Manager />
      </MemoryRouter>
    );
  });

  test("renders the welcome message", () => {
    const welcomeMessage = screen.getByText(/שמח לראות אותך שוב/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders the action prompt", () => {
    const actionPrompt = screen.getByText(/מה תרצה לעשות/i);
    expect(actionPrompt).toBeInTheDocument();
  });
});
