const { resolve } = require("path");
const { existsSync } = require("fs");

const maskify = require("maskify");

const pattern = { matchPattern: /^\w+$/, visibleCharsEnd: 3 };
const envFilePath = resolve(__dirname, ".env");

if (existsSync(envFilePath)) {
  const configs = require("dotenv").config({ path: envFilePath }).parsed;
  console.log(`🧬 Server configs [${process.env.NODE_ENV}]:`);

  Object.entries(configs).forEach(([name, value]) => {
    console.log(` - ${name}: ${maskify(value, pattern)}`);
  });
}
