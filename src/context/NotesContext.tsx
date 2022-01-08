import { createContext, useState, ReactNode, useEffect } from "react";

import { Note } from "../interfaces/Note";

interface NotesContextProps {
  notes: Note[];
  getNote: (id: string | undefined) => Note | undefined;
  saveNote: (newNote: Note) => void;
  updateNote: (id: string, note: Note) => void;
  deleteNote: (id: string) => void;
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

  const getNote = (id: string | undefined) => {
    if (!id) return undefined;
    return notes.find((note) => note.id === id);
  };

  const deleteNote = (id: string) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  const updateNote = (id: string, note: Note) => {
    setNotes((notes) =>
      notes.map((oldNote) => (oldNote.id === id ? note : oldNote))
    );
  };

  return (
    <NotesContext.Provider
      value={{ notes, saveNote, getNote, deleteNote, updateNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};
