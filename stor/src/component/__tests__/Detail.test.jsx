import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Detail from "../Detail";

const mockProduct = {
  name: "Product Name",
  type: "Product Type",
  Snumber: "12345",
  place: "Yes",
};

describe("Detail", () => {
  test("renders the component with correct props", () => {
    render(
      <BrowserRouter>
        <Detail product={mockProduct} />
      </BrowserRouter>
    );

    const productName = screen.getByText(/Product Name/i);
    expect(productName).toBeInTheDocument();

    const productType = screen.getByText(/Product Type/i);
    expect(productType).toBeInTheDocument();

    const serialNumber = screen.getByText(/Serial Number: 12345/i);
    expect(serialNumber).toBeInTheDocument();

    const isInStorage = screen.getByText(/Is The Product in Storage: Yes/i);
    expect(isInStorage).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /השאלה/i });
    expect(button).toBeInTheDocument();
  });
});
