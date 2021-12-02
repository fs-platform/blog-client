import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import '../public/css/base.css'
import http from "./utils/axios"
import router from "./router/routes";

let app = createApp(App)
app.use(ElementPlus)
app.config.globalProperties.$http = http
window.$http = http
app.use(router)
app.mount("#app")