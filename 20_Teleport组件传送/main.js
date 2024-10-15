// 引入createApp工厂函数
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 创建应用实例对象-app 
const app = createApp(App)

// 挂载app
app.mount('#app')
// createApp(App).mount('#app')
