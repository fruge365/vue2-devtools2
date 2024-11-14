<template>
  <div class="layout">
    <Menu />
    <div class="main">
      <Top /> <router-view /></div>
    <BackTop />
    <!-- <ChatGpt /> -->
  </div>
</template>
<script>
import BackTop from "./component/Backtop.vue";
import Menu from "./component/NavMenu.vue";
import Top from "./component/Top.vue";
// import ChatGpt from "./component/ChatGpt.vue";
export default {
  components: {
    BackTop,
    Menu,
    Top,
    // ChatGpt,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.layout {
  width: 100%;
  display: flex;
  // overflow: hidden;
  min-height: 98%;
  .main {
    flex: 1;
    margin-left: 220px;
    position: relative;
    div:nth-of-type(2) {
      margin-top: 30px;
    }
    /* 滑块样式修改 */
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    /*正常情况下滑块的样式*/
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      -webkit-box-shadow: inset1px1px0rgba(0, 0, 0, 0.1);
    }
    /*鼠标悬浮在该类指向的控件上时滑块的样式*/
    &:hover::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      -webkit-box-shadow: inset1px1px0rgba(0, 0, 0, 0.1);
    }
    /*鼠标悬浮在滑块上时滑块的样式*/
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: inset1px1px0rgba(0, 0, 0, 0.1);
    }
    /*正常时候的主干部分*/
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0);
      background-color: white;
    }
    /*鼠标悬浮在滚动条上的主干部分*/
    &::-webkit-scrollbar-track:hover {
      -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.4);
      // border-radius: 30px;
      background-color: rgba(0, 0, 0, 0.01);
    }
  }
  .menu {
    height: 100%;
    text-align: left;
    width: 220px;
    position: fixed;
  }
}
</style>
