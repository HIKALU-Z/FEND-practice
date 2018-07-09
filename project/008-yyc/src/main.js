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
import AdminBase from './views//admin/Base.vue';
import Vehicle from './views/admin/Vehicle.vue';
import Duplicate from './views/admin/Duplicate.vue';
import User from './views/admin/User.vue';
import Brand from './views/admin/Brand.vue';
import Design from './views/admin/Design.vue';
import Location from './views/admin/Location.vue';
import Location2 from './components/Location2';

import Model from './views/admin/Model.vue';
import Qc from './views/admin/Qc.vue';

Vue.config.productionTip = true;
Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/location2',
    component: Location2
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
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'brand',
        component: Brand
      },
      {
        path: 'design',
        component: Design
      },
      {
        path: 'location',
        component: Location
      },
      {
        path: 'model',
        component: Model
      },
      {
        path: 'qc',
        component: Qc
      }
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
