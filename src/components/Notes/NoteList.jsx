import { StickyNote } from 'lucide-react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete }) {
  if (notes.length === 0)
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
        <StickyNote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">No notes yet. Add your first note above!</p>
      </div>
    );

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
