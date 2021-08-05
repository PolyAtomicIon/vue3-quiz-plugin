import { createApp } from 'vue'
import App from './App.vue'
import * as Utils from './Utils.js'

App.use(Utils)
createApp(App).mount('#app')
