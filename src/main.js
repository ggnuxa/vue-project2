import Vue from 'vue';
import App from './App.vue';

import store from './store.js';

import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.min.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
