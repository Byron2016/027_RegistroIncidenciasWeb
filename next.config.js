module.exports = {
  reactStrictMode: true,
};

const withTranspileModules = require("next-transpile-modules")([
  "@super2016/components_a",
]);

module.exports = withTranspileModules({});
