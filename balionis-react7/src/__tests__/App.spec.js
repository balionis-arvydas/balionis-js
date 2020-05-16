import actions from "../actions";
import steps from "./steps";

describe('App', () => {

    let page;

    beforeAll(async () => {
        page = await actions.login();
        // snap = await helpers.initSnapper(page);
    });

    afterEach(async () => {
        // await helpers.flushSnapper(page, snap);
    });

    afterAll(async () => {
        // await helpers.flushSnapper(page, snap);
        await page.close();
    });

    test("should have empty taskList", async () => {
        await steps.verifyEmptyTasks(page);
    });

});
