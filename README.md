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

## Install tsup

```sh
yarn add tsup --dev
```

## Start the app

To start the development server run `nx serve something`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).
