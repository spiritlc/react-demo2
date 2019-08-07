import { createStore, combineReducers, applyMiddleware } from 'redux'
import countReducer from './countReducer'
import {loginReducer} from './loginReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import watchLogin from './loginReducer'

const saga = createSagaMiddleware()
const store = createStore(combineReducers({count: countReducer, userInfo: loginReducer}), applyMiddleware(logger, saga))

saga.run(watchLogin)
export default store