import "../style/components/dashboard.less";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import RouterConfig from "../router/config";
import RouterIndex from "../router/index";
import { withRouter } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
function Dashboard(props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const menuClick = (e) => {
    props.history.push(e.key);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={menuClick}
        >
          {Object.keys(RouterConfig).map((keys) => {
            return RouterConfig[keys].map((params) => {
              if (params.subs) {
                return (
                  <SubMenu
                    key={params.key}
                    icon={<UserOutlined />}
                    title={params.title}
                  >
                    {params.subs.map((r) => {
                      const { key, title } = r;
                      return <Menu.Item key={key}>{title}</Menu.Item>;
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={params.key} icon={<UserOutlined />}>
                    {params.title}
                  </Menu.Item>
                );
              }
            });
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <RouterIndex />
        </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(Dashboard);
