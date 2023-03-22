import React from 'react';
import { Layout } from '@arco-design/web-react';
import Sider from '../layout/Sider';
import { Outlet } from 'react-router-dom';

function Main() {
    const Content = Layout.Content;
    return (
        <Layout style={{ height: '100vh' }} className='layout-collapse-demo w-screen flex-row'>
            <Sider />
            <Layout className={'overflow-y-scroll h-full'}>
                {/* <Header style={{ paddingLeft: 20 }}>Header</Header> */}
                <Layout style={{ padding: '12px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content>
                        <Outlet />
                    </Content>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Main;
