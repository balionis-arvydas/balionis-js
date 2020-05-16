import helpers from "../helpers";
import c from "../constants";

const verifyEmptyTasks = async (page) => {
    const tasks = await helpers.findAll(page, c.TASK_LIST_TASKS);
    expect(tasks).toEqual([]);
}

export default {
    verifyEmptyTasks
}
