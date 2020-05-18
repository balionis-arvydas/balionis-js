// @flow

import {JSHandle, Page} from "puppeteer";
import {Snapper, SnapperOptions} from "./snapper";

const isEmptyString = (data: string) => {
    return !data || !(typeof data === 'string') || data.trim().length === 0;
};

export const isEmptyArray = (data: any[]) => {
    return !data || !Array.isArray(data) || data.length === 0;
};

const formatSelector = (pattern:string, ...args:string) => {
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

const getGlobalReportsFolder = () => {
    const result = global.reportsFolder;
    return result;
};

const getGlobalReportsFilename = () => {
    const result = global.reportsFilename;
    return result;
};

const getGlobalReportsSnapOn = () => {
    const result = global.reportsSnapOn || [];
    return result;
};

const getElementTextValue = async (element:JSHandle) => {
    const property = await element.getProperty('textContent');
    const propertyValue = property._remoteObject.value;
    return propertyValue;
};

const getElementsBySelector = async (page:Page, selector:string) => {
    const result = await page.$$(selector);
    return result;
};

const initSnapper = async (page: Page) => {
    const opts = new SnapperOptions();
    opts.page = page;
    opts.path = getGlobalReportsFolder() + "/screenshots/";
    opts.prefix = getGlobalReportsFilename().replace(/.html/g, '');
    opts.statuses = getGlobalReportsSnapOn();

    const result = new Snapper();
    await result.init(opts);

    return result;
};

export default {
    isEmptyString,
    isEmptyArray,
    getGlobalHomeURL,
    getElementTextValue,
    getElementsBySelector,
    formatSelector,
    initSnapper
}
