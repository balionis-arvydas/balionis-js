import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mockStore } from '../../../redux/__tests__/mockStore';

import AddTask from '../AddTask';
import { addTask } from "../../../redux/actions";

describe('AddTask', () => {
    let store;

    beforeAll(() => {
        jest.resetAllMocks();
    });

    beforeEach(() => {
        store = mockStore({
            taskList: { tasks: [] }
        });
        store.dispatch = jest.fn();
    });

    test("snapshot", async () => {
        const component = renderer.create(
            <Provider store={store}>
                <AddTask/>,
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test("should add task", async () => {
        const component = mount(
            <Provider store={store}>
                <AddTask/>
            </Provider>
        );

        component.find('input').simulate('change', { target: { value: '12345' } });
        component.find('button').simulate('click');

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            addTask('12345', 1)
        );
    });
});
