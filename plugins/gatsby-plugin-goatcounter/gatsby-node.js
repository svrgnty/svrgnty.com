'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var onPreInit = function onPreInit(_ref, options) {
  var reporter = _ref.reporter;

  if (!options.code) {
    reporter.error("The GoatCounter plugin requires a page code. Did you mean to add it?");
  }
};
/**
 * When shipping NPM modules, they typically need to be either
 * pre-compiled or the user needs to add bundler config to process the
 * files. Gatsby lets us ship the bundler config *with* the theme, so
 * we never need a lib-side build step. Since we don't pre-compile the
 * theme,this is how we let webpack know how to process files.
 *
 * based on https://github.com/nnnkit/gatsby-theme-grid-blog/blob/066968e2b68fd1bc89f0462c474d0e9cb34042be/theme/gatsby-node.js#L16-L35
 */
// export const onCreateWebpackConfig = ({
//   loaders,
//   actions,
// }: CreateWebpackConfigArgs) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           include: path.dirname(require.resolve('gatsby-source-stackoverflow')),
//           use: [loaders.js()],
//         },
//       ],
//     },
//   });
// };

exports.onPreInit = onPreInit;
//# sourceMappingURL=gatsby-node.js.map
