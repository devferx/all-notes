import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { NewNotePage } from "../pages/NewNote/index";

export const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-note" element={<NewNotePage />} />
      </Routes>
    </>
  );
};
