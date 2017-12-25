import React from 'react';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import App from '../containers/app';
import Home from '../containers/home';
import TestContainer from '../containers/test';

export default class RouterMap extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='test' component={TestContainer}/>
                </Route>
            </Router>
        )
    }
}
