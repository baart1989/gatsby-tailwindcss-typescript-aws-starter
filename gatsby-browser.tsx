import './src/style/index.css';

import Api from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import Layout from './src/components/layout';
import React from 'react';
import { awsConfig } from './aws-exports';
import { setUser } from './src/utils/auth';

Api.configure(awsConfig);
Auth.configure(awsConfig);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const onRouteUpdate = async () => {
  console.log('onRouteUpdate:before');
  try {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  } catch (error) {
    console.error('onRouteUpdate: ', error);
    window.localStorage.setItem('gatsbyUser', null);
  }
  console.log('onRouteUpdate:after');
};
