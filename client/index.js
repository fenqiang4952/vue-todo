import Vue from 'vue'
import App from './app.vue'
import CreateRouter from './config/router'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

const router = CreateRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
