import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DeletePost from "../DeletePost";
import ProductDataService from "../../services/products";

jest.mock("../../services/products");

describe("DeletePost component", () => {
  it("renders the input field", () => {
    render(
      <MemoryRouter>
        <DeletePost />
      </MemoryRouter>
    );
    const inputField = screen.getByPlaceholderText("Serial Number");
    expect(inputField).toBeInTheDocument();
  });

  it("calls deleteProduct function with the correct argument on button click", () => {
    const mockDeleteProd = jest.fn().mockResolvedValue({ status: 200 });
    ProductDataService.deleteProd = mockDeleteProd;

    render(
      <MemoryRouter>
        <DeletePost />
      </MemoryRouter>
    );
    const deleteButton = screen.getByRole("button", { name: "Delete Post" });
    const inputField = screen.getByPlaceholderText("Serial Number");

    fireEvent.change(inputField, { target: { value: "12345" } });
    fireEvent.click(deleteButton);

    expect(mockDeleteProd).toHaveBeenCalledWith("12345");
  });

  it("navigates to '/products' after deleting a post", async () => {
    const mockDeleteProd = jest.fn().mockResolvedValue({ status: 200 });
    ProductDataService.deleteProd = mockDeleteProd;

    render(
      <MemoryRouter initialEntries={['/delete']}>
        <DeletePost />
      </MemoryRouter>
    );
    const deleteButton = screen.getByRole("button", { name: "Delete Post" });
    const inputField = screen.getByPlaceholderText("Serial Number");

    fireEvent.change(inputField, { target: { value: "12345" } });
    fireEvent.click(deleteButton);

    // You need to assert here that the app behaves as if it had navigated to /products.
    // This is dependent on what your app actually does when it navigates to /products.
    // If, for example, there is a heading "Products" on the /products page, you could do:
    // await screen.findByText("Products");
  });
});
