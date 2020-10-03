import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store';

const middlewares = [thunkMiddleware];

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
