/**

 * User: lj.michale
 * Date: 2022/3/19
 * Description: 文件描述
 */
import {RouteRecordRaw, createRouter, createWebHashHistory} from 'vue-router'

import en from '../i18n/lang/en.js'

import CommonViews from '@/views/CommonViews.vue'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/layout.vue'
import HomeMain from '@/views/index/mainIndex.vue'

// 不是必须加载的组件使用懒加载
// const routeName = en.routeName

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
  // {
  //   path: '/index',
  //   iconCls: 'fa fa-dashboard', // 图标样式class
  //   name: routeName.home,
  //   component: Layout,
  //   alone: true,
  //   children: [
  //     {
  //       path: '/index',
  //       iconCls: 'fa fa-dashboard', // 图标样式class
  //       name: routeName.home,
  //       component: HomeMain,
  //       children: []
  //     }
  //   ]
  // },
]

// const addRouter = [
//   // {
//   //   path: '/',
//   //   iconCls: 'fa fa-paw', // 图标样式class
//   //   name: routeName.icon,
//   //   component: Layout,
//   //   children: [
//   //     {
//   //       path: '/icon',
//   //       iconCls: 'fa fa-life-ring', // 图标样式class
//   //       name: routeName.builtInIcon,
//   //       children: []
//   //     }
//   //   ]
//   // },
//
//
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRouter,
})

export default router
export {defaultRouter}
