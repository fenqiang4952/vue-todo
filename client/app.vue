<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <todo></todo> -->
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <router-view />
    <button @click="openNotify">click</button>
    <!-- <tabs :value="value" @change="changeTabValue">
      <tab index="1" lable="text">
        <span slot="label">tab1</span>
        <p>This is tab content1</p>
      </tab>
      <tab index="2" lable="text">
        <span slot="label">tab2</span>
        <p>This is tab content2</p>
      </tab>
      <tab index="3" lable="text">
        <span slot="label">tab3</span>
        <p>This is tab content3</p>
      </tab>
    </tabs> -->
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
    return {
      // value: '1'
    }
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
    // changeTabValue (index) {
    //   this.value = index
    // }
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
