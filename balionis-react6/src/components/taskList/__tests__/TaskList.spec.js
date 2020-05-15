import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TaskList from '../TaskList';

describe('TaskList', () => {
    test("snapshot", async () => {
        const component = renderer.create(
            <TaskList/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("message", async () => {
        const component = shallow(<TaskList/>);
        expect(component.text()).toEqual('Hello World.');
    });
});
