import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import { localMemory, sessionMemory } from './utils/set_storage'

import 'normalize.css'
import './assets/css/index.css'

const app = createApp(App)
//设置全局变量
app.config.globalProperties.$localMemory = localMemory
app.config.globalProperties.$sessionMemory = sessionMemory
app.use(router).use(pinia).mount('#app')
