import * as actionsType from '../constants';

export default function getUserInfo(state = {}, action) {
    switch (action.type) {
        case actionsType.LOGINTYPE:
            const newState = Object.assign({}, state, { userInfo: action.data });
            return newState;
        default:
            return state;
    }
}