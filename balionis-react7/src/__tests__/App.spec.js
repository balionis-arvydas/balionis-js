import actions from "../actions";
import steps from "./steps";

describe('App', () => {

    const tasks = [
        "123456",
        "234567",
        "345678",
    ];

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

    test("should have 0 tasks", async () => {
        await steps.should_have_tasks(page, []);
    });

    test("should add tasks", async () => {
        await steps.should_add_tasks(page, tasks);
    });

    test("should remove task", async () => {
        await steps.should_remove_task(page, tasks[0]);
    });

    test("should have 2 tasks", async () => {
        const expected = tasks;
        expected.splice(0, 1);
        await steps.should_have_tasks(page, expected);
    });
});
