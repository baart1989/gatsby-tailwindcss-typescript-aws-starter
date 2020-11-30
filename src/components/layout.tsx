import { graphql, useStaticQuery } from 'gatsby';

import Footer from './footer';
import Helmet from 'react-helmet';
import { MetadataQuery } from './__generated__/MetadataQuery';
import Nav from './nav';
import React from 'react';
import SEO from './seo';

const Head = ({ siteIcon }) => {
  return (
    <Helmet>
      <link rel="icon" href={siteIcon} type="image/png" />
    </Helmet>
  );
};

const Layout = ({ children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<MetadataQuery>(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          icon
        }
      }
    }
  `);

  return (
    <>
      <Head siteIcon={siteMetadata.icon} />
      <SEO />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
