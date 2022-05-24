const getstarted = require("./getstarted");
const theme = require("./theme");
const extend = require("./extend");
const integrate = require("./integrate");
const deploy = require("./deploy");
const components = require("./components");
// const apis = require("../apis/index");

module.exports = [
  ...getstarted,
  ...theme,
  ...extend,
  ...integrate,
  ...deploy,
  ...components,
  // ...apis,
];
