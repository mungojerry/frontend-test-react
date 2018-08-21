import thunk from 'redux-thunk';
import todos from './reducers';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';

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
