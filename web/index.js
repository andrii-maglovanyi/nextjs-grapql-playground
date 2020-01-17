const next = require("next");

const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  dir: "./web",
});

module.exports = {
  handler: nextApp.getRequestHandler(),
  nextApp,
};
