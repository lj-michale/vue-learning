/**
 * @descr main.js 主要职责：创建一个vue应用，理解成之前的根实例
 *
 * @author lj.michale
 * @date 2023-08-02
 * */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入elementplus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')

