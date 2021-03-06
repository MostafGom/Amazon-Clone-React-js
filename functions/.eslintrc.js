module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "no-unused-vars": "off",
    "max-len": "off",
    "object-curly-spacing": true,

  },
};
