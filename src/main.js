// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
// 引入后用于解决移动端出现1像素边框的问题
import './assets/css/border.css'
// 引入字体CSS
import './assets/icon/iconfont.css'
// 引入fastclick
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
