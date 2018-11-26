import Vue from 'vue'

const component = {
  name: 'com',
  // template: `
  //   <div :style="style">
  //     <slot ></slot>
  //   </div>
  // `,
  props: {
    props1: String
  },
  render (h) {
    return h('div', {
      style: this.style
      // on: {
      //   click: () => {
      //     this.$emit('click')
      //   }
      // }
    },
    [
      this.$slots.header,
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #000'
      }
    }
  },
  methods: {
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '7890'
    }
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <div>
  //     <comp-one ref="comp>
  //       <span ref="span">{{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  render (h) {
    return h('comp-one', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      // on: {
      //   click: this.handleClick
      // },
      nativeOn: {
        click: this.handleClick
      }
    },
    [
      h('span', {
        ref: 'span',
        slot: 'header',
        // domProps: {
        //   innerHTML: '<span>368</span>'
        // }
        attrs: {
          id: 'test-id'
        }
      }, this.value)
    ]
    )
  }
})
