module.exports = {
  rules: {
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "lerna",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
};
