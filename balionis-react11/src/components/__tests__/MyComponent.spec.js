import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
    test("snapshot", async () => {
        const component = renderer.create(
            <MyComponent/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("message", async () => {
        const component = shallow(<MyComponent/>);
        expect(component.text()).toEqual('Hello World.');
    });
});
