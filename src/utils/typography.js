/* @flow */
import Typography from 'typography';
import Theme from 'typography-theme-irving';

export default new Typography({
  ...Theme,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    'h1, h2, h3, h3, h5': {
      color: '#3E3C4C'
    },
    'a': {
      color: '#3E3C4C'
    },
    'a:visited': {
      color: '#3E3C4C'
    }
  })
});
