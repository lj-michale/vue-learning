/**
 * User: lj.michale
 * Date: 2022/9/27
 * Description: 文件描述
 */

import axios from '@/api/axios'
import { UserInfo } from "./types";

export function updateUserInfo(data: UserInfo) {
  return axios({
    url: `/api/turing/update/userinfo`,
    method: 'post',
    data
  })
}
