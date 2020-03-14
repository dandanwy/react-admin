import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon, Dropdown, Avatar, message } from 'antd';
import { adminRoutes } from '../../routes/index'
import { clearToken } from '../../utils/auth'
import './frame.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(item => item.isShow);

function Index(props) {
    const popMenu = (
        <Menu onClick={(p) => {
            if (p.key === 'logOut') {
                clearToken();
                props.history.push('/login');
            } else {
                message.info(p.key);
            }
        }}>
            <Menu.Item key="notice">通知中心</Menu.Item>
            <Menu.Item key="setting">设置</Menu.Item>
            <Menu.Item key="logOut">退出</Menu.Item>
        </Menu>
    );
    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    <h1 style={{color: 'white'}}>dandan：React后台管理系统</h1>
                </div>
                <Dropdown overlay={popMenu}>
                    <div>
                        <Avatar>U</Avatar>
                        <span>超级管理员</span><Icon type="down"></Icon>
                    </div>
                </Dropdown>
            </Header>
        <Layout>
            <Sider width={180} className="site-layout-background">
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                {routes.map(route => {
                    return (
                        route.children ? <SubMenu key={route.path + 'SubMenu'} title={
                            <span>
                                <Icon type={route.icon} />
                                {route.title}
                            </span>
                        }>
                            {route.children.map((item, index) => {
                                return (
                                    <Menu.Item key={item.path} onClick={p => {
                                        props.history.push(p.key);
                                    }}>
                                        {item.title}
                                    </Menu.Item>
                                )
                            })}
                        </SubMenu> : <Menu.Item key={route.path} onClick={p => {
                                        props.history.push(p.key);
                                    }}>
                                        <span>
                                            <Icon type={route.icon} />
                                            {route.title}
                                        </span>
                                    </Menu.Item>
                    )
                })}
                </Menu>
            </Sider>
            <Layout>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 10,
                        margin: 0,
                        minHeight: 280,
                    }}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
        </Layout>
    )
}

export default withRouter(Index)
