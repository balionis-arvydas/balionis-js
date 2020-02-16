import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
    it("snapshot", () => {
        const component = renderer.create(
            <App/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("message", () => {
        const component = shallow(<App/>);
        expect(component.text()).toEqual('Hello World.');
    });
});
