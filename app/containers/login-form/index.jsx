import React from 'react';
import LoginComponent from '../../components/login-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActionFromOther from '../../actions/login';
import message from 'antd/lib/message';
import 'antd/lib/message/style';

// console.log('********************:::::::::::' + loginActionFromOther.update({username:'54545'}).username);
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // componentWillUnmount() {
    //     if (this.props.loginInfo) {
    //         console.log('登录错误打印：' + this.props.loginInfo.errorMsg);
    //         message.error(this.props.loginInfo.errorMsg);
    //     }
    // }

    // 点击当前组件的子组件的登录按钮后会调用该方法处理登录逻辑
    handleLogin = (username, password) => {
        const loginAction = this.props.loginAction;
        loginAction.update({ username, password });
        // 在这里打印props中的内容是会报错的，react-redux的connect方法在组件显示前执行一次，此时
        // state中时没有username的，异步获取数据后，connect方法会再执行一次，还是在组件更新显示前，
        // 在本方法执行后，所以异步获取的数据不能在这个方法里获取，而只能在render中取得，而且render方法中需要
        // 对数据是否存在做判断，因为第一次并不能获取值，会报错
        // console.log('登录成功！！！' + this.props.userInfo.username);
        // 如果登录成功，那么获取当前组件父组件的handleCancel方法并执行，让登录界面消失
        const handleCancel = this.props.handleCancel;
        handleCancel();
    }


    render() {
        

        // localStorage.setItem("a","168");
        // console.log("当前的路径为：" + storage.a);
        return (
            <div>
                <LoginComponent handleLogin={this.handleLogin.bind(this)} />
            </div>
        )
    }
}

// ---------react  redux连接

// 这个函数这种写法将只监听state.getUserInfo.userInfo，而不是全局state，
// 即只有在state中的useInfo变化时，才会再次触发这个方法，随后更新视图
function mapStateToProps(state) {
    return {
        loginInfo: state.getUserInfo.loginInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginActionFromOther, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(LoginForm);

