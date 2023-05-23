import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "../component/Products";

// Sample test data
const products = [
  {
    name: "Product 1",
    type: "Type A",
    serialNumber: "123456",
    isInPlace: true,
    repairs: [],
  },
  {
    name: "Product 2",
    type: "Type B",
    serialNumber: "789012",
    isInPlace: false,
    repairs: [],
  },
];

test("renders product list correctly", () => {
  const { getByText } = render(
    <Router>
      <Products prod={products} />
    </Router>
  );

  // Check if the product names are rendered
  expect(getByText("Product 1")).toBeInTheDocument();
  expect(getByText("Product 2")).toBeInTheDocument();
});
