import React from 'react';
import './style.css';
import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style';

const {Content}  = Layout;
const FooterInfos = () => (
    <div>
        <Layout>
            <Content className='footer-infos'>
                footer-infos
            </Content>
        </Layout>
    </div>
)

export default FooterInfos;
