import 'minireset.css';
import '../node_modules/bulma/css/bulma.css';
import './main.css';
// import 'bulma';
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Detail from './views/Detail.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import AccountManage from './views/user/AccountManage.vue';
import Test from './views/Test.vue';
import Search from './views/Search.vue';
import Admin from './views/Admin.vue';
import Vehicle from './views/admin/Vehicle.vue';

Vue.config.productionTip = true;
Vue.use(Router);

const routes = [
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
  },
  {
    path: '/account',
    component: AccountManage
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/admin-vehicle',
    component: Vehicle
  }
];

const router = new Router({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
