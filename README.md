# Greeting App

This app greets users!

## Demo

the basic code of the app that we are working with is:
```
var name = process.argv[2] || 'stranger';
console.log(`hello ${name}`);
```

If we pass the argument 'v0ltr0n', the app will say:

```
hello v0ltr0n
```

If no argument is passed, the app will say:

```
hello stranger
```

## Getting Started

If you are a developer working on this project, fork and clone down from the repo: https://github.com/meghanroserebecca/greeting-app.

### Prerequisites

You will need a stable code editor: we recommend the latest stable version of VS Code, available at: https://code.visualstudio.com/

### Installing

- Node.js is necessary for working in development on this project. Go to https://nodejs.org/en/download/ and install appropriately to your system.<br />
The latest versions of Node.js should include node package manager (npm), so you will not need to download separately.

- eslint and mocha are already packaged in the repo as dev dependencies. Once you have cloned the repo, type npm install into your command line and run it.

### Build
 
node v6.9.2, eslint v3.14.0, mocha v3.2.0

## Coding Standards

Developers on this projects will be required to:
- have basic familiarity with some ES6 implementations,
- write code in modular, easily testable chunks,
- write unit tests prior to writing functionality,
- use mocha to to test their modules,
- write code that meets the specifications outlined in .eslintrc


