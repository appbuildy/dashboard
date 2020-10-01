import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from '../dashboard';
import Login from '../login';
import Register from '../register';
import NotFound from './not-found';
import PrivateRoute from './private-route';
import AuthorizationRoute from './authorization-route';
import Platform from '../platform';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/platform/:id" component={Platform}/>
        <Route exact path="/">
          <Redirect to="dashboard" />
        </Route>
        <AuthorizationRoute path="/login" component={Login} />
        <AuthorizationRoute path="/signup" component={Register} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
