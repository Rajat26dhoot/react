import useAuth from './hooks/useAuth';
import useNotes from './hooks/useNotes';
import LoginScreen from './components/Auth/LoginScreen';
import Header from './components/Layout/Header';
import AddNoteForm from './components/Notes/AddNoteForm';
import NoteList from './components/Notes/NoteList';

export default function NotesApp() {
  const { user, isLoading, googleButtonRef, handleFacebookLogin, signOut } = useAuth();
  const { notes, noteText, setNoteText, addNote, deleteNote } = useNotes(user);

  

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-600">
        Loading...
      </div>
    );

  if (!user)
    return <LoginScreen googleButtonRef={googleButtonRef} onFacebookLogin={handleFacebookLogin} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Header user={user} onSignOut={signOut} />
        <AddNoteForm noteText={noteText} setNoteText={setNoteText} onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
}
