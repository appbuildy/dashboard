import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const token = localStorage.getItem('jwt');

  if (!token) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location },
        }}
    />
    )
  }

  return (
    <Route {...rest}>{children}</Route>
  );
};

export default PrivateRoute;
