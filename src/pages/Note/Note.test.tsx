import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { NotesProvider } from "../../context/NotesContext";
import { NotePage } from ".";
import { Note } from "../../interfaces/Note";
import { HomePage } from "../Home/index";

describe("<NotePage />", () => {
  const mockedNotes: Note[] = [
    {
      id: "1",
      title: "Titulo 1",
      content: "# Titulo 1\nLorem ipsum",
      visibility: "private",
    },
  ];

  test("should be render note", async () => {
    Storage.prototype.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify(mockedNotes));

    render(
      <NotesProvider>
        <MemoryRouter initialEntries={["/note/1"]}>
          <Routes>
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </NotesProvider>
    );

    expect(
      screen.getByRole("heading", { name: "Titulo 1" })
    ).toBeInTheDocument();
  });
});
