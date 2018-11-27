// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/index.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'app'
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]
