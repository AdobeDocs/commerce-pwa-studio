const guides = require("./guides");
const tutorials = require("./tutorials");
const integrations = require("./integrations");
const api = require("./api");
const metapackages = require("./metapackages");

module.exports = [...guides, ...integrations, ...tutorials, ...api, ...metapackages];
