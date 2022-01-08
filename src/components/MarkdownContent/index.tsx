import { useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Prism from "prismjs";

import styles from "./MarkdownContent.module.css";

interface MarkdownContentProps {
  className?: string;
  text: string;
}

export const MarkdownContent = ({
  className = styles.content,
  text,
}: MarkdownContentProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [text]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(text)),
      }}
    ></div>
  );
};
