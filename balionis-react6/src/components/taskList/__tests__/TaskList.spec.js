import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mockStore } from '../../../redux/__tests__/mockStore';

import TaskList from '../TaskList';

describe('TaskList', () => {
    const tasks = [
        { id: 1, content: '12345' },
        { id: 2, content: '23456' },
    ];

    let store;

    beforeAll(() => {
        jest.resetAllMocks();
    });

    beforeEach(() => {
        store = mockStore({
            taskList: { tasks }
        });
        store.dispatch = jest.fn();
    });

    test("snapshot", async () => {
        const component = renderer.create(
            <Provider store={store}>
                <TaskList/>,
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

});
