This project is meant to remind me how to build react application from scratch without using create-react-app

## Step-by-Step

### Step 1) 

`npm init -y`

`npm install react react-dom`
* _react_ - React.js library.
* _react-dom_ - This package serves as the entry point to the DOM and server renderers for React.

`npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin`
* _webpack_ - Webpack is a bundler for modules.
* _webpack-cli_ - Command Line interface for webpack.
* _webpack-dev-server_ - Development server that provides live reloading.
* _html-webpack-plugin_ - The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.

`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader`
* _@babel/core_ - Mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.
* _@babel/preset-env_ - This package allows you to use the latest JavaScript.
* _@babel/preset-react_ - This package is a set of plugins used to support React.js specific features.
* _babel-loader_ - This package allows transpiling JavaScript files using Babel and webpack.

`npm install --save-dev less less-loader css-loader style-loader html-loader file-loader`
* _css-loader, style-loader_ - These packages allow you to import css and image files. They are already referenced by webpack.config.js.

`mkdir public`
`touch public\index.html`
`mkdir src`
`touch src\index.js`
`touch src\index.css`
`touch src\components\App.js`
`touch src\components\App.css`
`touch webpack.config.js`
`touch babel.config.js`

`vi package.json`
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"
  },
```

#### Verify
`npm run build`
This should create dist directory.
`npm run start`
This should start the browser at http://localhost:8080 with __Hello Word__ in yellow with gray background.

`touch webpack.config.js`
```
module.exports = {
  devtool: 'inline-source-map',
  // … the rest of the config
};
```
This tells webpack to generate source maps using the devtool property of the configuration.

### Step 2) 

`npm --save-dev install eslint eslint-loader babel-eslint eslint-config-react eslint-plugin-react`
* _eslint_ - is the core dependency for all functionalities.
* _eslint-loader_ - enables us to hook eslint into webpack. 
* _babel-eslint_ - react used ES6+ syntax, this is a parser that enables eslint to lint all valid ES6+ codes.
* _eslint-config-react_ and _eslint-plugin-react_ are both used to enable ESLint to use pre-made rules.

`vi webpack.config.js`
```
module.exports = {
  // modify the module
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'] // include eslint-loader
    }]
  },
};
```

`touch .eslinkrc.json`

#### Verify 
This step is to verify that `dist` artifact works in standalone mode.     

`npm install --save-dev http-server`

`vi package.json`
```
  "scripts": {
    // add the line
    "serve": "http-server -p 8080 ./dist"
  },
```
The error `GET /sockjs-node/info?t=" Error (404): "Not found"` is caused by running webpack-dev-server on port other than 3000.
You can fix it by adding the following webpack configuration:
 
`vi webpack.config.js`
```
module.exports = {
  // add this line.
  devServer: {
    host: '127.0.0.1',
    port: 8080
  },
};
```

### Step 3)

TODO: add jest 

