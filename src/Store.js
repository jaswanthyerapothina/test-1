/* global __DEVELOPMENT__ __DEVTOOLS__ */
/* eslint global-require: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import DevTools from './core/util/DevTools';
import { Saga } from './Saga';
import { State } from './State';

const initialState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(thunk);
// middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);

const __DEVELOPMENT__ = window.__DEVELOPMENT__ || false;
const __DEVTOOLS__ = window.__DEVTOOLS__ || false;

if (__DEVELOPMENT__) {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
        predicate: (getState, action) =>
            action.type !== 'EFFECT_TRIGGERED' &&
            action.type !== 'EFFECT_RESOLVED'
    });
    middlewares.push(logger);
}

let createStoreWithMiddleware = applyMiddleware(...middlewares);

if (__DEVTOOLS__) {
    createStoreWithMiddleware = compose(
        createStoreWithMiddleware,
        DevTools.instrument()
    );
}

const finalCreateStore = createStoreWithMiddleware(createStore);
const Store = finalCreateStore(State.Reducer(), initialState);
// sagaMiddleware.run(Saga.GetWatcher);

if (__DEVELOPMENT__) {
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./State', () => {
            const nextReducer = require('./State').Reducer;
            Store.replaceReducer(nextReducer);
        });
    }
}

window.Store = Store;

export { Store };
