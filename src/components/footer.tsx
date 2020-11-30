import { Link, graphql, useStaticQuery } from 'gatsby';

import { FooterQuery } from './__generated__/FooterQuery';
import { Logo } from './logo';
import React from 'react';

export const Footer = () => {
  const query = useStaticQuery<FooterQuery>(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container mx-auto">
      <div className="mt-8 flex justify-center">
        <Link to="/" title={query.site.siteMetadata.title}>
          <Logo className="w-24" />
        </Link>
      </div>
      <div className="my-4">
        <p className="text-center text-base leading-6">
          &copy; {new Date().getFullYear()} {query.site.siteMetadata.title}, Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
