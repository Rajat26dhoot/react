import React, { forwardRef } from 'react';

const GoogleLoginButton = forwardRef((_, ref) => (
  <div className="flex justify-center w-full">
    <div
      ref={ref}
      id="googleSignInButton"
      style={{
        width: '100%',
        minWidth: '100%', 
        flexShrink: 0,     
        boxSizing: 'border-box',
      }}
    ></div>
  </div>
));

export default GoogleLoginButton;
