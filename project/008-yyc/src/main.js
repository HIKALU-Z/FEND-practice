import 'minireset.css';
import '../node_modules/bulma/css/bulma.css';
import './main.css';
// import 'bulma';
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import A from './components/A.vue';
import B from './components/B.vue';
import Detail from './views/Detail.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';

Vue.config.productionTip = true;
Vue.use(Router);

const routes = [
  {
    path: '/a',
    component: A
  },
  {
    path: '/b',
    component: B
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
    // component: require('./views/Signup.vue')
  }
];

const router = new Router({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
