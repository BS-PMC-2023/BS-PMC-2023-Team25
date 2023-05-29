import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewLoan from "../NewLoan";
import { act } from "react-dom/test-utils"; // Import the 'act' function

test("renders the NewLoan component", () => {
  act(() => {
    render(
      <MemoryRouter>
        <NewLoan />
      </MemoryRouter>
    );
  });

  // Assert that the component is rendered
  const component = screen.getByText("השאלה חדשה");
  expect(component).toBeInTheDocument();
});

test("checks the checkbox and enables the button when clicked", () => {
  act(() => {
    render(
      <MemoryRouter>
        <NewLoan />
      </MemoryRouter>
    );
  });

  // Simulate checkbox click wrapped in act(...)
  act(() => {
    const checkbox = screen.getByLabelText("אני מאשר/ת את תנאי השימוש");
    checkbox.click();
  });

  // Assert that the checkbox is checked and button is enabled
  expect(screen.getByLabelText("אני מאשר/ת את תנאי השימוש").checked).toBe(true);
  expect(screen.getByText("שלח")).toBeEnabled();
});
