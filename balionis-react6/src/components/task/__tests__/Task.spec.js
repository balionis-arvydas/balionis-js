import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mockStore } from '../../../redux/__tests__/mockStore';

import Task from '../Task';
import { removeTask } from "../../../redux/actions";

describe('TaskComponent', () => {
    const task = {
        id: 123,
        content: "ABC",
    };

    const props = {
        task,
    };

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
                <Task task={task}/>,
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test("should render content", async () => {
        const component = mount(
            <Provider store={store}>
                <Task {...props}/>
            </Provider>
        );
        expect(component.find('span').text()).toEqual('ABC');
    });

    test("should remove task", async () => {
        const component = mount(
            <Provider store={store}>
                <Task {...props}/>
            </Provider>
        );

        component.find('li').simulate('click');

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            removeTask(123)
        );
    });
});
