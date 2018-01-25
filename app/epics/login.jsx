import { Observable } from 'rxjs/RX';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actions from '../actions/login';
import 'rxjs/add/operator/switchMap';
import * as actionsType from '../constants';

const loginEpics = (action$) =>
    action$.ofType('LOGINTYPE').switchMap(
        action => ajax({
            url:'https://cheliao-78dfe.firebaseio.com/userinfo.json',
            method:'GET',
            responseType:'json',
            async:false
        })
        .map(response => actions.loginSuccess(response.response))
        .catch(error => Observable.of({
            type:actionsType.LOGINERRORTYPE,
            errorMsg:"网络不好，请稍后再试！"
        }))
    );

export default loginEpics;