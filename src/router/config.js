export default {
  menus: [
    // 首页路由
    { key: "/dashboard/index", title: "首页" ,component: "Home"},
    // 订单路由
    {
      key: "/dashboard/order",
      title: "订单管理",
      icon: "scan",
      subs: [
        {
          key: "/dashboard/order/order",
          title: "订单查询",
          component: "Order",
        },
        {
          key: "/dashboard/order/add",
          title: "新增订单",
          component: "Addorder",
        },
        {
          key: "/dashboard/order/del",
          title: "删除订单",
          component: "DelOrder",
        },
      ],
    },
    // 权限路由
    {
      key: "/dashboard/emp",
      title: "员工权限管理",
      icon: "safety",
      subs: [
        {
          key: "/dashboard/emp/Employees",
          title: "员工管理",
          component: "Employees",
        },
      ],
    },
    {
      key: "/dashboard/goods",
      title: "商品管理",
      icon: "safety",
      component: "Goods",
    },
  ],
  others: [], // 非菜单相关路由
};
