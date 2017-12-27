import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import App from '../containers/app';


export default class RouterMap extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    {/* 这里要注意exact的使用，一定要弄明白在使用 */}
                    <Route path='/qq' component={App} />
                    {/* <Route path='/test' component={TestContainer} /> */}
                </div>
            </ConnectedRouter>
        )
    }
}
