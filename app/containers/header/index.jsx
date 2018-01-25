import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style';
import Menu from 'antd/lib/menu';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import 'antd/lib/row/style';
import 'antd/lib/col/style';
import 'antd/lib/menu/style';
import './style.css';
import message from 'antd/lib/message';
import 'antd/lib/message/style';
const { Header } = Layout;
import logoImg from '../../static/images/logo.png';
import buttonGroup from 'antd/lib/button/button-group';
import LoginRegister from '../login-register';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginButtonClickActionFromOther from '../../actions/login';

const ButtonGroup = Button.Group;
class CommonHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    // componentWillUnmount() {
    //     if (this.props.loginInfo) {
    //         console.log('登录错误打印：' + this.props.loginInfo.errorMsg);
    //         message.error(this.props.loginInfo.errorMsg);
    //     }
    // }

    // 点击登录出现登陆面板
    handleClick = () => {
        const loginButtonClickAction = this.props.loginButtonClickAction;
        loginButtonClickAction.loginButtonClick();

        this.setState({
            visible: true
        });
        console.log('显示登录组件');
    }

    // 处理登录注册面板显隐
    handleAppear = () => {
        if (this.props.loginInfo) {
            console.log(this.props.loginInfo.username);
        }

        this.setState({
            visible: false
        });

    }

    render() {

        // 因为render方法组件显示与消失都会执行，下面的提示消息在界面显示时也会执行
        // 为了避免这个问题，在handleClick方法中发出一个action，将state中errorMsg重置为空状态
        if (this.props.loginInfo) {
            if (this.props.loginInfo.errorMsg) {
                console.log('登录错误打印：' + this.props.loginInfo.errorMsg);
                message.error(this.props.loginInfo.errorMsg);
            }
        }

        let loginMenu = null;
        if (this.props.loginInfo) {
            if (this.props.loginInfo.username) {
                loginMenu = <label>{this.props.loginInfo.username}</label>;
            }else {
                loginMenu = <ButtonGroup>
                    <Button className='header-menu-button'
                        size='small'
                        onClick={this.handleClick.bind(this)}
                    > 登录</Button>
                    <span> / </span>
                    <Button className='header-menu-button' size='small'>注册</Button>
                </ButtonGroup>;
            }
        } else {
            loginMenu = <ButtonGroup>
                <Button className='header-menu-button'
                    size='small'
                    onClick={this.handleClick.bind(this)}
                > 登录</Button>
                <span> / </span>
                <Button className='header-menu-button' size='small'>注册</Button>
            </ButtonGroup>;
        }

        return (
            <div>
                <Header className='header-container'>
                    <Row>
                        <Col lg={3} ></Col>
                        <Col lg={3} sm={2} >
                            {/* logo */}
                            <a href="/">
                                {/* <div className='header-logo'></div> */}
                                <img src={logoImg} alt="logo" className='header-logo' />
                            </a>
                        </Col>
                        <Col lg={4} sm={4}></Col>
                        <Col lg={10} sm={18}>
                            {/* 导航栏 */}
                            <Menu theme="light" mode="horizontal"
                                defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}
                                className='header-menu'
                            >
                                <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/learn'>学习日记</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/journey'>趣闻轶事</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/about'>个人简介</Link></Menu.Item>

                            </Menu>
                        </Col>
                        <Col lg={1}>
                            <div className='header-menu'><Button icon='search' size='small' /></div>
                        </Col>
                        <Col lg={3}>
                            <div className='header-menu'>
                                {loginMenu}
                            </div>
                        </Col>
                    </Row>
                </Header>

                <LoginRegister visible={this.state.visible} handleAppear={this.handleAppear.bind(this)} />
            </div>

        )
    }


}


function mapStateToProps(state) {
    return {
        loginInfo: state.getUserInfo.loginInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginButtonClickAction: bindActionCreators(loginButtonClickActionFromOther, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommonHeader);
// export default CommonHeader;