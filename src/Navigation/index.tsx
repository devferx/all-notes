import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { NewNotePage } from "../pages/NewNote/index";
import { NotePage } from "../pages/Note/index";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new-note" element={<NewNotePage />} />
      <Route path="/note">
        <Route path="" element={<NewNotePage />} />
        <Route path=":id" element={<NotePage />} />
      </Route>
    </Routes>
  );
};
