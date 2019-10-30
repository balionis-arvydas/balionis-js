# BalionisAngular9LibApp

This project is meant to remind me how to generate, build and publish angular v7.3.9 library.

## Generate Wrapper application

```
$ ng new balionis-angular9-lib-app
$ mv balionis-angular9-lib-app balionis-angular9-lib
$ cd balionis-angular9-lib
$ npm run start
```

### Verify

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Generate library 

$ ng generate library balionis-angular9-lib --prefix=bal

_Note (1): prefix 'bal' will be used to prefix your library components and ... etc._

_Note (2): angular.json is modified with the new 'projects' section 'balionis-angular9-lib'._

## Add library build 

$ vi package.json
```
...
  "scripts": {
    ...
    "lib:build": "ng build balionis-angular9-lib",
    "lib:pack": "cd dist/balionis-angular9-lib && npm pack",
    "package": "npm run lib:build && npm run lib:pack",
    ...
  }
```

$ npm run lib:build

### Test library 

$ vi src\app\app.module.ts
```
import { BalionisAngular9LibModule } from 'balionis-angular9-lib';
...
  imports: [
    BrowserModule,
    BalionisAngular9LibModule
  ],
...
```

$ vi src\app\app.component.html
```
<h2>Example</h2>
<bal-balionis-angular9-lib></bal-balionis-angular9-lib>
```

`$ npm run start`

## Extend library 

$ ng generate component foo --project=balionis-angular9-lib

$ vi projects\balionis-angular9-lib\src\lib\balionis-angular9-lib.module.ts

```
import { FooComponent } from './foo/foo.component';
...
declarations: [
    BalionisAnguar9LibComponent,
    FooComponent
  ],
  exports: [
    BalionisAnguar9LibComponent,
    FooComponent
  ]
...
```

$ vi projects\balionis-angular9-lib\src\public-api.ts
```
...
export * from './lib/foo/foo.component';
```

$ npm run package

### Test extended library 

$ vi src/app/app.component.html
```
<h2>Example</h2>
<enl-example-ng6-lib></enl-example-ng6-lib>
<enl-foo></enl-foo>
```

$ npm run start

## Publish 

$ vi projects/balionis-angular9-lib/package.json
```
{
  ...,
  "version": "1.0.0",
  ...,
  "publishConfig": {
    "registry": "http://banote14.balionis.com:8081/repository/npm-private/"
  }
}
```

$ npm run package

$ npm publish ./dist/balionis-angular9-lib/balionis-angular9-lib-1.0.0.tgz

_Note: make sure that user which was used to generate _auth= in .npmrc has nexus role "nx-admin"._

## Testing libary in a separate app

$ ng new lib-tester
$ cd lib-tester
$ npm run start

$ npm install example-ng6-lib 
or 
$ npm install ../example-ng6-lib/dist/example-ng6-lib/example-ng6-lib-0.0.1.tgz

$ vi src/app/app.module.ts
```
import { ExampleNg6LibModule } from 'example-ng6-lib';
...
imports: [
    BrowserModule,
    ExampleNg6LibModule
  ],
...
```

$ vi src/app/app.component.html
```
...
 <enl-foo></enl-foo>
 ```

## Document 

$ vi package.json
```
 "scripts": {
  ...
  "build:lib": "ng build ng-example-library",
  "copy-license": "copy .\\LICENSE .\\dist\\ng-example-library",
  "copy-readme": "copy .\\README.md .\\dist\\ng-example-library",
  "copy-files": "npm run copy-license && npm run copy-readme",
  "pack@lib": "cd dist/ng-example-library && npm pack",
  "package": "npm run build:lib && npm run copy-files && npm run npm:pack"
},
```

$ vi projects\example-ng6-lib\package.json
```
{
  "name": "ng-example-library",
  "version": "1.2.0",
  "description": "This is a simple example Angular Library published to npm.",
  "keywords" :["Angular","Library"],
  "license" : "SEE LICENSE IN LICENSE",
  "repository": {
    "type" : "git",
    "url" : "https://github.com/t-palmer/ng-example-library"
  },
  "homepage" :"https://medium.com/@palmer_todd/the-angular-library-series-publishing-ce24bb673275",
  "peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0"
  }
}
```