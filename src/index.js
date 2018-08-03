import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountButton from './CountButton';
import RouterTest from './RouterTest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CountButton />, document.getElementById('countbutton'));
ReactDOM.render(<RouterTest />, document.getElementById('routertest'));

registerServiceWorker();
