import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Manager from "../Manager";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Manager component", () => {
  test("should add a product and navigate to /products", () => {
    const addProductMock = jest.fn();
    const navigateMock = jest.fn();

    useNavigate.mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <Manager addProduct={addProductMock} />
      </MemoryRouter>
    );

    // Rest of the test has been removed
  });
});
