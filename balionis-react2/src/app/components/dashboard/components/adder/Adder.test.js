import React from 'react';
import ReactDOM from 'react-dom';
import Adder from './Adder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Adder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
