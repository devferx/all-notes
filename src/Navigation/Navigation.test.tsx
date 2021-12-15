import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Navigation } from "./";

describe("<Navigation />", () => {
  test("should be render Home Page and go to new-note", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Empty Notes")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("link", { name: "Add Note add" }));

    expect(screen.getByPlaceholderText("Tu contenido")).toBeInTheDocument();
  });
});
