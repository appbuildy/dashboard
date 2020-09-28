import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from '../dashboard';
import Login from '../login';
import NotFound from './not-found';
import PrivateRoute from './private-route';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/">
          <Redirect to="dashboard" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
