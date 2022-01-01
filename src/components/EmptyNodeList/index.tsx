import emptyNotes from "../../assets/empty-notes.svg";
import styles from "./EmptyNodeList.module.css";

export const EmptyNoteList = () => {
  return (
    <div className={styles.emptyContent}>
      <h3>All notes</h3>
      <img
        className={styles.emptyNotesImg}
        src={emptyNotes}
        alt="Empty Notes"
      />
    </div>
  );
};
