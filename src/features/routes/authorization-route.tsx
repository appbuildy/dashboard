import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const AuthorizationRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const token = localStorage.getItem('jwt');

  if (token) {
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
          state: { from: rest.location },
        }}
      />
    )
  }

  return (
    <Route {...rest} component={component} />
  );
};

export default AuthorizationRoute;
