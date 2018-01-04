import React from 'react';
import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style';
import Menu from 'antd/lib/menu';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import 'antd/lib/row/style';
import 'antd/lib/col/style';
import 'antd/lib/menu/style';
import './style.css';
const { Header } = Layout;

const CommonHeader = () => (
    <Header className='header-container'>
        <Row>
            <Col lg={3} ></Col>
            <Col lg={3} sm={2} >
                {/* logo */}
                <a href="/">
                    <div className='header-logo'></div>
                </a>
            </Col>
            <Col lg={8} sm={4}></Col>
            <Col lg={10} sm={18}>
                {/* 导航栏 */}
                <Menu theme="light" mode="horizontal"
                    defaultSelectedKeys={['2']} style={{ lineHeight: '57.89px' }}
                    className='header-menu'
                >
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">学习日记</Menu.Item>
                    <Menu.Item key="3">趣闻轶事</Menu.Item>
                    <Menu.Item key="4">个人简介</Menu.Item>
                </Menu>
            </Col>
        </Row>
    </Header>
)

export default CommonHeader;