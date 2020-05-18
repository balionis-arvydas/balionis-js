import helpers from "../helpers";
import c from "../constants";

const should_have_tasks = async (page, expected) => {
    const tasks = await helpers.getElementsBySelector(page, c.TASK_LIST_TASKS_SELECTOR);
    const actual = await Promise.all(tasks.map(task => helpers.getElementTextValue(task)));

    expect(actual).toEqual(expected);
};

const should_add_task = async (page, text) => {
    await page.waitForSelector(c.ADD_TASK_INPUT_SELECTOR);
    await page.type(c.ADD_TASK_INPUT_SELECTOR, text, { delay: 20 });
    const button = await page.waitForSelector(c.ADD_TASK_BUTTON_SELECTOR);
    await button.click();

    const xpath = helpers.formatSelector(c.TASK_LIST_TASKS_XPATH, text);
    await console.info(`should_add_task: xpath=${xpath}`);

    const task = await page.waitForXPath(xpath);

    const actual = await helpers.getElementTextValue(task);

    expect(actual).toEqual(text);
};

const should_add_tasks = async (page, tasks) => {
    for (let i=0; i<tasks.length; i++) {
        await should_add_task(page, tasks[i]);
    }
};

const should_remove_task = async (page, text) => {
    const xpath = helpers.formatSelector(c.TASK_LIST_TASKS_XPATH, text);
    await console.info(`should_remove_task: xpath=${xpath}`);

    const task = await page.waitForXPath(xpath);
    await task.click();

    await page.waitForFunction(
        xpath => !document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue,
        {},
        xpath
    );
};

export default {
    should_have_tasks,
    should_add_task,
    should_add_tasks,
    should_remove_task,
};
