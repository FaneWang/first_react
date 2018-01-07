import React from 'react';
import Input from 'antd/lib/input';
import 'antd/lib/input/style';
import Form from 'antd/lib/form';
import 'antd/lib/form/style';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style';
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style';
import './style.css';
const FormItem = Form.Item;


function validateUsername(username) {
    if (!(/^[a-zA-Z0-9_-]+$/.test(username))) {
        return {
            usernameValidateStatus: 'error',
            usernameErrorMsg: '用户名不能为空！'
        };
    } else {
        return {
            usernameValidateStatus: 'success',
            usernameErrorMsg: null
        };
    }
}

function validatePassword(password) {
    if (!(/^[a-zA-Z0-9_-]+$/.test(password))) {
        return {
            passwordValidateStatus: 'error',
            passwordErrorMsg: '密码不能为空！'
        };
    } else {
        return {
            passwordValidateStatus: 'success',
            passwordErrorMsg: null
        };
    }
}

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick = () => {
        const username = this.state.username;
        const password = this.state.password;
        if(username == null || password == null || username.length == 0 || password.length == 0){
            return;
        }
        const handleLogin = this.props.handleLogin;
        handleLogin(username, password);
    }

    // 处理用户名输入
    handleUserNameChange = (e) => {
        this.setState({
            ...validateUsername(e.target.value),
            username: e.target.value
        });
    }

    // 处理密码输入
    handlePasswordChange = (e) => {
        this.setState({
            ...validatePassword(e.target.value),
            password: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem validateStatus={this.state.usernameValidateStatus}
                        help={this.state.usernameErrorMsg}>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名！" value={this.state.username}
                            onChange={this.handleUserNameChange.bind(this)} />
                    </FormItem>
                    <FormItem validateStatus={this.state.passwordValidateStatus}
                        help={this.state.passwordErrorMsg}>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" placeholder="请输入密码！" value={this.state.password}
                            onChange={this.handlePasswordChange.bind(this)} />
                    </FormItem>
                    <FormItem>
                        <Checkbox>记住我</Checkbox>
                        <a className="login-form-forgot" href="">忘记密码</a><br />
                        <Button type="primary" className="login-form-button"
                            onClick={this.handleClick.bind(this)}
                        >
                            登 录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}


