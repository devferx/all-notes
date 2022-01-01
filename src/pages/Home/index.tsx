import { useContext } from "react";
import { Link } from "react-router-dom";

import { NotesContext } from "../../context/NotesContext";
import { NoteList } from "../../components/NoteList";

import logo from "../../assets/logo.png";
import styles from "./home.module.css";

export const HomePage = () => {
  const { notes } = useContext(NotesContext);

  return (
    <section className="home wrapper">
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
        <Link className={styles.addButton} to="/new-note">
          Add Note <span className={styles.addIcon} aria-label="add"></span>
        </Link>
      </header>

      <NoteList title="All notes" notes={notes} />
    </section>
  );
};
