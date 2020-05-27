This project is meant to remind me how to build & publish react library. I used balionis-react3 as a baseline.

## Build

### Baseline 

1) clone
```
cp -r balionis-react3 balionis-react11
cp -r balionis-react3 balionis-react11/examples
cd balionis-react11
rm -rf public
```

2) install plugins needed by webpack (some of them already exist from balionis-react3)
```
npm install --save-dev mini-css-extract-plugin
npm install --save-dev node-sass style-loader css-loader sass-loader
```

3) exclude react from dependencies, list files to be included in publishing  
```
vi public.json
...
  "main": "dist/index.js",
  "bundleDependencies": false,
...
  "peerDependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  },
...
  "files": [
    "dist",
    "README.md",
    "package.json"
  ],
...
  "publishConfig": {
    "registry": "http://nexus.balionis.com:8081/repository/npm-private/"
  }
```

4) refactor webpack config to create js and css bundles   
```
vi webpack.config.json
### too many changes to list... 
```

5) rename App to MyComponent
6) refactor src/index.js to export MyComponent
7) build, test
```
npm install --verbose
npm run build
npm run test
```

## Verify 

```
cd balionis-react11/examples
```

1) "install" our library
```
vi package.json
...
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "balionis-react11": "file:.."
  },
```

2) "use" MyComponent from our library
```
vi src/components/App.jsx
...
import { MyComponent } from "balionis-react11";
...
            <div className="appWrapper">
                <MyComponent/>
            </div>
...
```

3) verify
```
npm run start
### you should see the browser on http://localhost:8080/ with 'Hello World.' enclosed in (blue-red) borders   
```

## Publish 

```
npm publish
### you should see http://nexus.balionis.com:8081/#browse/browse:npm-private:balionis-react11%2Fbalionis-react11-0.0.1.tgz
```

## Verify (again) 

1) "install" our library
```
vi package.json
...
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "balionis-react11": "^0.0.1"
  },
```
2) cleanup to make sure that you start "fresh"
```
rm -rf node_modules package-lock.json
npm install --verbose
npm run start
```
* You should see the browser on http://localhost:8080/ with 'Hello World.' enclosed in (blue-red) borders.
* You should see the folder
```
balionis-react11\examples\node_modules
    + balionis-react11
        + dist
            - index.css
            - index.js
        - package.json
        - README.md    
``` 


