import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AddTask from '../AddTask';

describe('AddTask', () => {
    test("snapshot", async () => {
        const component = renderer.create(
            <AddTask/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("message", async () => {
        const component = shallow(<AddTask/>);
        expect(component.text()).toEqual('Hello World.');
    });
});
