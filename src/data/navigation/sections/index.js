const getstarted = require("./getstarted");
const theme = require("./theme");
const customize = require("./customize");
const extend = require("./extend");
const integrate = require("./integrate");
const deploy = require("./deploy");
const components = require("./components");
const apis = require("./apis/index");

module.exports = [
  ...getstarted,
  ...theme,
  ...customize,
  ...extend,
  ...integrate,
  ...deploy,
  ...components,
  ...apis,
];
