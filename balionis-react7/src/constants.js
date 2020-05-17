const LOGIN_TIMEOUT = 60000;
const LOGIN_SELECTOR = "[data-automation-id='app']";
const TASK_LIST_TASKS_SELECTOR = "[data-automation-id='app'] li.taskWrapper";
const TASK_LIST_TASKS_XPATH = "//div[@data-automation-id='app']//li[contains(@class,'taskWrapper')]/span[contains(text(),'{0}')]";
const ADD_TASK_INPUT_SELECTOR = "[data-automation-id='app'] .addTaskWrapper input";
const ADD_TASK_BUTTON_SELECTOR = "[data-automation-id='app'] .addTaskWrapper button";

export default {
    LOGIN_TIMEOUT,
    LOGIN_SELECTOR,
    TASK_LIST_TASKS_SELECTOR,
    TASK_LIST_TASKS_XPATH,
    ADD_TASK_INPUT_SELECTOR,
    ADD_TASK_BUTTON_SELECTOR
};
