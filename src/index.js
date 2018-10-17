import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import { CookiesProvider } from 'react-cookie';
import NavigationBar from './NavigationBar';


import App from './App';
import CountButton from './CountButton';
import RouterTest from './RouterTest';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><NavigationBar /></BrowserRouter>, document.getElementById('navigationbar'));




ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<CountButton />, document.getElementById('countbutton'));
ReactDOM.render(<RouterTest />, document.getElementById('routertest'));
ReactDOM.render(
    <Root title="react test" abc="abc">
      [0,1,2]
    </Root>,
    document.getElementById('root')
);
registerServiceWorker();
