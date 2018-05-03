import axios from 'axios'
import store from '@/store/index.js'
import baseURL from './baseUrl'
import { Message } from 'element-ui'

var instance = axios.create({
    timeout: 30000,
    baseURL
})

// 添加请求拦截器
instance.interceptors.request.use(
    function(config) {
        // 请求头添加token
        if (store.state.UserToken) {
            config.headers.Authorization = store.state.UserToken
        }
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)

/* axios请求二次封装 */
instance.get = function(url, data, options) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, data, options)
            .then(
                res => {
                    var response = res.data
                    if (response.code === 0) {
                        resolve(response.data)
                    } else {
                        Message.warning(response.message)
                        /* reject(response.message) */
                    }
                },
                error => {
                    if (error.response.status === 401) {
                        Message.warning({
                            message: '登陆超时,请重新登录'
                        })
                        store.commit('LOGIN_OUT')
                        window.location.reload()
                    } else {
                        Message.error({
                            message: '系统异常'
                        })
                    }
                    reject(error)
                }
            )
            .catch(e => {
                console.log(e)
            })
    })
}

export default instance
