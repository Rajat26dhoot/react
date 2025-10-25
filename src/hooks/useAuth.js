// src/hooks/useAuth.js
import { useState, useEffect, useRef } from 'react';
import { initGoogle, renderGoogleButton } from '../utils/googleAuth';
import { initFacebook, loginWithFacebook } from '../utils/facebookAuth';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [googleReady, setGoogleReady] = useState(false);
  const googleButtonRef = useRef(null);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        await Promise.all([initGoogle(), initFacebook()]);
        setGoogleReady(true);
        setIsLoading(false);
      } catch (err) {
        console.error('Auth init failed:', err);
        setIsLoading(false);
      }
    };
    loadAuth();
  }, []);

  useEffect(() => {
    if (googleReady && googleButtonRef.current && window.google?.accounts?.id) {
      renderGoogleButton(googleButtonRef.current, handleGoogleResponse);
    }
  }, [googleReady, user]);

  const handleGoogleResponse = (response) => {
    const token = response.credential;
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUser({
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
      sub: `google_${payload.sub}`,
      provider: 'google',
    });
  };

  const handleFacebookLogin = async () => {
    const userInfo = await loginWithFacebook();
    if (userInfo) setUser(userInfo);
  };

  const signOut = () => {
    if (user?.provider === 'facebook' && window.FB) window.FB.logout();
    setUser(null);
  };

  return { user, setUser, isLoading, googleButtonRef, handleFacebookLogin, signOut };
}
