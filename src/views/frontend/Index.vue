<template>
  <!-- 首页 -->
  <div class="index">
    <Left />
    <Right />
    <BackTop />
  </div>
</template>
<script>
import Left from "./component/Left";
import Right from "./component/Right";
import BackTop from "../component/Backtop.vue";
export default {
  name: "index",
  components: {
    Left,
    Right,
    BackTop,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.index {
  display: flex;
  width: 80%;
  margin-left: 60px;
}
.text {
  font-size: 14px;
}
.box-card {
  width: 95%;
  margin-bottom: 30px;
}
</style>
