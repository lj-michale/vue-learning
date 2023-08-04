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
const dataAsset = () => import('@/views/asset/index.vue')
const dataMap = () => import('@/views/map/index.vue')
const NotFound = () => import('@/views/page404.vue')

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
  {
    path: '/index',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: '/index',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: routeName.home,
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true,
    children: []
  }
]

/**
 * @descr 添加路由
 * */
const addRouter = [
  {
    path: '/',
    iconCls: 'fa fa-paw', // 图标样式class
    name: routeName.dataAsset,
    component: Layout,
    children: [
      {
        path: '/data/asset',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: routeName.dataAsset,
        component: dataAsset,
        children: []
      }
    ]
  },
  /* 数据地图 */
  {
    path: '/',
    iconCls: 'fa fa-exchange', // 图标样式class
    name: routeName.dataMap,
    component: Layout,
    children: [
      {
        path: '/data/map',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.dataMap,
        component: dataMap,
        children: []
      }
    ]
  },
  /* 数据血缘 */
  {
    path: '/',
    iconCls: 'fa fa-universal-access', // 图标样式class
    name: routeName.dataLineage,
    component: Layout,
    children: [
      {
        path: '/data/lineage',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
  /* 数据集成 */
  {
    path: '/',
    iconCls: 'fa fa-newspaper-o', // 图标样式class
    name: routeName.dataIntegration,
    component: Layout,
    children: [
      {
        path: '/data/integrate',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
  /* 数据开发 */
  {
    path: '/',
    iconCls: 'fa fa-server', // 图标样式class
    name: routeName.dataDevelopment,
    component: Layout,
    children: [
      {
        path: '/data/develop',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
  /* 数据调度 */
  {
    path: '/',
    iconCls: 'fa fa-pencil-square-o', // 图标样式class
    name: routeName.dataScheduler,
    component: Layout,
    children: [
      {
        path: '/data/scheduler',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
  /* 数据BI */
  {
    path: '/',
    iconCls: 'fa fa-life-ring', // 图标样式class
    name: routeName.dataBi,
    component: Layout,
    children: [
      {
        path: '/data/bi',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
  /* 服务监控 */
  {
    path: '/',
    iconCls: 'fa fa-paw', // 图标样式class
    name: routeName.monitor,
    component: Layout,
    children: [
      {
        path: '/data/monitor',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
  /* 变量管理 */
  {
    path: '/',
    iconCls: 'fa fa-expeditedssl', // 图标样式class
    name: routeName.variable,
    component: Layout,
    children: [
      {
        path: '/data/variable',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
  /* 系统设置 */
  {
    path: '/',
    iconCls: 'fa fa-cog', // 图标样式class
    name: routeName.systemSettings,
    component: Layout,
    children: [
      {
        path: '/data/setting',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        children: []
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRouter,
})

export default router
export {defaultRouter, addRouter}
