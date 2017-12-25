import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

    render() {
        return (
            <div>
                <h3>这是首页哦！！！</h3>
            </div>
        )
    }

}
