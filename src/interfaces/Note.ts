export interface Note {
  id: string;
  title: string;
  visibility: "private" | "public" | "unlisted";
  content: string;
}
