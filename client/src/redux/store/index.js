import { createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers'
import { rootSaga } from '../sagas'


const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
    const middlewares = [reduxThunk, sagaMiddleware];

    const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

    const enhancers = composeEnhancers(
        applyMiddleware(...middlewares),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    const store = createStore(
        rootReducer,
        preloadedState,
        enhancers
    );

    return store;
}