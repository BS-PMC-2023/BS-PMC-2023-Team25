import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DeletePost from "../component/DeletePost"

describe("DeletePost component", () => {
  test("should update 'myId' state when input value changes", () => {
    const { getByPlaceholderText } = render(React.createElement(DeletePost));
    const inputElement = getByPlaceholderText("קוד המוצר");

    fireEvent.change(inputElement, { target: { value: "123" } });

    expect(inputElement.value).toBe("123");
  });

  test("should render 'מחק מוצר' button", () => {
    const { getByText } = render(React.createElement(DeletePost));
    const buttonElement = getByText("מחק מוצר");

    expect(buttonElement).toBeInTheDocument();
  });
});