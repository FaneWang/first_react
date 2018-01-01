import React from 'react';
import './style.css';
import Carousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <label className="home-test">这是home页面的css测试！！！</label>
                <h3>这是首页哦！！！</h3>
            </div>
        )
    }

}
