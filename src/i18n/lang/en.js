/**

 * User: lj.michale
 * Date: 2023/08/8
 * Description: 文件描述
 */

import enLocale from 'element-plus/lib/locale/lang/en'

const en = {
  routeName: {
    home: 'home',
    dataAsset: 'dataAsset',
    dataMap: 'dataMap',
    dataLineage: 'dataLineage',
    dataIntegration: 'dataIntegration',
    dataDevelopment: 'dataDevelopment',
    dataAnalysis: 'dataAnalysis',
    dataAlgorithm: 'dataAlgorithm',
    dataScheduler: 'dataScheduler',
    dataBi: 'dataBi',
    monitor: 'monitor',
    variable: 'variable',
    systemManagement: 'systemManagement',
    navMenu: 'navMenu',
    updateTimeline: 'updateTimeline',
  },
  rightMenu: {
    close: 'close',
    closeOther: 'closeOther',
    closeAll: 'closeAll'
  },
  role: {
    superAdmin: 'superAdmin',
    admin: 'admin',
    ordinary: 'ordinary'
  },
  userDropdownMenu: {
    basicInfor: 'basicInfor',
    changePassword: 'changePassword',
    logout: 'logout'
  },

  ...enLocale //  合并element-ui内置翻译
}

export default en
