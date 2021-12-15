import { BrowserRouter } from "react-router-dom";

import { Navigation } from "./Navigation";

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};
