import './src/style/index.css';

import Api from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import Layout from './src/components/layout';
import React from 'react';
import { awsConfig } from './aws-exports';

Api.configure(awsConfig);
Auth.configure(awsConfig);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
