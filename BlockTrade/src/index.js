import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlockTrade from './BlockTrade';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BlockTrade />, document.getElementById('root'));
registerServiceWorker();
