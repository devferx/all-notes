import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { NewNotePage } from "./";
import { NotesProvider } from "../../context/NotesContext";

describe("<NewNotePage />", () => {
  beforeEach(() => {
    render(
      <NotesProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<NewNotePage />} />
          </Routes>
        </MemoryRouter>
      </NotesProvider>
    );
  });

  test("should be render markdown content of input", () => {
    fireEvent.change(screen.getByPlaceholderText("Tu contenido"), {
      target: {
        value:
          "## titulo \n ![md-image](https://picsum.photos/200) \n Lorem Ipsum",
      },
    });

    expect(
      screen.getByRole("heading", {
        name: "titulo",
      })
    ).toBeInTheDocument();
    expect(screen.getByAltText("md-image")).toBeInTheDocument();
    expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
  });

  test("should be delete text input on press delete button", () => {
    fireEvent.change(screen.getByPlaceholderText("Tu contenido"), {
      target: {
        value: "## titulo",
      },
    });

    fireEvent.click(screen.getByText("Delete"));

    expect(screen.queryByText("titulo")).not.toBeInTheDocument();
  });

  test("should be save in localstorage data on press save button", () => {
    Storage.prototype.setItem = jest.fn();

    fireEvent.change(screen.getByPlaceholderText("Tu contenido"), {
      target: {
        value: "## titulo",
      },
    });

    fireEvent.click(screen.getByText("Save"));

    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
  });
});
