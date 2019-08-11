# Why?

This set of packages is meant to provide me with the prototypes of build, test, package and dist angular projects.

# What?

1. balionis-angular0 
   - build, package and run with angular cli; 
   
2. balionis-angular1 
   - build, package with gradle (wrapping angular cli); 
   - run as spring boot (webapp); 
   - have logger and config services;

3. balionis-angular2
   - spike ng-bootstrap tooltip.
   
4. balionis-angular3
   - spike ag-grid v17.1 with custom column, custom data and custom renderer.
   
5. balionis-angular4
   - spike ag-grid v20.1 'basic' table functionality.

6. balionis-angular5
   - spike ag-grid v17.1 with grouping and 'enterprise' datasource (need license key).
   
7. balionis-angular6
   - spike ag-grid v20.1 with 'treeData' and 'serverSide' datasource (need license key).

8. balionis-angular7
   - spike ag-grid v17.1 with local grouping and custom expand/collapse event handling.
   
# How?

## Node Setup 

1. download node-v0.00.0-win-x64.zip from https://nodejs.org/en/download/ 
_Note: Latest Version: v8.11.2 (includes npm 5.6.0)_

2. unzip under C:/bin/node-v8.11.2-win-x64

3. open command prompt
```
set NODEJS_HOME="C:\bin\node-v8.11.2-win-x64"
set PATH=%NODEJS_HOME%;%PATH%
```

4. verify
```
>node -v
v8.11.2

>npm version
{ npm: '6.1.0',
  ares: '1.10.1-DEV',
  cldr: '32.0',
  http_parser: '2.8.0',
  icu: '60.1',
  modules: '57',
  napi: '3',
  nghttp2: '1.29.0',
  node: '8.11.2',
  openssl: '1.0.2o',
  tz: '2017c',
  unicode: '10.0',
  uv: '1.19.1',
  v8: '6.2.414.54',
  zlib: '1.2.11' }
```

## Npm Upgrade

```
cd C:\bin\node-v8.11.2-win-x64 
mv npm.cmd npm2.cmd
mv npm npm2
mv npx.cmd npx2.cmd
mv npx npx2
# npm2.cmd install -g npm@latest
npm2.cmd install -g npm@6.1.0 
```

## Angular Setup 

1. install

```
npm install -g @angular/cli
```

2. verify

```
>ng version
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.0.7
Node: 8.11.2
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.6.7
@angular-devkit/core         0.6.7
@angular-devkit/schematics   0.6.7
@schematics/angular          0.6.7
@schematics/update           0.6.7
rxjs                         6.2.0
typescript                   2.7.2
```
