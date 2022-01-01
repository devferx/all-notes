import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NotesProvider } from "../context/NotesContext";
import { Navigation } from "./";

describe("<Navigation />", () => {
  test("should be render Home Page and go to new-note", () => {
    render(
      <NotesProvider>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </NotesProvider>
    );
    expect(screen.getByAltText("Empty Notes")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("link", { name: "Add Note add" }));

    expect(screen.getByPlaceholderText("Tu contenido")).toBeInTheDocument();
  });

  test("should be go to Home page on create new note", () => {
    render(
      <NotesProvider>
        <MemoryRouter initialEntries={["/new-note"]}>
          <Navigation />
        </MemoryRouter>
      </NotesProvider>
    );

    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("All notes")).toBeInTheDocument();
  });
});
