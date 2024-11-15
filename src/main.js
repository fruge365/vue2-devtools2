import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 注册ui组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 解决滚动条滚动bug
ElementUI.Dialog.props.lockScroll.default = false;
Vue.use(ElementUI);
// 引入element组件

// 引入阿里字体库
import "../public/font/iconfont.css";
// 引入全局样式
import "@/assets/css/reset.css";
// 适配
import "../postcss.config";
// 背景粒子特效
import VueParticles from "vue-particles";
Vue.use(VueParticles);
// 用于定位
import { VueJsonp } from "vue-jsonp";
Vue.prototype.$jsonp = VueJsonp;
Vue.use(VueJsonp);
// 发送请求
import axios from "axios";
Vue.prototype.$axios = axios;
// 点击复制 粘贴
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);
// svg图标
import "@/assets/svg/index";
// 自定义指令
import "@/utils/directives";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require("./assets/error.png"),
  loading: require("./assets/loading.png"),
  attempt: 2,
});
// 导入导航守卫
import "@/permission";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
