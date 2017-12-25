import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

    render() {
        return (
            <div>
                <h3>欢迎来到本页面！！！</h3>
                {this.props.children}
            </div>
        )
    }

}
