<template>
  <div id="app">
    <router-view />
    <div v-if="$route.path == '/'">
      © 2022 Powered By &ensp;
      <a
        href="http://amoureux555.top"
        target="_blank"
        style="color: #4e97d8"
        title="个人博客"
        >amoureux555</a
      >&emsp;<a
        href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
        target="_blank"
        style="color: #4e97d8"
        title="备案管理系统"
        >苏ICP备2022039794号-2</a
      >
    </div>
    <Music />
    <BackTop />
  </div>
</template>
<script>
// 禁止用户打开控制台和相关操作
// import "@/utils/ban.js";
import Music from "./views/component/Music";
import BackTop from "./views/component/Backtop.vue";
export default {
  components: {
    Music,
    BackTop,
  },
  methods: {},
  mounted() {
    // document.getElementById("app").style.display = "block";
    // document.getElementById("appLoading").style.display = "none";
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9f9;
  display: block;
  height: 100%;
}
</style>
