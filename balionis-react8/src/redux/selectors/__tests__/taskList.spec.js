import { getTaskList, getTasks, getTasksByState } from "../taskList";
import { TASK_STATE } from "../../../types/constants";

describe('taskList', () => {
    const tasks = [
        { id: 1, content: '12345' },
        { id: 2, content: '23456' },
    ];

    let store;

    beforeAll(() => {
        jest.resetAllMocks();
    });

    beforeEach(() => {
        store = {
            taskList: { tasks }
        };
    });

    test("getTasks", async () => {
        const actual1 = getTasks({});
        expect(actual1).toEqual([]);

        const actual2 = getTasks(store);
        expect(actual2).toEqual(tasks);
    });

    test("getTasksByState", async () => {
        const actual1 = getTasksByState(store, TASK_STATE.ALL);
        expect(actual1).toEqual(tasks);

        const actual2 = getTasksByState(store, TASK_STATE.COMPLETED);
        expect(actual2).toEqual([]);
    });
});
