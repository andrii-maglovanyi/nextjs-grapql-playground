const path = require("path");

const env = require("./config");

module.exports = {
  env,
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),

      components: path.resolve(__dirname, "components"),
      containers: path.resolve(__dirname, "containers"),
      lib: path.resolve(__dirname, "lib"),
      store: path.resolve(__dirname, "store"),
    };
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
