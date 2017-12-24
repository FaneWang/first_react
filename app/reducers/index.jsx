import {combineReducers} from 'redux';
import name from './name';

const reducers = {
    name
};


console.log('--------------------');
console.log(name);
export default combineReducers(reducers);
