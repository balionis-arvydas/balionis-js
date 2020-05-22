import { REMOVE_TASK } from "./actionTypes";

export const removeTask = id => ({
    type: REMOVE_TASK,
    payload: {
        id
    }
});
