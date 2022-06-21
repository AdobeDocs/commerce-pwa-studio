const buildpack = require("./buildpack");
const peregrine = require("./peregrine");
const venia = require("./venia");
const events = require("./events");
module.exports = [
  {
    title: "Overview",
    path: "/api/",
  },
  buildpack,
  peregrine,
  venia,
  events,
];
