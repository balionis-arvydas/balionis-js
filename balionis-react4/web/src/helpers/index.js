export const isEmptyString = (data) => {
    return !data || !(typeof data === 'string') || data.trim().length === 0;
};

export const checkEmptyString = (data, message) => {
    if (isEmptyString(data)) {
        throw new Error(message);
    }
    return data;
};

export const isEmptyArray = (data) => {
    return !data || !Array.isArray(data) || data.length === 0;
};

export const checkEmptyArray = (data, message) => {
    if (isEmptyArray(data)) {
        throw new Error(message);
    }
    return data;
};

export const isEmptyObject = (data) => {
    return !data || Object.keys(data).length === 0;
};

export const checkEmptyObject = (data, message) => {
    if (isEmptyObject(data)) {
        throw new Error(message);
    }
    return data;
};
