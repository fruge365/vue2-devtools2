import Vue from "vue";
import SvgIcon from "@/views/component/SvgIcon";
Vue.component("svg-icon", SvgIcon); // 全局注册SvgIcon

const req = require.context("@/assets/svg", false, /\.svg$/);
const requireAll = (requireContext) => {
  // requireContext.keys()数据：['./404.svg', './agency.svg', './det.svg', './user.svg']
  requireContext.keys().map(requireContext);
};
requireAll(req);
