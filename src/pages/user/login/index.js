import styles from "./style.less";

import { Alert, Checkbox } from "antd";
import React from "react";
import LoginFrom from "./components/Login";

// 定义 Login 页面
const Login = () => {
  return (
    <div className={styles.main}>
      <LoginFrom></LoginFrom>
    </div>
  );
};

export default Login;
