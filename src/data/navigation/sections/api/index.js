const buildpack = require("./buildpack");
const peregrine = require("./peregrine");
const venia = require("./venia");
module.exports = [
  {
    title: "Overview",
    path: "/api/",
  },
  buildpack,
  peregrine,
  venia,
];
