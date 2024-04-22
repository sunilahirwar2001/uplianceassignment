// SignIn.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const SignIn = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google Sign-In response
  };

  return (
    <div>
      <h2>Sign In</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default SignIn;
