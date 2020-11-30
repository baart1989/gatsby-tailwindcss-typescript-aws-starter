import AdminHome from '../app/home';
import Login from '../app/login';
import { PrivateRoute } from '../components/utils';
import React from 'react';
import { Router } from '@reach/router';

const App = () => (
  <Router>
    <PrivateRoute path="/app/home" component={AdminHome} />
    <Login path="/app/login" />
  </Router>
);

export default App;
