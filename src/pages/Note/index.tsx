import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { NotesContext } from "../../context/NotesContext";
import { MarkdownContent } from "../../components/MarkdownContent/index";
import { Header } from "../../components/Header";

import styles from "./Note.module.css";

export const NotePage = () => {
  const { getNote } = useContext(NotesContext);
  const { id: noteId } = useParams();
  const navigate = useNavigate();
  const note = getNote(noteId);

  if (!note) {
    navigate("/");
    return null;
  }

  return (
    <section className="wrapper">
      <Header noteId={noteId} />

      <article className={styles.container}>
        <MarkdownContent text={note.content} />
      </article>
    </section>
  );
};
