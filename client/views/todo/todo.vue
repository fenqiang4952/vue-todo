<template>
  <section class="real-app">
    <div class="tab-container">
      <tabs :value="filter" @change="handelChangeValue">
        <tab v-for="tab in states" :key="tab" :label="tab" :index="tab"></tab>
      </tabs>
    </div>
    <input type="text" class="add-input" autofocus="autofocus" v-model="value" placeholder="接下去要做什么" @keyup.enter="addTodo">
    <item @del="delItem" v-for="(todo) in filterdTodos" :key="todo.id" :todo="todo"></item>
    <Helpers @clearAll="clearAllCompleted" :todos="todos"></Helpers>
  </section>
</template>

<script>
import Item from './item.vue'
import Helpers from './helpers.vue'

let id = 0
export default {
  metaInfo: {
    title: 'todo app'
  },
  name: 'Todo',
  data () {
    return {
      todos: [],
      filter: 'all',
      value: '',
      states: ['all', 'active', 'completed']
    }
  },
  components: {
    Item,
    Helpers
  },
  computed: {
    filterdTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter((todo) => completed === todo.completed)
    }
  },
  methods: {
    addTodo () {
      this.todos.unshift({
        id: id++,
        content: this.value.trim(),
        completed: false
      })
      this.value = ''
    },
    delItem (id) {
      this.todos.splice(this.todos.findIndex((todo) => todo.id === id), 1)
    },
    clearAllCompleted () {
      this.todos = this.todos.filter((todo) => !todo.completed)
    },
    handelChangeValue (index) {
      this.filter = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
.tab-container
  background-color #fff
  padding 0 15px
</style>
