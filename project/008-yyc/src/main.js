import 'minireset.css';
import '../node_modules/bulma/css/bulma.css';
import './main.css';
// import 'bulma'
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import A from './components/A.vue';
import B from './components/B.vue';

Vue.config.productionTip = true
Vue.use(Router)

const routes = [{
  path: '/a',
  component: A
}, {
  path: '/b',
  component: B
}];

const router = new Router({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');