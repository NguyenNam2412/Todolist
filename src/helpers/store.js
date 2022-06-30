import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../saga';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware,
        ),
    ));

sagaMiddleware.run(rootSaga);