import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs';
import {axios} from '@/api/index'
Vue.prototype.$http=axios

//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
Vue.prototype.$qs = qs;

import "lib-flexible/flexible"
import { Toast,List } from 'vant'
Vue.use(Toast)
Vue.use(List)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
