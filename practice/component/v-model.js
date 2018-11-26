import Vue from 'vue'

const component = {
  // model: {
  //   prop: 'value1',
  //   event: 'change'
  // },
  template: `
    <div>
      <input type="text" @input="handleInput" v-model="value1">
    </div>
  `,
  props: {
    value: String
  },
  data () {
    return {
      value1: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.value1)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
      {{value}}
    </div>
  `
})
