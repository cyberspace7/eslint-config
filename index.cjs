/** @type {import("eslint").Linter.Config} */
const configuration = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
};

module.exports = configuration;
