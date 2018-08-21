import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import todos from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(

  combineReducers({
    todos,
  }),
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
