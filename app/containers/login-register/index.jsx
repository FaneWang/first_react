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
            visible: true,
            defaultActiveKey: '1'
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    // handleOk = () => {
    //     this.setState({
    //         ModalText: 'The modal will be closed after two seconds',
    //         confirmLoading: true,
    //     });
    //     setTimeout(() => {
    //         this.setState({
    //             visible: false,
    //             confirmLoading: false,
    //         });
    //     }, 2000);
    // }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }


    render() {
        return (
            <div>
                <Modal visible={this.state.visible}
                    // onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width='360px'
                    footer={null}
                >
                    <Tabs defaultActiveKey={this.state.defaultActiveKey} >
                        <TabPane tab="登录" key="1">
                            <LoginForm/>
                        </TabPane>
                        <TabPane tab="注册" key="2">

                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}
