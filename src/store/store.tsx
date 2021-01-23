import { combineReducers, createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { authReducer } from './auth/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
    let middlewares: Middleware[] = [
        thunk
    ];
    if (__DEV__) {
        middlewares = [...middlewares, createLogger()]
    }
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, middleWareEnhancer);
    return store;
}