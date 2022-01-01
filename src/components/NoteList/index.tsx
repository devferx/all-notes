import { Link } from "react-router-dom";

import { EmptyNoteList } from "../EmptyNodeList";

import { Note } from "../../interfaces/Note";
import styles from "./NoteList.module.css";

interface NoteListProps {
  title: string;
  notes: Note[];
}

export const NoteList = ({ title, notes }: NoteListProps) => {
  if (notes.length === 0) {
    return <EmptyNoteList />;
  }

  return (
    <div className={styles.noteList}>
      <h3 className={styles.noteListTitle}>{title}</h3>

      {notes.map((note) => (
        <Link
          className={styles.noteContainer}
          key={note.id}
          to={`/note/${note.id}`}
        >
          <article className={styles.note}>
            <h4 className={styles.noteTitle}>
              {note.title}{" "}
              <span className={styles.noteTitleVisibility}>
                {note.visibility}
              </span>
            </h4>
            <p className={styles.noteDesc}>
              {note.content.substring(0, 200)}...
            </p>
          </article>
        </Link>
      ))}
    </div>
  );
};
