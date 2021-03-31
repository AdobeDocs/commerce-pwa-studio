const guides = require("./guides");
const support = require("./support");
const tutorials = require("./tutorials");
const integrations = require("./integrations");

module.exports = [...guides,...integrations, ...tutorials, ];
