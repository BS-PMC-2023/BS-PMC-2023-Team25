import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DeletPost from "./DeletePost.jsx";

describe("DeletPost component", () => {
  test("should update 'myId' state when input value changes", () => {
    const { getByPlaceholderText } = render(<DeletPost />);
    const inputElement = getByPlaceholderText("קוד המוצר");

    fireEvent.change(inputElement, { target: { value: "123" } });

    expect(inputElement.value).toBe("123");
  });

  test("should render 'מחק מוצר' button", () => {
    const { getByText } = render(<DeletPost />);
    const buttonElement = getByText("מחק מוצר");

    expect(buttonElement).toBeInTheDocument();
  });
});
