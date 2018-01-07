import {applyMiddleware,createStore,combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory';
// redux-observable中间件在之后用到异步的时候在配置
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';
import compose from '../utils/compose.js';
import rootEpic from '../epics';
import {createEpicMiddleware} from 'redux-observable';

export const history = createHistory();
const middleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(initState = {}){
    const store = createStore(
        rootReducer,
        // compose的作用是合并各个对store进行加强的插件
        // 这个版本的compose中的apply方法貌似有问题，在某些chrome中可以，
        // 而在某些电脑上的chrome却不行，是不是版本问题，ie和edge都不行
        // 如果想要在ie或者低版本的浏览器运行，可以不使用compose，
        // 不使用compose就不能使用redux调试工具或其他增强store的插件
        // 可以尝试阅读官方的compose源码，参考定义自己的相同功能的工具类
        compose(
            applyMiddleware(middleware,epicMiddleware),
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


