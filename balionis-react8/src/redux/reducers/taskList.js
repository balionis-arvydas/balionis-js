import { ADD_TASK, REMOVE_TASK } from "../actions/actionTypes";

const initialState = {
    tasks: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: {
            const task = action.payload;
            return {
                ...state,
                tasks: [...state.tasks, task],
            };
        }
        case REMOVE_TASK: {
            const { id } = action.payload;
            const tasks = state.tasks.filter(t => t.id !== id);
            return {
                ...state,
                tasks
            };
        }
        default:
            return state;
    }
}
