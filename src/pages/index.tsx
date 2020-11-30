import { Link } from 'gatsby';
import Login from '../app/login';
import React from 'react';

export const Index = () => {
  return (
    <div className="container bg-gray-100 dark:bg-gray-600 mx-auto rounded-lg">
      <div className="flex justify-center items-center h-96">
        <Login />
      </div>
    </div>
  );
};

export default Index;
