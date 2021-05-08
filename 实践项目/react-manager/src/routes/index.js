import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Index from "../pages/admin/dashboard";
import Edit from "../pages/admin/edit/edit";
import List from "../pages/admin/products/list";
import { AppstoreOutlined, SkinOutlined } from "@ant-design/icons";
export const mainRouters = [
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/404",
    component: PageNotFound,
  },
];

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: Index,
    isShow: true,
    title: "看板",
    icon: <AppstoreOutlined />,
  },
  {
    path: "/admin/products",
    component: List,
    isShow: true,
    title: "商品管理",
    icon: <SkinOutlined />,
  },
  {
    path: "/admin/edit/edit",
    component: Edit,
    isShow: true,
    title: "添加商品",
    icon: <SkinOutlined />,
  },
];
