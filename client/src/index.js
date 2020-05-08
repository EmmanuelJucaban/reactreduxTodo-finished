import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './containers/App';

import reducers from './reducers';

// Sets up redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Takes 3 parameters.
// 1st is Our combined reducers. Root index.js file in reducers folder
// 2nd is any state we want preloaded. We will make use of this later.
// Any redux middlewares we want to use.

const store = createStore(
  reducers,
  {auth: { authenticated: localStorage.getItem('token')}},
  composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  // Provider is a component that we use to hold our store.
  // Our store is what our components will 'connect' to
  // in order to get a piece of state
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
