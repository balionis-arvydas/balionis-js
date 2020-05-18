// @flow

import {Page} from "puppeteer";
import * as fs from "fs";

import helpers from "./helpers";

export class SnapperOptions {
    page: Page;
    path: string;
    prefix: string;
    statuses: string[];
}

export class Snapper {
    screenshotPromise: ?Promise<any>;

    constructor() {
        this.screenshotPromise = null;
    }

    async init (options: SnapperOptions) {

        try {
            if (!fs.existsSync(options.path)) {
                fs.mkdirSync(options.path, { recursive: true });
            }
        } catch(error) {
            await console.error(`init: failed to create snapshots path=${options.path}`, error);
        }

        //$FlowFixMe
        jasmine.getEnv().addReporter({
            specDone: async result => {
                if (helpers.isEmptyArray(options.statuses) || options.statuses.indexOf(result.status) >= 0) {

                    const specName = result.fullName.replace(/[:\s]/g,'-').substring(0, 200);
                    const snapName = options.path + options.prefix + '-' + result.status + '-' + specName + '.png';

                    if (this.screenshotPromise) {
                        let p = this.screenshotPromise;
                        this.screenshotPromise = null;

                        p.then(() => {
                            this.screenshotPromise = this.take(snapName, options.page);
                            this.screenshotPromise.then(() => {
                                this.screenshotPromise = null;
                            });
                        })
                    } else {
                        this.screenshotPromise = this.take(snapName, options.page);
                        this.screenshotPromise.then(() => {
                            this.screenshotPromise = null;
                        });
                    }
                }
            },
        });
    }

    async take (filename: string, page: Page) {
        if (page.isClosed()) {
            await console.warn('take: page is closed already.');
            return false;
        }

        try {
            await console.log(`take: filename=${filename}`);
            await page.screenshot({path: filename});
        } catch(error) {
            await console.error(`take: failed to take screenshot on filename=${filename}`, error);
            return false;
        }

    }

    async save () {
        if (this.screenshotPromise) {
            await this.screenshotPromise;
            this.screenshotPromise = null;
        }
    }
}
