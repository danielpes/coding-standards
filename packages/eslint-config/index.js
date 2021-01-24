module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["import"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  rules: {
    // Off
    curly: "off",
    "no-use-before-define": "off",
    "require-atomic-updates": "off",
    "sort-imports": "off",
    // Warn
    "no-alert": "warn",
    "no-return-assign": "warn",
    "no-unused-vars": "warn",
    // Error
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: [["builtin", "external"]],
        "newlines-between": "always"
      }
    ]
  }
};
