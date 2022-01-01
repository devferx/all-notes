import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NoteList } from ".";
import { Note } from "../../interfaces/Note";

const notes: Note[] = [
  {
    id: "1",
    visibility: "public",
    title: "Test title 1",
    content: "Test content 1",
  },
];

describe("<NoteList />", () => {
  test("should be render empty notes component when list is empty", () => {
    render(
      <MemoryRouter>
        <NoteList title="title" notes={[]} />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Empty Notes")).toBeInTheDocument();
  });

  test("should be render title and items correctly", () => {
    render(
      <MemoryRouter>
        <NoteList title="title" notes={notes} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /Test title 1/i })
    ).toBeInTheDocument();
    expect(screen.getByText("public")).toBeInTheDocument();
    expect(screen.getByText("Test content 1...")).toBeInTheDocument();
  });
});
