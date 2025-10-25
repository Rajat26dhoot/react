import { Trash2 } from 'lucide-react';

export default function NoteItem({ note, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <p className="text-gray-800 whitespace-pre-wrap">{note.text}</p>
          <p className="text-xs text-gray-400 mt-2">
            {new Date(note.timestamp).toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => onDelete(note.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
