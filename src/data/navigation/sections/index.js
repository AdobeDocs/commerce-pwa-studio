const getstarted = require("./getstarted");
const components = require("./components");
const tutorials = require("./tutorials");
const integrations = require("./integrate");
const metapackages = require("./metapackages");
const apis = require("./apis");
const support = require("../support");

module.exports = [
  ...getstarted,
  ...concepts,
  ...components,
  ...tutorials,
  ...integrations,
  ...metapackages,
  ...apis,
  ...support,
];
