const isEmptyString = (data) => {
    return !data || !(typeof data === 'string') || data.trim().length === 0;
};

const checkEmptyString = (data, message) => {
    if (isEmptyString(data)) {
        throw new Error(message);
    }
    return data;
};

const isEmptyArray = (data) => {
    return !data || !Array.isArray(data) || data.length === 0;
};

const checkEmptyArray = (data, message) => {
    if (isEmptyArray(data)) {
        throw new Error(message);
    }
    return data;
};

const isEmptyObject = (data) => {
    return !data || Object.keys(data).length === 0;
};

const checkEmptyObject = (data, message) => {
    if (isEmptyObject(data)) {
        throw new Error(message);
    }
    return data;
};

module.exports = {
    isEmptyString,
    checkEmptyString,
    isEmptyArray,
    checkEmptyArray,
    isEmptyObject,
    checkEmptyObject
};
