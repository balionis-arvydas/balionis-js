This project is meant to remind me how to build puppeteer integration application from scratch

## Configure

```
npm init -y
```

```
npm install --save-dev jest puppeteer jest-puppeteer
npm install --save-dev @types/jest @babel/runtime @babel/plugin-transform-runtime
npm install --save-dev @types/puppeteer @types/jest-environment-puppeteer
```
* jest - core package;
* puppeteer and jest-puppeteer - enables tests to use 'browser' and 'page'
* @types/jest - eslint rules for 'describe' and 'it'.
* @babel/runtime and @babel/plugin-transform-runtime - enables tests to use 'async' and 'await'.
* @types/puppeteer - defines typescript types of puppeteer 
* @types/jest-environment-puppeteer - type definitions for jest-puppeteer.config.js global.context/debug/...
// * @types/expect-puppeteer - type definitions for expect.toMatch/toClick/...  

```
npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev babel-jest
npm install --save-dev eslint eslint-loader babel-eslint eslint-plugin-jest
```
* @babel/core - this package mainly converts ECMAScript 2015+ code into a backwards compatible version of JavaScript.
* @babel/preset-env - this package allows you to use the latest JavaScript.
* babel-jest - package together with babel-preset transforms our code inside of the test environment.
* eslint - is the core dependency for all functionalities.
* eslint-loader - enables us to hook eslint into webpack.
* babel-eslint - this is a parser that enables eslint to lint all valid ES6+ codes.
* eslint-plugin-jest - defines eslint rules for jest

```
npm install --save-dev cross-env
npm install --save-dev jest-html-reporters 
```
* cross-env - enables NODE_ENV=test windows/linux transparency 

```
mkdir -p src/__tests__
```
