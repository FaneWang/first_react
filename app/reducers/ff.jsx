import * as actionsType from '../constants';

export default function ff(state = {}, action) {
    switch (action.type) {
        case actionsType.TESTTYPE:
            // 为了遵循原来的state不能改变的原则，必须拷贝一个新的state并返回，下面这种做法是错误的
            // const newState = {value:action.data};
            const newState = Object.assign({},state,{value:action.data});
            console.log('*****************');
            console.log(newState);
            console.log('*****************');
            return newState;
        default:
            return state;
    }
}