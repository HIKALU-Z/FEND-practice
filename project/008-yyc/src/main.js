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
import SettingBase from './views/settings/Base.vue';
import AccountManage from './views/settings/AccountManage.vue';
import Test from './views/Test.vue';
import Search from './views/Search.vue';
// import Admin from './views/Admin.vue';
import AdminBase from './views//admin/Base.vue';
import Vehicle from './views/admin/Vehicle.vue';
import Duplicate from './views/admin/Duplicate.vue';
// import { settings } from 'cluster';

Vue.config.productionTip = true;
Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail/:id',
    component: Detail
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
    path: '/settings',
    component: SettingBase,
    children: [
      {
        path: 'profile',
        component: AccountManage
      }
    ]
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
    component: AdminBase,
    children: [
      {
        path: 'vehicle',
        component: Vehicle
      },
      {
        path: 'duplicate',
        component: Duplicate
      }
      /* {
        path: 'user',
        component: User
      } */
    ]
  }
];

const router = new Router({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
