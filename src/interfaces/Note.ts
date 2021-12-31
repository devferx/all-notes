export interface Note {
  id: string;
  visibility: "private" | "public" | "unlisted";
  content: String;
}
