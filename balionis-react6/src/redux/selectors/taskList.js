import { TASK_STATE } from "../../types/constants";

export const getTaskList = store => {
    return store.taskList || {};
};

export const getTasks = store => {
    return getTaskList(store).tasks ? getTaskList(store).tasks : [];
};

export const getTasksByState = (store, taskState) => {
    const tasks = getTasks(store);
    return (taskState === TASK_STATE.ALL) ? tasks : tasks.filter(task => task.state === taskState);
};

