import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style';
import './style.css';
import Copyright from '../components/copyright';
import FooterInfos from '../components/footer_infos';
import CommonHeader from '../containers/header';
import App from '../containers/app';
import Home from '../containers/home';
import LoginRegister from '../containers/login-register';
const { Content, Footer } = Layout;

export default class RouterMap extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Layout className='layout'>
                    <CommonHeader />
                    <Content className='route-content'>
                        <div>
                            {/* 这里要注意exact的使用，外层路由不能使用exact，否则内层路由不能正常工作 */}
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path='/learn' component={App} />
                                <Route path='/journey' component={LoginRegister} />
                                <Route path='/about' component={App} />
                            </Switch>
                            {/* <Route path='/test' component={TestContainer} /> */}
                        </div>
                    </Content>
                    <FooterInfos />
                    <Footer className='route-footer'>
                        <Copyright />
                    </Footer>
                </Layout>
            </ConnectedRouter>
        )
    }
}
