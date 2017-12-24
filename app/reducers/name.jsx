import * as actionsType from '../constants';

export default function name(state = {}, action) {
    switch (action.type) {
        case actionsType.TESTTYPE:
            const newState = {value:action.data};
            console.log('*****************');
            console.log(newState);
            console.log('*****************');
            return newState;
        default:
            console.log('运行了');
            return state;
    }
}