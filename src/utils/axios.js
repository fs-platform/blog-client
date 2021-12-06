import axios from 'axios';
import qs from 'qs'
import {ElMessage} from "element-plus"

const http = axios.create({
    timeout: 30000,                                   //超时时间
    baseURL: process.env["NODE_ENV"] === "development" ? "http://127.0.0.1:10025/api" : "http://www.fs-developer.com/api",        // 我们在请求接口的时候就不同写前面 会自动我们补全
    transformRequest: data => qs.stringify(data)    //post请求参数处理,防止post请求跨域
})
// http request 拦截器
// http response 拦截器
http.interceptors.response.use(response => {
    //接收返回数据..
    const res = response.data
    //判断返回数据是否存在状态code和错误提示信息..
    if (res.statusCode!==0 || !res.message) {
        return showMessage('响应数据格式错误')
    }
    //判断状态code是否为指定数值(200)..
    if (res.statusCode !== 0) {
        return showMessage(res.message)
    }
    return res
}, err => {
    return showMessage(err.message)
})

//封装错误提示信息..
function showMessage(msg) {
    ElMessage.error(msg)
    return Promise.reject()
}

export default http;