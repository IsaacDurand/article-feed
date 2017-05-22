import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import articleApp from './reducers';
import Routes from './components/Routes'

let store = createStore(articleApp);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
