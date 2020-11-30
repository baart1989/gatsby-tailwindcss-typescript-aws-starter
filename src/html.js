import PropTypes from 'prop-types';
import React from 'react';

export default function HTML(props) {
  return (
    <html className="antialiased" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          key="website-theme"
          dangerouslySetInnerHTML={{
            __html: `(function() {
                try {
                  const darkModeClassNames = ['dark', 'bg-gray-900'];
                  const lightModeClassNames = ['bg-gray-50'];
                  const mode = localStorage.getItem('theme');
                  let supportDarkMode;
                  if (!mode) {
                    supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                    const theme = supportDarkMode ? 'theme-dark' : 'theme-light';
                    localStorage.setItem('theme', theme);
                  } else {
                    supportDarkMode = mode === 'theme-dark';
                  }
                  const classList = supportDarkMode ? darkModeClassNames : lightModeClassNames;
                  classList.forEach(className => document.documentElement.classList.add(className));
                } catch (e) {
                  console.error(e);
                }
              })();`,
          }}
        />
        {props.preBodyComponents}
        <div
          className="text-gray-900 dark:text-white"
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
