import { useContext, useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Prism from "prismjs";

import { NotesContext } from "../../context/NotesContext";
import styles from "./NewNote.module.css";

export const NewNotePage = () => {
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState<
    "private" | "public" | "unlisted"
  >("private");
  const { saveNote } = useContext(NotesContext);
  const navigate = useNavigate();

  useEffect(() => {
    Prism.highlightAll();
  }, [text]);

  const handleDelete = () => {
    setText("");
  };

  const handleSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    setVisibility(ev.target.value as "private" | "public" | "unlisted");
  };

  const handleSave = () => {
    saveNote({
      id: Date.now().toString(),
      visibility: visibility,
      content: text,
    });
    navigate("/");
  };

  return (
    <section className={`wrapper ${styles.container}`}>
      <header className={styles.header}>
        <select
          className={styles.select}
          name="visibility"
          value={visibility}
          onChange={handleSelect}
        >
          <option value="private">Private</option>
          <option value="public">Public</option>
          <option value="unlisted">Unlisted</option>
        </select>

        <div className={styles.divider}></div>

        <button
          className={`${styles.button} ${styles.buttonTransparent}`}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button className={styles.button} onClick={handleSave}>
          Save
        </button>
      </header>

      <div className={styles.grid}>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={(ev) => setText(ev.target.value)}
          placeholder="Tu contenido"
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(marked.parse(text)),
          }}
        ></div>
      </div>
    </section>
  );
};
