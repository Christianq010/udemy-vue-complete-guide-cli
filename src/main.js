import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.component('app-server', Home)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
