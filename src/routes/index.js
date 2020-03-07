import Login from '../pages/login/Login'
import Index from '../pages/admin/dashboard/Index'
import List from '../pages/admin/products/List'
import PageNoFound from '../pages/pageNoFound/Index'
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
        component: Index
    },
    {
        path: '/admin/products',
        component: List
    }
]