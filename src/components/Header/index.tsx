import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

interface HeaderProps {
  noteId?: string;
}

export const Header = ({ noteId }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className={styles.actions}>
        {noteId && (
          <Link
            className={`${styles.button} ${styles.blackButton}`}
            to={`/new-note/${noteId}`}
          >
            Edit Note
          </Link>
        )}

        <Link className={styles.button} to="/new-note">
          Add Note <span className={styles.addIcon} aria-label="add"></span>
        </Link>
      </div>
    </header>
  );
};
