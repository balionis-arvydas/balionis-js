const defaultTestURL = "http://localhost:8080";
const testURL = process.env.TEST_URL === undefined ? defaultTestURL : process.env.TEST_URL;

const defaultReportsFolder = "./html-reports";
const testReportsFolder = process.env.TEST_REPORTS_FOLDER === undefined ? defaultReportsFolder : process.env.TEST_REPORTS_FOLDER;

const defaultReportsFilename = "report.html";
const testReportsFilename = process.env.TEST_REPORTS_FILENAME === undefined ? defaultReportsFilename : process.env.TEST_REPORTS_FILENAME;

module.exports = {
    "preset": "jest-puppeteer",
    "globals": {
        "homeURL": testURL,
        "reportsFolder": testReportsFolder,
        "reportsFilename": testReportsFilename,
        "reportsSnapOn": ["failed"],
    },
    "testURL": testURL,
    "verbose": true,
    "transform": {
        "^.+\\js$": "babel-jest"
    },
    "testMatch": [
        "<rootDir>/src/**/__tests__/*.spec.(js|jsx)"
    ],
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": testReportsFolder,
            "filename": testReportsFilename,
        }],
    ]
};
