# Trak-iT API Object Model

All of the Trak-iT APIs use the same object definitions.
Other Trak-iT API libraries are available on [GitHub](https://github.com/trakitwireless) and [npm](https://www.npmjs.com/org/trakit).

### Prerequisites

We do not require any other packages, however, we are targetting `ESNext`, so if your project uses CommonJS or another module manager, you will need to account for that yourself.

### Building

In order to build this project, you need to install the RollupJS, and plugins for TypeScript and Minifying.
```
npm i rollup rollup-plugin-typescript2 @rollup/plugin-terser
```
After those have been installed, build the project normally.
```
rollup --config rollup.config.js
```

## Questions and Feedback

If you have any questions, please start for the project on GitHub
https://github.com/trakitwireless/trakit-ts-objects/issues
