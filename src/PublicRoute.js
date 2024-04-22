// PublicRoute.js
import React from 'react';
import { Route, redirect } from 'react-router-dom';


const PublicRoute = ({ component: Component, ...rest }) => {
  // Check if user is authenticated, else redirect to dashboard
  const isAuthenticated = false; // Implement authentication check

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <redirect to="/dashboard" />
        )
      }
    />
  );
};

export default PublicRoute;
