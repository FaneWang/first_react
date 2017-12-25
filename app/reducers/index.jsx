import {combineReducers} from 'redux';
import pp from './pp';
import ff from './ff';

const reducers = {
    pp,
    ff
};

// 以一个大括号包裹一个函数，相当于一个对象，这个对象有一个方法，这个方法的默认名称使用函数的名称
// 与大括号包裹并提供一个键的区别是，会将键当做方法名，而不是默认的函数名称
// 这里注意：combineReducers方法传入的是一个多个reducer组成的对象，而redux的state初始化时会以函数名分别创建对象
// 为了遵循原来的state不能改变的原则，必须拷贝一个新的state并返回
export default combineReducers(reducers);
