// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'
import 'C:/Users/박우찬/WebstormProjects/tabtracker/src/assets/bootstrap.css'
import 'C:/Users/박우찬/WebstormProjects/tabtracker/src/assets/bootstrap-vue.css'


Vue.prototype.$http = axios;
//Vue.use(axios,VueAxios);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
