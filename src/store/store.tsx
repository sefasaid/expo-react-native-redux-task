import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { authReducer } from './auth/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
    const middlewares = [createLogger({}), thunk];

    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, middleWareEnhancer);
    return store;
}