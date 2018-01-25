import React from 'react';
import Tabs from 'antd/lib/tabs';
import 'antd/lib/tabs/style';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style';
import './style.css';
import LoginForm from '../login-form';
const TabPane = Tabs.TabPane;

export default class LoginRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultActiveKey: '1'
        }
    }

    handleCancel = () => {
        const handleAppear = this.props.handleAppear;
        handleAppear();
    }


    render() {
        const storage = window.localStorage;
        console.log('storage:::' + storage.a);
        return (
            <div>
                <Modal visible={this.props.visible}
                    onCancel={this.handleCancel}
                    width='360px'
                    footer={null}
                >
                    <Tabs defaultActiveKey={this.state.defaultActiveKey} >
                        <TabPane tab="登录" key="1">
                            <LoginForm handleCancel={this.handleCancel.bind(this)}/>
                        </TabPane>
                        <TabPane tab="注册" key="2">

                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}



