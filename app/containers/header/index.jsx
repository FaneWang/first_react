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
const { Header } = Layout;
import logoImg from '../../static/images/logo.png';
import buttonGroup from 'antd/lib/button/button-group';
const ButtonGroup = Button.Group;
const CommonHeader = () => (
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
                    <ButtonGroup>
                        <Button className='header-menu-button' size='small'>登录</Button>
                        <span> / </span>
                        <Button className='header-menu-button' size='small'>注册</Button>
                    </ButtonGroup>
                </div>
            </Col>
        </Row>
    </Header>
)

export default CommonHeader;