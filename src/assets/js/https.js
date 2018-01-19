import axios from 'axios'

// axios.defaults.baseURL = 'http://news-at.zhihu.com/api/4';
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// withCredentials: true,

// 请求拦截
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default axios