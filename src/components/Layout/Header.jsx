import { LogOut } from 'lucide-react';

export default function Header({ user, onSignOut }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={user.picture} alt={user.name} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <button
        onClick={onSignOut}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Sign Out
      </button>
    </div>
  );
}
