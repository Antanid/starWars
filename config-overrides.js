const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@pages": "src/pages",
    "@redux": "src/redux",
    "@services": "src/services",
    "@styles": "src/styles",

  })(config);
  return config;
};
