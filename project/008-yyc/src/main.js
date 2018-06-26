import 'minireset.css';
import '../node_modules/bulma/css/bulma.css';
import './main.css';
// import 'bulma'
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
