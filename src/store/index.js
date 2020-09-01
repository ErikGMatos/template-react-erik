import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducer from './persistReducer';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const SagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(SagaMiddleware))
    : applyMiddleware(SagaMiddleware);

const store = createStore(persistReducer(rootReducer), enhancer);

const persistor = persistStore(store);

SagaMiddleware.run(rootSaga);

export { store, persistor };
