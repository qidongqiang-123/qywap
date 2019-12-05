// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css' //导入样式
import ElementUI from 'element-ui'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import $ from 'jquery'
import './rem.js'
import '../static/css/mui.min.css'
import '../static/css/global.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
