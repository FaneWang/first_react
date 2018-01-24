import * as actionsType from '../constants';

export function update(data){
    console.log('actions' + data);
    return {
        type:actionsType.TESTTYPE,
        data
    };
}