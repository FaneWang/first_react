import * as actionsType from '../constants';

export default function pp(state = {}, action) {
    switch (action.type) {
        case actionsType.TESTTYPE:
        console.log('data:' + action.data);
            const newState = Object.assign({},state,{value:action.data});
            console.log('*****************');
            console.log(newState);
            console.log('*****************');
            return newState;
        default:
            return state;
    }
}