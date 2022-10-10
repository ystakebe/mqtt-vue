import Vue from 'vue'
import App from './App.vue'
import mqtt from './plugins/mqtt'

Vue.config.productionTip = false

new Vue({
  mqtt,
  render: h => h(App)
}).$mount('#app')