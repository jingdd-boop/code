import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Index from '../pages/admin/dashboard'
import Edit from '../pages/admin/products/List'
import List from '../pages/admin/products/List'
export const mainRouters = [
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/404',
    component:PageNotFound
  }
];

export const adminRoutes = [
  {
    path:'/admin/dashboard',
    component:Index
  },
  {
    path:'/admin/products',
    component:List
  },
  {
    path:'/admin/products/edit?id',
    component:Edit
  }
]