import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { CookiesProvider } from 'react-cookie';
import NavigationBar from './NavigationBar';

import App from './container/app'
import reducer from './reducer'

import AppOld from './component_old/App';
import CountButton from './component_old/CountButton';
import RouterTest from './component_old/RouterTest';
import Root from './component_old/Root';
import registerServiceWorker from './component_old/registerServiceWorker';

const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

ReactDOM.render(<BrowserRouter><NavigationBar /></BrowserRouter>, document.getElementById('navigationbar'));

ReactDOM.render(<AppOld />, document.getElementById('app'));
ReactDOM.render(<CountButton />, document.getElementById('countbutton'));
ReactDOM.render(<RouterTest />, document.getElementById('routertest'));
ReactDOM.render(
    <Root title="react test" abc="abc">
      [0,1,2]
    </Root>,
    document.getElementById('root')
);
registerServiceWorker();
