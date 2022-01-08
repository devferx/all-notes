import { useContext } from "react";

import { NotesContext } from "../../context/NotesContext";
import { NoteList } from "../../components/NoteList";

import { Header } from "../../components/Header/index";

export const HomePage = () => {
  const { notes } = useContext(NotesContext);

  return (
    <section className="home wrapper">
      <Header />

      <NoteList title="All notes" notes={notes} />
    </section>
  );
};
