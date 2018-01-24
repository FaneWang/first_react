import React from 'react';
import LoginComponent from '../../components/login-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActionFromOther from '../../actions/login';


// console.log('********************:::::::::::' + loginActionFromOther.update({username:'54545'}).username);
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    // 点击当前组件的子组件的登录按钮后会调用该方法处理登录逻辑
    handleLogin = (username,password) => {
        const loginAction = this.props.loginAction;
        loginAction.update({username,password});
        // console.log('登录成功！！！' + this.props.userInfo.username);
        // 如果登录成功，那么获取当前组件父组件的handleCancel方法并执行，让登录界面消失
        const handleCancel = this.props.handleCancel;
        handleCancel();
    }

    
    render() {
        return (
            <div>
                <LoginComponent handleLogin={this.handleLogin.bind(this)}/>
            </div>
        )
    }
}

// ---------react  redux连接

function mapStateToProps(state){
    return {
        userInfo:state.getUserInfo.userInfo
    };
}

function mapDispatchToProps(dispatch){
    return {
        loginAction:bindActionCreators(loginActionFromOther,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

