import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore }  from 'redux';
import thunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers  from './store/reducers/'
import App from './containers/App/';
import './index.css';

injectTapEventPlugin();

const apiCall = ({ dispatch, getState }) => next => action => {
  if (action.type === 'API') {
    const config = action.config || { 'method': 'GET'};
    console.log('config: ', config);
    return fetch(`http://localhost:3001${action.url}`, config)
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        dispatch(action.success(data))
      })
  }
  return next(action);
};


let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, apiCall),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Router path="/" component={App}>
        </Router>
    </Router>
  </Provider>,
  document.getElementById('root')
);
