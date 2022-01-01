import { useParams } from "react-router-dom";

export const NotePage = () => {
  const { id: noteId } = useParams();

  return <section>{noteId}</section>;
};
