import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Manager from "../Manager";

describe("Manager component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Manager />
      </Router>
    );
  });

  it("renders the welcome message", () => {
    const welcomeMessage = screen.getByText(/Glad To See You Again!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders the action question", () => {
    const actionQuestion = screen.getByText(/What Would You Like To Do?/i);
    expect(actionQuestion).toBeInTheDocument();
  });

  it("renders the link to '/products'", () => {
    const productsLink = screen.getByRole("link", { name: /Track Storage/i });
    expect(productsLink).toBeInTheDocument();
    expect(productsLink.getAttribute("href")).toBe("/products");
  });

  it("renders the link to '/newprod'", () => {
    const newProductLink = screen.getByRole("link", { name: /Add Product/i });
    expect(newProductLink).toBeInTheDocument();
    expect(newProductLink.getAttribute("href")).toBe("/newprod");
  });

  it("renders the link to '/delete'", () => {
    const deleteLink = screen.getByRole("link", { name: /Delete Product/i });
    expect(deleteLink).toBeInTheDocument();
    expect(deleteLink.getAttribute("href")).toBe("/delete");
  });
});
