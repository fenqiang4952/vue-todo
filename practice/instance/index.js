import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 1
  }
})

// setInterval(function () {
//   app.text += 1
// }, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
console.log(app.$isServer)
// app.$forceUpdate()
