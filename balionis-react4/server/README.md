This project is meant to remind me how to build express based backend.

## Collect Skeleton

```
$ cd server
$ npm init -y
$ npm install --save express
$ touch src/server.js
```

```
$ npm install --save-dev webpack webpack-cli 
$ npm install --save-dev @babel/core @babel/preset-env babel-loader
$ npm install --save-dev eslint eslint-loader babel-eslint
$ npm install --save-dev nodemon cross-env 
$ npm install --save winston express-winston config
```

```
$ vi package.json
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "cross-env NODE_ENV=development nodemon --watch src src/app.js",
    "build": "webpack --mode production",
    "serve:debug": "cross-env DEBUG=express:* node ./dist/app-bundle.js",
    "serve": "cross-env NODE_ENV=production node ./dist/app-bundle.js"
  },
...

$ touch webpack.config.js
$ touch babel.config.js
$ touch .eslinkrc.json
```

### Verify Development Mode

```
$ npm run start
```
```
$ chrome http://localhost:8090/v1/entities/1234
# expected response: entityId=1234
```

### Verify Production Mode

```
$ cd ../web
$ npm run build
$ cd ../server
$ npm run build
$ npm run serve
```
```
$ chrome http://localhost:8090/public
# expected response: <TBD>
$ chrome http://localhost:8090/v1/entities/1234
# expected response: entityId=1234
```
