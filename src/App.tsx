import { BrowserRouter } from "react-router-dom";

import { Navigation } from "./Navigation";
import { NotesProvider } from "./context/NotesContext";

export const App = () => {
  return (
    <NotesProvider>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </NotesProvider>
  );
};
