import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "../component/Menu";

describe("Menu", () => {
  test("renders menu links", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );

    const menuLinks = [
      "מוצרים להשאלה",
      "טופס להשאלה חדשה",
      "השאלות שלי",
      "הסטוריית השאלות",
      "בקשה לחדר פודקאסט",
      "מנהל",
      "סטודנט",
      "מרצה",
      "התנתק",
    ];

    menuLinks.forEach((linkText) => {
      const link = screen.getByText(linkText);
      expect(link).toBeInTheDocument();
    });
  });
});
