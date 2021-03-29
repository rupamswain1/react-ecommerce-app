import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';
import createSagaMiddleWare from 'redux-saga';
//import {fetchCollectionStart} from '../redux/shop/shop.sagas';
import rootSaga from '../redux/root-saga'
//import thunk from 'redux-thunk'

const sagaMiddleware=createSagaMiddleWare();
//when thunk is used
//const middlewares=[thunk];
const middlewares=[sagaMiddleware];
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const store=createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor=persistStore(store);

