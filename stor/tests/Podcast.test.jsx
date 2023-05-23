import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Podcast from "./Podcast";

describe("Podcast component", () => {
  it("should submit the form when the checkbox is checked and button is clicked", () => {
    render(
      <MemoryRouter>
        <Podcast />
      </MemoryRouter>
    );

    // Fill in the form inputs
    const seqNumInput = screen.getByPlaceholderText("מספר חדר");
    fireEvent.change(seqNumInput, { target: { value: "123" } });

    const nameInput = screen.getByPlaceholderText("dd/mm/yyyy");
    fireEvent.change(nameInput, { target: { value: "28/02/2024" } });

    const passwordInput = screen.getByPlaceholderText("סיבת בקשה");
    fireEvent.change(passwordInput, { target: { value: "Testing purpose" } });

    // Check the checkbox
    const checkbox = screen.getByLabelText("אני מאשר/ת את תנאי השימוש");
    fireEvent.click(checkbox);

    // Submit the form
    const submitButton = screen.getByText("שלח");
    fireEvent.click(submitButton);
  });
});
