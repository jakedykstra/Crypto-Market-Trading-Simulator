import React from 'react';
import ReactDOM from 'react-dom';
import BlockTrade from './BlockTrade';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlockTrade />, div);
  ReactDOM.unmountComponentAtNode(div);
});
