import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Manager from "./Manager";

describe("Manager component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Manager />
      </Router>
    );
  });

  it("renders the welcome message", () => {
    const welcomeMessage = screen.getByText(/שמח לראות אותך שוב/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders the action question", () => {
    const actionQuestion = screen.getByText(/מה תרצה לעשות/i);
    expect(actionQuestion).toBeInTheDocument();
  });

  it("renders the link to '/products'", () => {
    const productsLink = screen.getByRole("link", { name: /מעקב אחר אחסון/i });
    expect(productsLink).toBeInTheDocument();
    expect(productsLink).toHaveAttribute("href", "/products");
  });

  it("renders the link to '/newprod'", () => {
    const newProductLink = screen.getByRole("link", { name: /הוסף מוצר/i });
    expect(newProductLink).toBeInTheDocument();
    expect(newProductLink).toHaveAttribute("href", "/newprod");
  });

  it("renders the link to '/delete'", () => {
    const deleteLink = screen.getByRole("link", { name: /למחוק מוצר/i });
    expect(deleteLink).toBeInTheDocument();
    expect(deleteLink).toHaveAttribute("href", "/delete");
  });
});
