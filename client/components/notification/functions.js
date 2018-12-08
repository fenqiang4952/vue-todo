import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

const instances = []

const notify = (options) => {
  if (Vue.prototype.$isServer) return

  const { autoClose, ...rest } = options

  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data () {
      return {
        autoClose: autoClose === undefined ? 3000 : autoClose
      }
    }
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  let verticalOffset = 0

  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset

  instances.push(instance)

  return instance.vm
}

export default notify
