import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OneProduct from "../component/OneProduct"

const mockProduct = {
  name: "Product Name",
  type: "Product Type",
  Snumber: "123456",
  place: "true",
};

test("toggles the detail section when clicked", () => {
  render(
    <MemoryRouter>
      <table>
        <tbody>
          <OneProduct product={mockProduct} />
        </tbody>
      </table>
    </MemoryRouter>
  );

  // Simulate click on the component to toggle detail
  const component = screen.getByRole("row");
  fireEvent.click(component);

  // Assert that the detail section is toggled
  expect(screen.getByText("Product Name")).toBeInTheDocument();
  expect(screen.getByText("Product Type")).toBeInTheDocument();
  expect(screen.getByText("123456")).toBeInTheDocument();
});
