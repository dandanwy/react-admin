import Login from '../pages/login/Login'
import Index from '../pages/admin/dashboard/Index'
import List from '../pages/admin/products/List'
import PageNoFound from '../pages/pageNoFound/Index'
import Edit from '../pages/admin/products/Edit'
import User from '../pages/admin/userManage/userInfo/User'
import RolesInfo from '../pages/admin/userManage/roleInfo/Roles'
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
        exact: true,
        isShow: true,
        component: Index,
        icon: 'bar-chart',
        title: '看板'
    },
    {
        path: '/admin/user',
        exact: true,
        isShow: true,
        icon: 'user',
        title: '用户管理',
        children: [
            {
                path: '/admin/user',
                isShow: true,
                exact: true,
                component: User,
                title: '角色管理',
            },
            {
                path: '/admin/roles',
                isShow: true,
                exact: true,
                component: RolesInfo,
                title: '用户信息',
            }
        ]
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