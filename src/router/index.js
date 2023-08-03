/**
 * @description 路由入口
 *
 * @author lj.michale
 * @date 2023-08-03
 * */

import {RouteRecordRaw, createRouter, createWebHashHistory} from 'vue-router'
import Login from '@/views/login/index.vue'

// 不是必须加载的组件使用懒加载

const routeName = en.routeName

export type IRouter = {
    hidden?: boolean
    iconCls?: string
    alone?: boolean
    children: Array<IRouter>
} & RouteRecordRaw

const defaultRouter: Array<IRouter> = [
    { path: '/',
        redirect: '/index',
        hidden: true,
        children: []
    },
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true,
        children: []
    },
]

const addRouter = [

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: defaultRouter,
})

export default router
export {defaultRouter, addRouter}
