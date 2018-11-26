import Vue from 'vue'

new Vue({
  el: '#root',
  template: `<div>
    <p>Name: {{name}}</p>
    <p>Name: {{getName()}}</p>
    <p>{{number}}</p>
    <p><input type='text' v-model='number' ></p>
  </div>`,
  data: {
    firstName: 'strive',
    lastName: 'Yan',
    number: 0
  },
  computed: {
    name () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    'firstName': {
      handle (newValue, oldValue) {
        console.log(newValue)
      }
    },
    immediate: true,
    deep: true
  },
  methods: {
    getName () {
      console.log('getName')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
