import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 700,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
  behavior: 'smooth',
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
