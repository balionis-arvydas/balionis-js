import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mockStore } from '../redux/__tests__/mockStore';

import App from '../App';

describe('AppComponent', () => {
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
                <App/>,
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

});
