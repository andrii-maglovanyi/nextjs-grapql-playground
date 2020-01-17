const path = require("path");
const fs = require("fs");

const maskify = require("maskify");

const pattern = { matchPattern: /^\w+$/, visibleCharsEnd: 3 };
const envFilePath = path.resolve(__dirname, ".env");

const config = {
  API_HOST: "http://localhost:4000",
};

if (fs.existsSync(envFilePath)) {
  const configs = require("dotenv").config({ path: envFilePath }).parsed;
  console.log(`🧬 Web configs [${process.env.NODE_ENV}]:`);

  Object.entries(configs).forEach(([name, value]) => {
    config[name] = value;
    console.log(` - ${name}: ${maskify(value, pattern)}`);
  });
}

module.exports = config;
