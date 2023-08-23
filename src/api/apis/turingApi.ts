/**
 * User: lj.michale
 * Date: 2022/9/27
 * Description: turing apis
 */
import axios from '../axios'

export default {
    // 获取后端接口数据示例1
    fetchTuring (data: {username: string, password: string}) {
        return axios.post('/turing/products', data)
    }
}

