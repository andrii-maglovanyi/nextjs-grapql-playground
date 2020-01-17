const { existsSync } = require("fs");

const tasks = arr => arr.join(" && ");

const encryptConfig = path =>
  existsSync(`${path}/.env.prod`)
    ? `gcloud kms encrypt --plaintext-file=${path}/.env.prod --ciphertext-file=${path}/.env.enc --location=us-central1 --keyring=algo-keyring --key=cloudbuild-env && git add ${path}/.env.enc && echo "🔑  Encrypted ${path} configuration file."`
    : `echo "🔍  No ${path} configuration file found."`;

module.exports = {
  hooks: {
    "pre-commit": tasks([
      "pretty-quick --staged",
      encryptConfig("server"),
      encryptConfig("web")
    ])
  }
};
