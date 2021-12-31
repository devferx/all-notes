import { createContext, useState, ReactNode } from "react";

import { Note } from "../interfaces/Note";

interface NotesContextProps {
  notes: Note[];
  saveNote: (newNote: Note) => void;
}

export const NotesContext = createContext({} as NotesContextProps);

interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const saveNote = (newNote: Note) => {
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  return (
    <NotesContext.Provider value={{ notes, saveNote }}>
      {children}
    </NotesContext.Provider>
  );
};
