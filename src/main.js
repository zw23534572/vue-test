import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载element UI,并且是按需加载
import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 按需接入 size 用于改变组件的默认尺寸 zIndex 设置弹框的初始 z-index（默认值：2000）
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
}
Vue.use(Button)
Vue.use(Select)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
