import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Register from '../pages/register';
import NotFound from './not-found';
import PrivateRoute from './private-route';
import AuthorizationRoute from './authorization-route';
import Platform from '../pages/platform';
import Templates from '../pages/templates';
import Billing from '../pages/billing';
import Help from '../pages/help';
import Oauth from '../pages/oauth';
import Preview from '../pages/preview';
import Payment from '../pages/payment';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/platform/:id" component={Platform} />
        <PrivateRoute exact path="/templates" component={Templates} />
        <PrivateRoute exact path="/billing" component={Billing} />
        <PrivateRoute exact path="/help" component={Help} />
        <Route exact path="/">
          <Redirect to="dashboard" />
        </Route>
        <AuthorizationRoute path="/login" component={Login} />
        <AuthorizationRoute path="/signup" component={Register} />
        <AuthorizationRoute path="/oauth" component={Oauth} />
        <Route exact path="/preview/:id" component={Preview} />
        <Route exact path="/payment" component={Payment} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
