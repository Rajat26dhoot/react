import React, { forwardRef } from 'react';

const GoogleLoginButton = forwardRef((_, ref) => (
  <div className="flex justify-center">
    <div ref={ref} id="googleSignInButton" style={{ width: '100%' }}></div>
  </div>
));

export default GoogleLoginButton;
