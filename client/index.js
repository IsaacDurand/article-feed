import React from 'react';
import ReactDOM from 'react-dom';
// import components
import {Provider} from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <h1>Article Feed</h1>
  </Provider>,
  document.getElementById('root')
);
