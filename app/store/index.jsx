import {applyMiddleware,createStore,compose,combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory';
// redux-observable中间件在之后用到异步的时候在配置
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';

export const history = createHistory();
const middleware = routerMiddleware(history);

export default function configureStore(initState = {}){
    const store = createStore(
        rootReducer,
        // compose的作用是合并各个对store进行加强的插件
        compose(
            applyMiddleware(middleware),
            window.devToolsExtension && window.devToolsExtension()
        )
    );

    // 配置热更新
    if(process.env.NODE_ENV === 'dev' && module.hot){
        module.hot.accept('../reducers',() => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}


