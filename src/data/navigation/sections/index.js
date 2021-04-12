const guides = require("./guides");
const tutorials = require("./tutorials");
const integrations = require("./integrations");
const api = require("./api");

module.exports = [...guides, ...integrations, ...tutorials, ...api];
