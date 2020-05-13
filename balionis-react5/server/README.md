This sub-project is meant to remind me how to use socket.it with express based backend.

## Baseline

```
# view ../../balionis-react4/server/README.md
```

### Verify Development Mode

```
$ npm run start
```

``` 
$ curl http://localhost:8090/v1/user/12345
// or, 
$ chrome http://localhost:8080
```

### Verify Production Mode

```
$ cd ../web
$ npm run build
$ cd ../server
$ npm run build
$ export NODE_ENV=production
$ export REACT_APP_STAGE=production
$ export REACT_APP_LOG_LEVEL=debug
$ node ./dist/app-bundle.js
```

```
$ curl http://localhost:8090/v1/user/1234
# expected response: { type: 'GetUserResponse', ... }
```
