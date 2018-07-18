import 'minireset.css';
import '../node_modules/bulma/css/bulma.css';
import './main.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import 'bulma';
import Vue from 'vue';
import filters from './filters/filter';
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
import session from './assets/js/session';
import Appo from './views/admin/Appo';
import Focus from './directive/focus';

import Model from './views/admin/Model.vue';
import Report from './views/admin/Report.vue';

Vue.config.productionTip = true;

// 注册路由
Vue.use(Router);
// 注册所有过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

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
        path: 'report',
        component: Report
      },
      {
        path: 'appointment',
        component: Appo
      }
    ]
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  let willGoToAdimin = to.fullPath.startsWith('/admin/');
  let isAdmin = session.is_admin();
  if (willGoToAdimin && !isAdmin) {
    alert("you are not admin. please input the 'admin' as the name 'yoyoyo' as the password ");
    next('/login');
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router,
  directives: { Focus }
}).$mount('#app');
