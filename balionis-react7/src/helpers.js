const isEmptyString = (data) => {
    return !data || !(typeof data === 'string') || data.trim().length === 0;
};

const getGlobalHomeURL = () => {
    const result = global.homeURL;
    return result;
};

const findAll = async (page, selector) => {
    const result = await page.$$(selector);
    return result;
};

export default {
    isEmptyString,
    getGlobalHomeURL,
    findAll
}
