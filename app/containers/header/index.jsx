import React from 'react';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style';
import './style.css';
const MenuInfos = () => (
    <div className='header-wrapper'>
        {/* logo */}
        <div className='header-logo'>
            <img src="" alt="logo" />
        </div>
        {/* 导航栏 */}
        <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['2']} style={{ lineHeight: '50px' }}>
            <Menu.Item key="1">导航一</Menu.Item>
            <Menu.Item key="2">导航二</Menu.Item>
            <Menu.Item key="3">导航三</Menu.Item>
        </Menu>
    </div>
)

export default MenuInfos;