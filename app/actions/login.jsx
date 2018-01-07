import * as actionsType from '../constants';

export function update(data){
    return {
        type:actionsType.LOGINTYPE,
        ...data
    };
}