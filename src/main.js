import Vue from 'vue'
import App from './App.vue'
import mixins from './mixins/mixins';
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.mixin(mixins);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
