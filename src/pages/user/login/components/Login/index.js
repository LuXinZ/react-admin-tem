import { Tabs, Form } from "antd";
import React from "react";
import LoginItem from "./LoginItem";
const { TabPane } = Tabs;
const LoginFrom = () => {
  return (
    <Tabs>
      <TabPane key="account" tab="账号密码登陆登录">
        <LoginItem />
      </TabPane>
      <TabPane key="mobile" tab="手机号登录">
        <LoginItem />
      </TabPane>
    </Tabs>
  );
};

export default LoginFrom;
