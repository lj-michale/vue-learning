/**
 * @descr main.js 主要职责：创建一个vue应用，理解成之前的根实例
 *
 * @author lj.michale
 * @date 2023-08-02
 * */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/iconfont/iconfont.css'
import 'font-awesome/css/font-awesome.css'
// @ts-ignore
import i18n from './i18n/i18n'
import { createPinia } from 'pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)


app.mount('#app')




