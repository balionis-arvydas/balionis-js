import c from "./constants";
import helpers from "./helpers";

const open = async (testURL, options = {}) => {
    const page = await browser.newPage();
    const url = testURL || helpers.getGlobalHomeURL();
    await page.goto(url, options);
    return page;
};

const login = async (testURL, waitForRedirect) => {
    jest.setTimeout(c.LOGIN_TIMEOUT);
    const page = await open(testURL, { timeout: c.LOGIN_TIMEOUT });

    console.info("login: url=" + page.url());

    if (waitForRedirect) {
        await page.waitForNavigation();
    }

    await page.waitForSelector(c.LOGIN_SELECTOR, { timeout: c.LOGIN_TIMEOUT });

    return page;
};

export default {
    open,
    login,
}
