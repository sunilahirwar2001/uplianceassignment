import React from 'react';
import { redirect,Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if user is authenticated, else redirect to sign-in page
  const isAuthenticated = true; // Implement authentication check

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          // Render content if user is authenticated
          <Component {...props} />
        ) : (
          // Render alternative content if user is not authenticated
          <redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;










