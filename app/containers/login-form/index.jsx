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

    handleLogin = (username,password) => {
        const loginAction = this.props.loginAction;
        loginAction.update({username,password});
        console.log(username + '-----' + password);
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

