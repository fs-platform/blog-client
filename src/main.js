import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import '../public/css/base.css'
import http from "./utils/axios"
import router from "./router/routes";


import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import {Star} from '@element-plus/icons'

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});
let app = createApp(App)
app.component('star', Star)
app.use(ElementPlus)
app.config.globalProperties.$http = http
window.$http = http
app.use(router)
app.mount("#app")
app.use(VMdPreview);