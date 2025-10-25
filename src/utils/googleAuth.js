export const initGoogle = () =>
    new Promise((resolve, reject) => {
      if (window.google?.accounts?.id) return resolve();
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  
  export const renderGoogleButton = (ref, callback) => {
    ref.innerHTML = '';
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback,
    });
    window.google.accounts.id.renderButton(ref, {
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
    });
  };
  