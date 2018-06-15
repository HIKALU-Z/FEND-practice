let home = Vue.component("home", {
  template: `<h1>home</h1>`,
  data: function () {
    return {};
  }
})

let about = Vue.component("about", {
  template: `<h1>about</h1>`,
  data: function () {
    return {};
  }
})

let routes = [{
  path: '/home',
  component: home
}, {
  path: '/about',
  component: about
}]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#root',
  router
})