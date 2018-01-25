import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import RouterMap from './routes';
import configureStore from './store';
// import loginCheck from './utils';
let store = configureStore();

const render = Component => {
  // loginCheck(store);
  ReactDOM.render(
    <AppContainer >
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(RouterMap);

if (module.hot) {
  module.hot.accept('./routes', () => { render(RouterMap) });
}

// 函数声明式定义的函数，被大括号包裹，如果不提供名称，则再次调用时使用函数默认名称，
// 如果指定了键，那么以该键为准,该规则同样适用于函数表达式定义的函数
// function f1(){
//   console.log('f1');
// }

// var f2_2 = function f2(){
//   console.log('f2');
// }

// var f3 = function (){
//   console.log('f3');
// }



// f2_2();
// console.log('---------------------------');
// f2();

// console.log({f1});
// console.log('---------------------------');
// console.log({f1_1:f1});

// function update(data){
//   console.log('actions' + data);
//   return {
//       type:"actionsType.TESTTYPE",
//       data
//   };
// }

// const state = {
// 	name:"888",
// 	value:888
// };

// const actions = update("fffffff");

// const newState2 = {...actions,...state};

// const newState = Object.assign({},state,actions);
// console.log(state);

// console.log('~~~~~~~~~~~~~~~~');

// console.log(actions);

// console.log('~~~~~~~~~~~~~~~~');
// console.log(newState);

// console.log('~~~~~~~~~~~~~~~~');
// console.log(newState2);

// import {history} from './store';
// import configureStore from './store';

// console.log(history);
// console.log(configureStore);