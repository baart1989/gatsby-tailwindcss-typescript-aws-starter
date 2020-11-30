import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { siteMetadata } from './site-metadata';
import tailwindConfig from './tailwind.config';
import tailwindcss from 'tailwindcss';

const isProd = process.env.NODE_ENV === `production`;

const plugins = [
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-codegen`,
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-modal-routing`,
    options: {
      // A selector to set react-modal's app root to, default is `#___gatsby`
      // See http://reactcommunity.org/react-modal/accessibility/#app-element
      appElement: '#___gatsby',
      // See http://reactcommunity.org/react-modal/#usage
      modalProps: {
        closeTimeoutMS: 2000,
      },
    },
  },
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [
        tailwindcss(tailwindConfig(isProd)),
        autoprefixer,
        ...(isProd ? [cssnano] : []),
      ],
    },
  },
];

export default {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
