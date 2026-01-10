const buildpack = require("./buildpack");
const events = require("./events");
const peregrine = require("./peregrine");
const venia = require("./venia");

module.exports = [
  {
    title: "Overview",
    path: "/api/",
  },
  buildpack,
  events,
  peregrine,
  venia,
];
