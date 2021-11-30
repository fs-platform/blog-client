import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../public/css/base.css'
import http from "./utils/axios"

let app = createApp(App)
app.use(ElementPlus)
app.config.globalProperties.$http = http
window.$http = http
app.mount("#app")