import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import TestContainer from './containers/test';
import configureStore from './store';

let store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(TestContainer);

if (module.hot) {
  module.hot.accept('./containers/test', () => { render(TestContainer) });
}


// import {combineReducers} from 'redux';
// function f1(){
//   console.log('f1');
// }

// function f2(){
//   console.log('f2');
// }

// function f3(){
//   console.log('f3');
// }

// const reducers = {
//   f1,
//   f2
// }
// console.log('--------------------------');
// console.log({...reducers});
// console.log('--------------------------');
// console.log(reducers);

// console.log('--------------------------');
// console.log(combineReducers(reducers));

// console.log('--------------------------');
// console.log(combineReducers({f1,f2}));
