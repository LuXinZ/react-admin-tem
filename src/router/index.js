import React from "react";
import RouterConfig from "./config";
import AllComponents from "../components";
import { Redirect, Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import queryString from "query-string";
export default function RouterIndex(props) {
  return (
    <Switch>
      {Object.keys(RouterConfig).map((keys) => {
        return RouterConfig[keys].map((r) => {
          // r 是
          //{ key: "/", title: "首页", icon: "mobile", component: "Dashboard" },
          if (r.component === "Dashboard") {
            return (
              <Route
                exact
                path="/"
                render={() => <Redirect to="/Dashboard" push />}
              />
            );
          }
          const route = (r) => {
            // 获取所有的组件,的路径

            const Component = AllComponents[r.component];

            // <Route key='/' exact path='/'
            return (
              <Route
                // 如果是循环路由则,写key
                // 以路由的, 路径为key
                key={r.key}
                // 精确匹配
                // exact
                // 跳转路径
                path={r.key}
                // 这允许方便的内联渲染和包裹，而不是上面那种不想要的重新安装的解释您可以传递一个在位置匹配时调用的函数，而不是使用属性为您创建新的 React element component，该 render 属性接收所有相同的 route props 的 component 渲染属性。
                render={() => {
                  // 重新包装组件
                  return <Component />;
                }}
              />
            );
          };

          return r.component ? route(r) : r.subs.map((r) => route(r));
        });
      })}
    </Switch>
  );
}
