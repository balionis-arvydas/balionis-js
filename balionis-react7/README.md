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
npm install --save-dev flow-bin flow-typed @babel/cli @babel/preset-flow
```
* flow-bin & flow-typed - enables 'flow' type checking 

```
mkdir -p src/__tests__
```

## Verify

### Start balionis-react6 
```
npm install --verbose
npm run start
# this should open a browser at http://localhost:8080
```

### Run e2e 
```
npm run test:local

> balionis-react7@1.0.0 test:local C:\com.balionis\dev\balionis-js\balionis-react7
> cross-env NODE_ENV=test DEBUG_MODE=true jest --runInBand --config jest.config.local.js

PASS src/__tests__/App.spec.js
  ● Console

    console.info
      login: url=http://localhost:8080/

      at _callee2$ (src/actions.js:15:19)

    console.info
      should_add_task: xpath=//div[@data-automation-id='app']//li[contains(@class,'taskWrapper')]/span[contains(text(),'123456')]

      at _callee2$ (src/__tests__/steps.js:18:19)

    console.info
      should_add_task: xpath=//div[@data-automation-id='app']//li[contains(@class,'taskWrapper')]/span[contains(text(),'234567')]

      at _callee2$ (src/__tests__/steps.js:18:19)

    console.info
      should_add_task: xpath=//div[@data-automation-id='app']//li[contains(@class,'taskWrapper')]/span[contains(text(),'345678')]

      at _callee2$ (src/__tests__/steps.js:18:19)

    console.info
      should_remove_task: xpath=//div[@data-automation-id='app']//li[contains(@class,'taskWrapper')]/span[contains(text(),'123456')]

      at _callee4$ (src/__tests__/steps.js:35:19)


Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        4.565 s, estimated 5 s
Ran all test suites.
📦 reporter is created on: C:\com.balionis\dev\balionis-js\balionis-react7\html-reports\report.html

```
