/**
 * @descr 基于axios的http请求封装
 *
 * @author lj.michale
 * @date 2023-09-15
 * */

import axios from 'axios'

export function http(config:any,customOptions?:any) {
  const service = axios.create({
    timeout: 10000, // 超时时间设置
  })

  // 自定义配置
  // eslint-disable-next-line camelcase
  const custom_options = Object.assign({
    // eslint-disable-next-line camelcase
    repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
  }, customOptions)

  // 请求拦截的配置
  service.interceptors.request.use(
    (config: any) => { // 发送前的动作
      removePending(config)
      // eslint-disable-next-line camelcase
      custom_options.repeat_request_cancel && addPending(config)
      return config
    },
    (error: any) => { // 错误请求处理
      return Promise.reject(error)
    }
  )
  // 响应拦截的配置
  service.interceptors.response.use(
    (response: { config: any; }) => { // 对响应数据的处理
      removePending(response.config)
      return response
    },
    (error: { config: any; }) => { // 响应错误的处理
      error.config && removePending(error.config)
      return Promise.reject(error) // 直接返回错误
    }
  )


  return service(config)
}

/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config:any) {
  const pendingKey = getPendingKey(config)

  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)

    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPending(config:any) {
  const pendingKey = getPendingKey(config)

  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel: any) => {
    if (!pendingMap.has(pendingKey)) {
      pendingMap.set(pendingKey, cancel)
    }
  })
}

const pendingMap = new Map()

/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config:any) {
  // eslint-disable-next-line prefer-const
  let {url, method, params, data} = config

  if(typeof data === 'string') data = JSON.parse(data) // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}

