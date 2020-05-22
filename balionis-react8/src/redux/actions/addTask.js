import { ADD_TASK } from "./actionTypes";

let nextTaskId = 0;

export const addTask = (content, taskId) => ({
    type: ADD_TASK,
    payload: {
        id: (taskId ? taskId : ++nextTaskId),
        content,
    }
});
