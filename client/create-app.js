import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import CreateRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)

export default () => {
  const router = CreateRouter()

  const app = new Vue({
    router,
    render: (h) => h(App)
  })

  return { app, router }
}
