import {applyMiddleware,createStore,compose} from 'redux';

// redux-observable中间件在之后用到异步的时候在配置
import rootReducer from '../reducers';


export default function configureStore(initState = {}){
    const store = createStore(
        rootReducer
        // compose的作用是合并各个对store进行加强的插件
        // compose(
        //     applyMiddleware(中间件1，中间件2，。。。，中间件n),
        //     在这行 可以配置其他开发工具
        // )
    );

    // 配置热更新
    if(process.env.NODE_ENV === 'dev' && module.hot){
        module.hot.accept('../reducers',() => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
            console.log(rootReducer);
        })
    }

    return store;
}
