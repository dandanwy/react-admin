import Login from '../pages/login/Login'
import Index from '../pages/admin/dashboard/Index'
import List from '../pages/admin/products/List'
import PageNoFound from '../pages/pageNoFound/Index'
import Edit from '../pages/admin/products/Edit'
export const mainRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: PageNoFound
    }
]

export const adminRoutes = [
    {
        path: '/admin/dashboard',
        isShow: true,
        component: Index,
        icon: 'bar-chart',
        title: '看板'
    },
    {
        path: '/admin/products',
        isShow: true,
        exact: true,
        component: List,
        icon: 'shop',
        title: '商品管理'
    },
    {
        path: '/admin/products/edit/:id?',
        isShow: false,
        component: Edit
    }
]