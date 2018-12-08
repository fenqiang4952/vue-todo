<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <todo></todo> -->
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <router-view />
    <button @click="openNotify">click</button>
    <!-- <notification content="test content"></notification> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
export default {
  metaInfo: {
    title: 'strive Todo app'
  },
  data () {
    return {}
  },
  components: {
    Header,
    Footer
  },
  methods: {
    openNotify () {
      this.$notify({
        content: 'test notify!!!test notify!!!test notify!!!test notify!!!test notify!!!test notify!!!test notify!!!test notify!!!test notify!!!test notify!!!'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#app {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}

#cover {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: #999;
	opacity: 0.9;
	z-index: -1;
}
</style>
