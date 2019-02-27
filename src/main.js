// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import {Button,Row,Col,Main,Aside,Header,Footer,Message} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './vuex/stores'
import axios from 'axios'
import echarts from 'echarts'

axios.interceptors.request.use((config) => {
  document.getElementsByClassName('loading')[0].style.display = 'block';
  return config
})
axios.interceptors.response.use((config) => {
  document.getElementsByClassName('loading')[0].style.display = 'none';
  return config
})
axios.defaults.baseURL = 'http://zhengjinwei.top:3003'

Vue.prototype.$echarts = echarts //引入echarts,挂载到Vue的原型上，其他组件可复用
Vue.prototype.$message = Message //引入message,用作弹窗提醒

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Main.name, Main);
Vue.component(Aside.name, Aside);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // created () {
  //   //在页面加载时读取sessionStorage里的状态信息
  //   if (sessionStorage.getItem("store") ) {
  //     this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
  //   }

  //   //在页面刷新时将vuex里的信息保存到sessionStorage里
  //   window.addEventListener("beforeunload",()=>{
  //     sessionStorage.setItem("store",JSON.stringify(this.$store.state))
  //   })
  // }
});
