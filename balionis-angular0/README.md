# Why?

This set of packages is meant to remind me how to build, package and run with angular cli; 

# How?

## Build

```
npm install 
npm run build
```

## Debug (Visual Studio Code)

1. VSCode / Open Extensions (Ctrl+Shift+X) / Search 'Debugger for Chrome'

2. Edit .vscode/launch.json 
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "attach",
            "name": "Attach to Chrome against localhost",
            "port": 9222,
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}"
        }
    ]
}
```
3. ng serve

4. chrome --remote-debugging-port=9222 --user-data-dir=C:\Temp
5. open http://localhost:4200

6. add break point
7. click on 'Bug' icon (left sidebar)  
8. select 'Attach to Chrome against localhost' 

Hopefully, it does connect... It did after 'Save Workspace As...' (I think...)
