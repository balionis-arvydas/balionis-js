import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
    test("snapshot", async () => {
        const component = renderer.create(
            <App/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("message", async () => {
        const component = shallow(<App/>);
        expect(component.text()).toEqual('Hello World.');
    });
});
