import * as actionsType from '../constants';

export default function getUserInfo(state = {}, action) {
    switch (action.type) {
        case actionsType.LOGINSUCCESSTYPE:
            const successState = Object.assign({}, state, { loginInfo: action.data });
            return successState;
        case actionsType.LOGINERRORTYPE:
            const errorState = Object.assign({}, state, { loginInfo: { errorMsg: action.errorMsg } });
            return errorState;
        case actionsType.LOGINBUTTONCLICKTYPE:
            const butttonClickState = Object.assign({}, state, { loginInfo: {} });
            return butttonClickState;
        default:
            return state;
    }
}