import "../style/components/login.less";
import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { login } from "../api/request";
import { withRouter } from "react-router-dom";
const FormItem = Form.Item;
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onFinish = (value) => {
    // 提交的时候应当发送到服务器

    login(username, password).then((res) => {
      // 登陆成功则跳转
      if (res.code === 1) {
        props.history.push("/");
      } else {
        setUsername("");
        setPassword("");
        message.error("账号或者密码错误");
      }
    });
  };
  return (
    <div className="login">
      <div className="loginForm">
        {/*logo部分*/}
        <div className="loginLogo">
          <span>react管理系统</span>
        </div>
        {/*账号密码表单部分*/}
        <Form name="basic" onFinish={onFinish}>
          <FormItem
            label="请输入用户名"
            rules={[{ required: true, message: "必须填写用户名" }]}
          >
            <Input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormItem>
          <FormItem
            label="请输入密码"
            rules={[{ required: true, message: "必须填写密码" }]}
          >
            <Input.Password
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(Login);
