import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { App } from "./App";

describe("<App />", () => {
  test("should be render markdown content of input", () => {
    render(<App />);

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
});
