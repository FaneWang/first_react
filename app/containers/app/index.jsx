import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import TestContainer from '../test';
import './style.css';

const App = ({ match }) => {
    console.log(match);
    return (
        <div>
            <label className='app-test'>这是样式打包测试！！！</label>
            <h3>这是App页面！！！</h3>
            <Route path={`${match.path}/test`} component={TestContainer} />
            <Route path={`${match.path}/user`} component={User} />
        </div>
    )
}

// js的箭头函数如果要返回对象，要使用（），而不是{}
const User = () => (
    <div>
        <h3>这是一个User组件！！！</h3>
    </div>
)

export default App;
