module.exports = {
    "env": {
        "test": {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-flow"
            ],
            "plugins": [
                "@babel/plugin-transform-runtime"
            ]
        }
    }
}
