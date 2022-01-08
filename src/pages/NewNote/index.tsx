import { useContext, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { NotesContext } from "../../context/NotesContext";
import { MarkdownContent } from "../../components/MarkdownContent";
import styles from "./NewNote.module.css";

export const NewNotePage = () => {
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState<
    "private" | "public" | "unlisted"
  >("private");
  const { saveNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    setText("");
  };

  const handleSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    setVisibility(ev.target.value as "private" | "public" | "unlisted");
  };

  const handleSave = () => {
    let [title] = text.split("\n");
    // Remove # from the title
    title = title.trim().replace("# ", "");

    saveNote({
      id: Date.now().toString(),
      title,
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
        <MarkdownContent text={text} />
      </div>
    </section>
  );
};
