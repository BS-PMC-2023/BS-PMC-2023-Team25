import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewLoan from "../NewLoan";

test("renders the NewLoan component", () => {
  render(
    <MemoryRouter>
      <NewLoan />
    </MemoryRouter>
  );

  // Assert that the component is rendered
  const component = screen.getByText("New Loan");
  expect(component).toBeInTheDocument();
});

test("checks the checkbox and enables the button when clicked", () => {
  render(
    <MemoryRouter>
      <NewLoan />
    </MemoryRouter>
  );

  // Simulate checkbox click
  const checkbox = screen.getByLabelText("I Accept the terms of use");
  fireEvent.click(checkbox);

  // Assert that the checkbox is checked and button is enabled
  expect(checkbox.checked).toBe(true);
  expect(screen.getByText("Submit")).toBeEnabled();
});
