export const initFacebook = () =>
    new Promise((resolve, reject) => {
      if (window.FB) return resolve();
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: import.meta.env.VITE_FACEBOOK_APP_ID,
          cookie: true,
          xfbml: true,
          version: 'v18.0',
        });
        resolve();
      };
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onerror = reject;
      document.body.appendChild(script);
    });
  
  
  export const loginWithFacebook = () =>
    new Promise((resolve) => {
      window.FB.login(
        (response) => {
          if (response.authResponse) {
            window.FB.api('/me', { fields: 'name,email,picture' }, (info) => {
              resolve({
                name: info.name,
                email: info.email || 'No email provided',
                picture: info.picture.data.url,
                sub: `facebook_${info.id}`,
                provider: 'facebook',
              });
            });
          } else resolve(null);
        },
        { scope: 'public_profile,email' }
      );
    });
  