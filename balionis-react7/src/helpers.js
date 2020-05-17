const isEmptyString = (data) => {
    return !data || !(typeof data === 'string') || data.trim().length === 0;
};

const formatString = (pattern, ...args) => {
    return pattern.replace(/(\{[0-9]+\})+/g, match => {
        const index = parseInt(match.replace(/[\{\}]/g, ''));
        if (index < args.length) {
            return args[index];
        } else {
            throw new Error(`no arg '${match}' in pattern '${pattern}' with args=${JSON.stringify(args)}`);
        }

    });
};

const getGlobalHomeURL = () => {
    const result = global.homeURL;
    return result;
};

const getElementTextValue = async (element) => {
    const property = await element.getProperty('textContent');
    const propertyValue = property._remoteObject.value;
    return propertyValue;
};

const findArrayBySelector = async (page, selector) => {
    const result = await page.$$(selector);
    return result;
};

export default {
    isEmptyString,
    formatString,
    getGlobalHomeURL,
    getElementTextValue,
    findArrayBySelector
}
