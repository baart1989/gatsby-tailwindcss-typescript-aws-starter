import Helmet from 'react-helmet';
import React from 'react';

export const ErrorPage = () => {
  return (
    <>
      <Helmet title="404" />
      <div className="container mx-auto">
        <div className="title py-12 text-center">
          <h2 className="text-7xl">404</h2>
        </div>
        <div className="pb-20 text-center">
          <p>
            Oops! This page does not exist.{' '}
            <span role="img" aria-label="Sad face">
              😞
            </span>
          </p>
          <p>
            <button
              onClick={() => {
                if (window.history) window.history.back();
              }}
            >
              Go back to home page?
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
