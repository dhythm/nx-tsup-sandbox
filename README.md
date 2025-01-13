# Sandbox with Nx + tsup

## Create the repo

```sh
npx create-nx-workspace@17.2.8 --pm yarn

✔ Where would you like to create your workspace? · nx-tsup-sandbox
✔ Which stack do you want to use? · react
✔ What framework would you like to use? · none
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · something
✔ Which bundler would you like to use? · webpack
✔ Test runner to use for end to end (E2E) tests · playwright
✔ Default stylesheet format · styled-components
✔ Enable distributed caching to make your CI faster · Yes
```

## Create a library

Add `workspaceLayout` before run generator.
After then,

```sh
yarn nx generate @nx/react:library foo

✔ What unit test runner should be used? · vitest
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · vite
✔ What should be the project name and where should it be generated? · foo @ libs/foo
```

```sh
yarn nx generate @nx/react:library bar

✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · vite
✔ What should be the project name and where should it be generated? · bar @ libs/bar
```

## Set tsup up

### Install the library

```sh
yarn add tsup --dev
```

### Build by tsup

```sh
yarn nx run foo:tsup
```

## Run tests

```sh
yarn run test
yarn nx run bar:test
```
