# Cooding Standards

Tools and configuration files to help me follow standards and keep consistency across my projects.

## Packages

This repository is managed with [lerna](https://lerna.js.org/) and includes two packages:

1. [`@danielpes/coding-standards`](./packages/coding-standards/)

   Includes general shared tools and confiiguration files for Prettier, Husky, lint-staged and commitlint.

1. [`@danielpes/eslint-config`](./packages/eslint-config)

   Inclues my shared configuration for ESLint, based on eslint:recommended with prettier overrides.

The published packages can be found on this repo's [Packages page](https://github.com/danielpes?tab=packages&repo_name=coding-standards).

## Usage

See the individual packages' README file for usage details.

## Development

This repository is managed with yarn and lerna. As usual, development starts with dependency installation:

```sh
yarn install
```

Then, changes can be made with commits following [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Releases

New releases can be made by running the corresponding script:

```sh
yarn run lerna:release
```

Which will pick a new version automatically according to the commit types, create a new tag, create a new GitHub release with release notes and update the CHANGELOG.md file.

All releases can be found on the repo's [Releases page](https://github.com/danielpes/coding-standards/releases).
