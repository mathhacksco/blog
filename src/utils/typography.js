/* @flow */
import Typography from 'typography';
import Theme from 'typography-theme-us-web-design-standards';

export default new Typography({
  ...Theme,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    'h1, h2, h3, h3, h5': {
      color: '#3C4851'
    },
    'a': {
      color: '#3C4851'
    },
    'a:visited': {
      color: '#3C4851'
    }
  })
});
