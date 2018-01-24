import { Observable } from 'rxjs/RX';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actions from '../actions/login';
import 'rxjs/add/operator/switchMap';

const loginEpics = (action$) =>
    action$.ofType('LOGINTYPE').switchMap(
        action => ajax({
            url:'https://cheliao-78dfe.firebaseio.com/userinfo.json',
            method:'GET',
            responseType:'json'
        })
        .map(response => actions.loginSuccess(response.response))
    );

export default loginEpics;