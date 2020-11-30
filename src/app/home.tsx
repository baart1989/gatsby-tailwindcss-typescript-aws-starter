import { getCurrentUser, logout } from '../utils';

import React from 'react';
import { navigate } from 'gatsby';

export const Home = () => {
  const logoutUser = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container bg-gray-100 dark:bg-gray-600 mx-auto rounded-lg">
      <div className="flex flex-col justify-center items-center h-96 space-y-4">
        <div>{getCurrentUser().username}</div>
        <div className="text-2xl">You are logged in!</div>
        <button onClick={logoutUser} className="btn btn-secondary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
