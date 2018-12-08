import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

const instances = []
let seed = 1
const removeInstance = (instance) => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(ins => instance.id === ins.id)

  instances.splice(index, 1)

  if (len <= 1) return
  const removeHeight = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = Number(instances[i].verticalOffset) - removeHeight - 16
  }
}

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
  instance.vm.visible = true

  let verticalOffset = 0
  instance.id = `notification_${seed++}`

  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset

  instances.push(instance)

  // 动画执行完关闭
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  // 点击关闭后直接隐藏
  instance.vm.$on('close', () => {
    instance.visible = false
  })

  return instance.vm
}

export default notify
