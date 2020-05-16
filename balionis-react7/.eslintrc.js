module.exports = {
    "parser": "babel-eslint",
    "plugins": ["jest"],
    "extends": [
        "plugin:jest/recommended"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "globals": {
        "page": true,
        "browser": true,
        "context": true,
        "jestPuppeteer": true
    }
};
