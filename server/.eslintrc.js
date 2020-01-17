module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  plugins: ["import", "prettier", "@typescript-eslint"],
  root: true,
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ],
    "prettier/prettier": "error"
  }
};
