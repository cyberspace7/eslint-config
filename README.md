# ESLint Configuration

ESLint configuration for TypeScript projects

## Description

Provides a base ESLint configuration for TypeScript projects.

## Usage

Add the following dependencies to the project with a package manager:

```bash
pnpm add --save-dev eslint @typescript-eslint/eslint-plugin @cyberspace/eslint-config
```

Then extend the ESLint configuration:

```javascript
/** @type {import("eslint").Linter.Config} */
const configuration = {
  extends: ["@cyberspace7"],
};

module.exports = configuration;
```

## Development

See [`package.json`](package.json) for the list of available scripts.

### Prerequisites

This project require the following dependencies:

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io)

### Setup

Install the dependencies:

```bash
pnpm install
```

### Release

Releases are automatic, following the merge of the release pull request (see [Release Action](https://github.com/cyberspace7/release-action#readme)).
A release PR can be explicitely generated by running manually
[this workflow](https://github.com/cyberspace7/eslint-config/actions/workflows/release.yml).

## Authors

- [**Benjamin Guibert**](https://github.com/benjamin-guibert) – main author and contributor.

## Contributing

Submit a feature request or any idea to improve the project, as it is greatly appreciated,
in the [discussions](https://github.com/cyberspace7/eslint-config/discussions/categories/ideas).

If you find a bug concerning this project, please fill a [bug report](https://github.com/cyberspace7/eslint-config/issues/new?assignees=&labels=bug-report&projects=&template=bug-report.yml).
If it concerns a security vulnerability, please email us at `contact@a60.dev`.

For contributing, please check the [guidelines](.github/CONTRIBUTING.md).

## Licensing

This project is licensed under the [MIT License](LICENSE).
