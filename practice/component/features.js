import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component</div>',
  inject: ['yeye'],
  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.yeye)
  }
}

const component = {
  name: 'com',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,

  template: `
    <div :style="style">
      <div class="header">
        <slot :value="456" :text="233"></slot>
      </div>
      <child-component></child-component>
    </div>
  `,
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
  provide () {
    return {
      yeye: this
    }
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    // console.log(this.$refs.comp, this.$refs.span)
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}}</span>
      </comp-one>
    </div>
  `
})
