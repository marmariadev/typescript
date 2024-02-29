# Setting Up and Running TypeScript in Your Project

This guide will walk you through the steps to set up your environment for TypeScript development using a global installation of TypeScript. Ensure you have [Node.js](https://nodejs.org/) installed on your system to use `npm` and `npx`.

## **1. Install TypeScript Globally**

```bash
npm install -g typescript
```

This command installs TypeScript globally, allowing you to use the TypeScript compiler (`tsc`) across all your projects.

## **2. Initialize a New Node.js Project**

```bash
mkdir my_project && cd my_project
npm init -y
```

This creates a new `package.json` file in your project, which will manage your project's dependencies and scripts.

## **3. Generate the `tsconfig.json` File**

```bash
tsc --init
```

This generates a `tsconfig.json` file with default compiler settings for TypeScript. Customize this file as needed, particularly setting `"outDir": "./dist"` for the location of the compiled JavaScript files and `"rootDir": "./src"` to specify the directory of your TypeScript source files. These settings ensure that your TypeScript files in `src` are compiled to JavaScript files in `dist`.

## **4. (Optional) Install ESLint for TypeScript**

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

Configure `.eslintrc.json`:

```bash
echo '{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}' > .eslintrc.json
```

## **5. Write TypeScript Code**

Inside your project, create a `src` directory and then create an `index.ts` file within `src`:

```typescript
// src/index.ts
console.log("Hello, TypeScript!");
```

## **6. Compile TypeScript Code to JavaScript**

```bash
tsc
```

This compiles all `.ts` files from the `src` directory into `.js` files in the `dist` directory, based on the settings specified in `tsconfig.json`.

## **7. Run the Compiled JavaScript File with Node.js**

```bash
node dist/index.js
```

This command runs the compiled JavaScript file located in the `dist` directory. Ensure that `index.js` matches the name of your main compiled JavaScript file.

## **Automate Compilation and Execution with NPM Scripts**

Add the following scripts to your `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

Now, you can compile your project with `npm run build` and run it with `npm start`. Make sure to adjust the script paths as necessary for your project's structure.
