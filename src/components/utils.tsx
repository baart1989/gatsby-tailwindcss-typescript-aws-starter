import { getCurrentUser, isLoggedIn } from '../utils/auth';

import React from 'react';
import { Redirect } from '@reach/router';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = isLoggedIn() ? getCurrentUser() : undefined;

  if (!user) {
    return <Redirect to="/app/login/" noThrow={true} />;
  }

  return <Component {...rest} />;
};
