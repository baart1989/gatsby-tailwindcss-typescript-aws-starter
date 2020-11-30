import { AlertTriangle, X } from 'react-feather';
import React, { useState } from 'react';
import { isLoggedIn, signIn } from '../utils/auth';

import { Redirect } from '@reach/router';
import { navigate } from 'gatsby';

const initialState = {
  username: '',
  password: '',
  hasError: false,
};

const Form = ({ handleUpdate, onSubmit }) => (
  <form
    className="flex flex-col space-y-4"
    onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    <div className="flex items-center justify-between">
      <label>Username</label>
      <input
        aria-label="Username"
        name="username"
        type="text"
        required
        className="ml-2 w-full max-w-xs rounded-md dark:text-gray-900"
        placeholder="Username"
        onChange={handleUpdate}
      />
    </div>
    <div className="flex items-center justify-between">
      <label>Password</label>
      <input
        aria-label="Password"
        name="password"
        type="password"
        required
        className="ml-2 w-full max-w-xs rounded-md dark:text-gray-900"
        placeholder="Password"
        onChange={handleUpdate}
      />
    </div>
    <button type="submit" className="btn btn-secondary ml-auto">
      Sign in
    </button>
  </form>
);

const Error = ({ hideError }) => (
  <div className="rounded-md bg-red-50 py-3 my-6">
    <div className="flex justify-center items-center">
      <div className="ml-3 flex-shrink-0">
        <AlertTriangle className="text-red-500" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm leading-5 font-medium text-red-800">
          Sorry, the entered information is incorrect
        </h3>
      </div>
      <button onClick={hideError} className="ml-auto mr-3">
        <X className="text-red-500" />
      </button>
    </div>
  </div>
);

export const Login: React.FC<{ path?: string }> = () => {
  const [data, changeData] = useState(initialState);

  const handleUpdate = event => {
    changeData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async () => {
    const [, error] = await signIn(data);
    return error ? changeData({ ...data, hasError: true }) : navigate('/app/home/');
  };

  const hideError = () => {
    const hasError = false;
    changeData({ ...data, hasError });
  };

  if (isLoggedIn()) return <Redirect path="/app/home" />;

  return (
    <div className="max-w-lg w-full mx-auto p-4 rounded-md">
      <h2 className="text-3xl mb-8 text-center">Login</h2>
      {data.hasError && <Error hideError={hideError} />}
      <Form handleUpdate={handleUpdate} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
