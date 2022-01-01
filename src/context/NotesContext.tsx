import { createContext, useState, ReactNode, useEffect } from "react";

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

  // Load notes from local storage
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(notes);
  }, []);

  // Save notes to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = (newNote: Note) => {
    setNotes((notes) => [...notes, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, saveNote }}>
      {children}
    </NotesContext.Provider>
  );
};
