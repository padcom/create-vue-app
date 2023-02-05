# Vue.js 3.x application generator

This generator creates a project that has vue, tailwindcss+nesting, pinia, router, typescript, eslint and vitest configured.

## Usage

To use this generator you need to have [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and [node.js](https://nodejs.org) installed through nvm.

Then issue the following command:

```
$ npm create @padcom/vue-app
```

Which will create the following elements:

### `start.ts`
This is the main application entry point. It can be invoked either directly or by calling `npm start`

### `example.test.ts`
This is an example vitest test written in TypeScript

### `package.json`
Project configuration file.

### `.gitignore`
Default list of ignored files

### `.nvmrc`
Contains version of node used when initializing the project

### `tsconfig.json`
Default TypeScript configuration and documentation

## Default scripts

The following list describes the default NPM scripts that can be used with the project

### `start` (alias for `dev`)

### `dev`

Starts the application by running

```
$ npm run dev
```

### `build`

Build the project. All assets are then stored in `dist` folder which is ignored by git by configuration.

### `preview`

Builds the projects and waits for changes, then rebuild.

### `test:watch`

Executes all tests in the project

### `test:watch`

Executes tests that have been changed since the last commit.

### `lint`

You can run linter on your project with the following command:

```
$ npm run lint
```

### `lint:fix`

You can fix all auto-fixable linter problems by issuing the following command:

```
$ npm run lint:fix
```

## TypeScript

All files in the project can use TypeScript (both logic and tests)

## Tests

Tests are executed using Jest runner
