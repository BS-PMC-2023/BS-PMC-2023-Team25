import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Teacher from "../Teacher";

describe("Teacher component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Teacher />
      </MemoryRouter>
    );
  });

  test("renders the welcome message", () => {
    const welcomeMessage = screen.getByText(/Glad To See You Again!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders the action prompt", () => {
    const actionPrompt = screen.getByText(/What Would You Like To Do?/i);
    expect(actionPrompt).toBeInTheDocument();
  });
});
