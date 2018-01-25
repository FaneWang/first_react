import { Observable } from 'rxjs/RX';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actions from '../actions/login';
import 'rxjs/add/operator/switchMap';
import * as actionsType from '../constants';

const loginEpics = (action$) =>
    action$.ofType('LOGINTYPE').switchMap(
        // 为了保证安全性，在与后台对接获取数据时，将用户名和密码进行加密处理后进行请求
        // 后台返回数据格式，并将数据存到localStorage中。
        // 第一次请求（没有成功登陆时），localStorage中没有数据
        // 第二次请求时，带上localStorage数据，可以进行条件判断，有就带，没有不带
        // 第一次发出的action数据为{username:'xxxx',password:'xxxx',token:''}
        // 第二次（验证是否登陆）发出的action数据为{token:'xxxxxxxxxxx'}
        // 服务器后台第一次接受时返回一个token给客户端，客户端存储
        // 服务器后台第二次只接受一个token，并进行解码，然后根据解码后的内容（token的组成中
        // 含有用户信息[暂时是这么认为的，有机会再验证]）查询用户信息并返回给客户端
        // 这样就可以在刷新时保持登陆状态
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