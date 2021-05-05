/* eslint-disable no-undef */
const withSass = require("@zeit/next-sass");
const withTM = require("next-plugin-transpile-modules");

module.exports = withTM(
  withSass({
    transpileModules: ["react-bulma-components"],
    sassLoaderOptions: {
      includePaths: ["./src"],
    },
  })
);
