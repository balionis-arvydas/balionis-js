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

$ ng new balionis-angular9-tester
$ cd balionis-angular9-tester
$ npm run start

$ npm install balionis-angular9-lib 
or 
$ npm install ../balionis-angular9-lib/dist/balionis-angular9-lib/balionis-angular9-lib-1.0.0.tgz

$ vi src/app/app.module.ts
```
import { BalionisAngular9LibModule } from 'balionis-angular9-lib';
...
imports: [
    BrowserModule,
    BalionisAngular9LibModule
  ],
...
```

$ vi src/app/app.component.html
```
...
<h2>External Library Example:</h2>
<bal-foo></bal-foo>
 ```

## Document library

$ cd balionis-angular9-lib
$ vi package.json
```
 "scripts": {
  ...
  "lib:build": "ng build balionis-angular9-lib",
  "lib:pack": "cd dist/balionis-angular9-lib && npm pack",
  "copy:license": "copy ./LICENSE ./dist/balionis-angular9-lib",
  "copy:readme": "copy ./README.md ./dist/balionis-angular9-lib",
  "copy:files": "npm run copy:license && npm run copy:readme",
  "package": "npm run lib:build && npm run copy:files && npm run lib:pack"
},
```

$ vi projects\balionis-angular9-lib\package.json
```
{
  "name": "balionis-angular9-lib",
  "version": "1.0.0",
  "description": "This is a simple example angular library published to npm.",
  "keywords" :["Angular","Library"],
  "license" : "SEE LICENSE IN LICENSE",
  "repository": {
    "type" : "git",
    "url" : "https://github.com/balionis-arvydas/balionis-js/balionis-angular9-lib"
  },
  "homepage" :"https://balionis.com/",
  "peerDependencies": {
    "@angular/common": "^7.2.0",
    "@angular/core": "^7.2.0"
  },
  ...
}
```