# @danielpes/eslint-config

An npm package including my preferred eslint config, extending `eslint:recommended` with Prettier overrides.

## Usage

1. Add the package as a dev dependency in your project:

   ```sh
   yarn add -D @danielpes/eslint-config
   ```

2. Add it as an entry to the `extends` array in your project's eslint config file.

   `.eslintrc`

   ```json
   {
     "extends": ["@danielpes/eslint-config"],
     "plugins": [],
     "rules:" {}
   }
   ```

## Development and Release

See the [GitHub repository](https://github.com/danielpes/coding-standards) root README file.
