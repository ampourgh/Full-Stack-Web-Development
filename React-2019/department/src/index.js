import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// applyMiddleware is called on for redux-thunk; how we apply middleware to a redux store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// createStore(reducers) -> given a second variable
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
