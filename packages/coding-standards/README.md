# @danielpes/coding-standards

An npm package including some general shared tools and confiiguration files for Prettier, Husky, lint-staged and commitlint.

## What's included

<!-- prettier-ignore -->
| Name | Description | Version | Website | GH repository | npm package |
| :-: | :- | :- | :-: | :-: | :-: |
| Prettier | An opinionated code formatter | 2.2 | [prettier.io](https://prettier.io/) | [prettier/prettier](https://github.com/prettier/prettier) | [prettier](https://www.npmjs.com/package/prettier) |
| commitlint | Linter for commit messages | 11.0 | [commitlint.js.org](https://commitlint.js.org/#/) | [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint) | [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) |
| Husky | Git hooks made easy | 4.3 | [typicode.github.io/husky](https://typicode.github.io/husky/) | [typicode/husky](https://github.com/typicode/husky) | [husky](https://www.npmjs.org/package/husky) |
| lint-staged | Run linters on git staged files | 10.5 | - | [okonet/lint-staged](https://github.com/okonet/lint-staged) | [lint-staged](https://www.npmjs.com/package/lint-staged) |

## Usage

1. Add the package as a dev dependency in your project:

   ```sh
   yarn add -D @danielpes/coding-standards
   ```

   This should already add Husky, Prettier and similar required dependencies to node_modules, so there should be no need to keep them in devDependencies.

1. Point each of the desired configuration files in your project to the shared config:

   `.huskyrc.js`

   ```js
   module.exports = require("@danielpes/coding-standards/config/husky");
   ```

   `.lintstagedrc.js`

   ```js
   module.exports = require("@danielpes/coding-standards/config/lintstaged");
   ```

   `.prettierrc.js`

   ```js
   module.exports = require("@danielpes/coding-standards/config/prettier");
   ```

   `.commitlintrc.js`

   ```js
   module.exports = require("@danielpes/coding-standards/config/commitlint");
   ```

## Development and Release

See the [GitHub repository](https://github.com/danielpes/coding-standards) root README file.
