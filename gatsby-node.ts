import { GatsbyNode } from 'gatsby';

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages only on the client.
  console.log('onCreatePage:before', page);
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`;
    // Update the page.
    createPage(page);
  }
};
