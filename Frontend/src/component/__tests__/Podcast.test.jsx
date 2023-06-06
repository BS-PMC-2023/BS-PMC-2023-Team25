import { fireEvent, render, screen } from "@testing-library/react";
import Podcast from "../Podcast";
import { MemoryRouter } from "react-router-dom";

describe("Podcast Form", () => {
  it("submits form when all fields are filled and checkbox is checked", () => {
    render(
      <MemoryRouter initialEntries={['/Podcast?email=test@test.com']}>
        <Podcast />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });

    const snumInput = screen.getByLabelText("Room Number:");
    fireEvent.change(snumInput, { target: { value: "101" } });

    const dateInput = screen.getByLabelText("Date:");
    fireEvent.change(dateInput, { target: { value: "28/02/2024" } });

    const dateReturnInput = screen.getByLabelText("Date Return:");
    fireEvent.change(dateReturnInput, { target: { value: "29/02/2024" } });

    const reasonInput = screen.getByLabelText("Reason:");
    fireEvent.change(reasonInput, { target: { value: "For podcast recording" } });

    const checkbox = screen.getByLabelText("I accept the terms and conditions:");
    fireEvent.click(checkbox);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    
  });
});
