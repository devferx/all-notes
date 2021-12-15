import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Prism from "prismjs";

export const NewNotePage = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, [text]);

  return (
    <section className="wrapper grid">
      <textarea
        className="textarea"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        placeholder="Tu contenido"
      />
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(text)),
        }}
      ></div>
    </section>
  );
};
