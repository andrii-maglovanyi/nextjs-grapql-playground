module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true,
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

    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    React: "writable",
    SharedArrayBuffer: "readonly",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "import",
    "prettier",
    "react",
    "react-hooks",
    "sort-keys-fix",
    "@typescript-eslint",
  ],
  root: true,
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
      },
    ],
    "prettier/prettier": "error",
    "react/prop-types": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "."],
      },
    },
    react: {
      version: "detect",
    },
  },
};
