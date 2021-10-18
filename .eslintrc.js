module.exports = {
  root: true,
  env: {
    node: false,
    browser: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-prototype-builtins": "off",
  },
};
