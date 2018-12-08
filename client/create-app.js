import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import CreateRouter from './config/router'
import Meta from 'vue-meta'
import Notification from './components/notification'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Meta)
Vue.use(Notification)

export default () => {
  const router = CreateRouter()

  const app = new Vue({
    router,
    render: (h) => h(App)
  })

  return { app, router }
}
