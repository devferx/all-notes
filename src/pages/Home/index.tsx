import { Link } from "react-router-dom";

import emptyNotes from "../../assets/empty-notes.svg";
import logo from "../../assets/logo.png";
import styles from "./home.module.css";

export const HomePage = () => {
  return (
    <section className="home wrapper">
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
        <Link className={styles.addButton} to="/new-note">
          Add Note <span className={styles.addIcon} aria-label="add"></span>
        </Link>
      </header>
      <div className={styles.emptyContent}>
        <h3>All notes</h3>
        <img
          className={styles.emptyNotesImg}
          src={emptyNotes}
          alt="Empty Notes"
        />
      </div>
    </section>
  );
};
