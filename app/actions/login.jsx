import * as actionsType from '../constants';

export function update(data){
    return {
        type:actionsType.LOGINTYPE,
        data
    };
}

export function loginSuccess(data){
    return {
        type:actionsType.LOGINSUCCESSTYPE,
        data
    };
}