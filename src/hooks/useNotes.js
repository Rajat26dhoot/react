// src/hooks/useNotes.js
import { useState, useEffect } from 'react';

export default function useNotes(user) {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    if (user?.sub) {
      const stored = sessionStorage.getItem(`notes:${user.sub}`);
      if (stored) setNotes(JSON.parse(stored));
    }
  }, [user]);

  const saveNotes = (updated) => {
    if (user?.sub)
      sessionStorage.setItem(`notes:${user.sub}`, JSON.stringify(updated));
  };

  const addNote = () => {
    if (!noteText.trim()) return;
    const newNote = {
      id: Date.now(),
      text: noteText,
      timestamp: new Date().toISOString(),
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    saveNotes(updated);
    setNoteText('');
  };

  const deleteNote = (id) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    saveNotes(updated);
  };

  return { notes, noteText, setNoteText, addNote, deleteNote };
}
