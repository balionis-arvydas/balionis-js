This project is meant to remind me how to build react with typescript from scratch.

## Baseline

```
npm init -y
```

This creates a package.json file with default values.

```
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

webpack - a tool that will bundle your code and optionally all of its dependencies into a single .js file.

```
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

@types/react - declaration files for React and React-DOM.

```
npm install --save-dev typescript ts-loader source-map-loader
npm install --save-dev style-loader css-loader less-loader file-loader html-loader
```

```
vi tsconfig.json
vi webpack.config.js
```

```
npm install --save-dev http-server
```

```
vi package.json
...
  "scripts": {
    // add the line
    "serve": "http-server -p 8080 ./dist"
  },
```
The error `GET /sockjs-node/info?t=" Error (404): "Not found"` is caused by running webpack-dev-server on port other than 3000.
You can fix it by adding the following webpack configuration:
 
```
vi webpack.config.js
...
module.exports = {
  // add this line.
  devServer: {
    host: '127.0.0.1',
    port: 8080
  },
};
```
## Verify

```
npm install -g http-server

vi package.json
...
  "scripts": {
    "serve": "http-server -p 8080 ./dist"
  },
```

