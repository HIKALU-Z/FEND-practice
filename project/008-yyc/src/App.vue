<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <!-- <Home></Home> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld,
    Home
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: auto;
  /* text-align: center; */
  /* columns: ;or: #2c3e50; */
  /* background-color: #f2f2f2; */
  /* margin-top: 60px; */
}
</style>
