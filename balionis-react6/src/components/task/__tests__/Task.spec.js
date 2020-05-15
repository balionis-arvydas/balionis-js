import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Task from '../Task';

describe('Task', () => {
    test("snapshot", async () => {
        const component = renderer.create(
            <Task/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("message", async () => {
        const component = shallow(<Task/>);
        expect(component.text()).toEqual('Hello World.');
    });
});
