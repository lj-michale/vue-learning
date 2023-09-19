/**
 * User: lj.michale
 * Date: 2022/9/27
 * Description: 文件描述
 */
import axios from '../axios'

export function getUpdateTimeLine() {
  return axios({
    url: `/api/turing/update/timeline`,
    method: 'get',
  })
}

export function getProductList(data:any) {
  return axios({
    url: `/api/turing/products`,
    method: 'post',
    data
  })
}

export function getSummaryCards(data:any) {
  return axios({
    url: `/api/turing/summary/getSummaryCards`,
    method: 'get',
    data
  })
}

export function getLastSummaryCards() {
  return axios({
    url: `/api/turing/last/summary/getLastSummaryCards`,
    method: 'get',
  })
}
