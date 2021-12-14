import emptyNotes from "../../assets/empty-notes.svg";
import logo from "../../assets/logo.png";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <section className="home wrapper">
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
        <a href="/" className={styles.addButton}>
          Add Note <span className={styles.addIcon} aria-label="add"></span>
        </a>
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
