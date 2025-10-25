import { StickyNote } from 'lucide-react';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';

export default function LoginScreen({ googleButtonRef, onFacebookLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <StickyNote className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h1>
          <p className="text-gray-600">Sign in to start taking notes</p>
        </div>

        <div className="space-y-4">
          <GoogleLoginButton ref={googleButtonRef} />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <FacebookLoginButton onClick={onFacebookLogin} />
        </div>
      </div>
    </div>
  );
}
