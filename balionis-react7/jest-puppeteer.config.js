const window = {
    width: 1366,
    height: 768,
};

var browserPath;
if (process.platform !== "darwin") {
    browserPath = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
}

module.exports = {
    launch: {
        args: [
            `--window-size=${window.width},${window.height}`,
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-gpu",
            "--disable-notifications",
            "--disable-extensions",
            "--no-proxy-server",
            "--proxy-server='direct://",
            "--proxy-bypass-list=*",
        ],
        defaultViewport: { width: window.width, height: window.height },
        timeout: 10000,
        headless: process.env.DEBUG_MODE !== 'true',
        executablePath: browserPath,
    },
};
