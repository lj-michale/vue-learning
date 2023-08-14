/**

 * User: lj.michale
 * Date: 2023/08/8
 * Description: 文件描述
 */
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
const cn = {
  routeName: {
    home: '中台概览',
    dataAsset: '数据资产',
    dataMap: '数据地图',
    dataLineage: '数据血缘',
    dataIntegration: '数据集成',
    dataDevelopment: '数据开发',
    dataAnalysis: '数据分析',
    dataAlgorithm: '智能算法',
    dataScheduler: '数据调度',
    dataBi: '数据BI',
    monitor: '服务监控',
    variable: '变量管理',
    systemSettings: '系统设置',
    navMenu: '导航菜单'
  },
  rightMenu: {
    close: '关闭',
    closeOther: '关闭其他',
    closeAll: '全部关闭'
  },
  role: {
    superAdmin: '超级管理员',
    admin: '管理员',
    ordinary: '普通用户'
  },
  userDropdownMenu: {
    basicInfor: '基本资料',
    changePassword: '修改密码',
    logout: '退出'
  },

  ...zhLocale //  合并element-ui内置翻译
}

export default cn
