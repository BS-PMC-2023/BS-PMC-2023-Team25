import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewLoan from "../NewLoan";

test("renders the NewLoan component", () => {
  render(
    <MemoryRouter>
      <NewLoan />
    </MemoryRouter>
  );

  // Assert that the component is rendered
  const component = screen.getByText("השאלה חדשה");
  expect(component).toBeInTheDocument();
});

test("checks the checkbox and enables the button when clicked", () => {
  render(
    <MemoryRouter>
      <NewLoan />
    </MemoryRouter>
  );

  // Simulate checkbox click
  const checkbox = screen.getByLabelText("אני מאשר/ת את תנאי השימוש");
  checkbox.click();

  // Assert that the checkbox is checked and button is enabled
  expect(checkbox.checked).toBe(true);
  expect(screen.getByText("שלח")).toBeEnabled();
});
