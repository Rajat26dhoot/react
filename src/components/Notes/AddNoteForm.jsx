export default function AddNoteForm({ noteText, setNoteText, onAdd }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add a Note</h3>
        <div className="flex gap-3">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            onKeyDown={(e) => e.ctrlKey && e.key === 'Enter' && onAdd()}
            placeholder="Write your note here... (Ctrl+Enter to add)"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
            rows="3"
          />
          <button
            onClick={onAdd}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium"
          >
            Add Note
          </button>
        </div>
      </div>
    );
  }
  