import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { LogoQuery } from './__generated__/LogoQuery';
import { store } from '../utils';

export const Logo = ({ className = 'logo' }) => {
  const data = useStaticQuery<LogoQuery>(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          title
          logo
          logoDark
        }
      }
    }
  `);

  const [isDarkMode, setDarkMode] = useState(
    localStorage && localStorage.getItem('theme') === 'theme-dark',
  );

  useEffect(() => {
    store.listen('theme:change', ({ isDarkMode }) => {
      setDarkMode(isDarkMode);
    });
  }, []);

  return (
    <img
      src={`${isDarkMode ? data.site.siteMetadata.logo : data.site.siteMetadata.logoDark}`}
      alt={`${data.site.siteMetadata.title} - logo`}
      className={className}
    />
  );
};

export default Logo;
