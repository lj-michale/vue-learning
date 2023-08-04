/**

 * User: lj.michale
 * Date: 2018/12/8
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
    systemSettings: 'systemSettings',
    navMenu: 'navMenu'
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
