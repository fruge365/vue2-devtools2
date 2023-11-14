<template>
  <div>
    <div class="test-clock-container">
      <flip-clock />
    </div>
    <i class="icon el-icon-full-screen" title="全屏" v-screenfull></i>
  </div>
</template>
<script>
import FlipClock from "kuan-vue-flip-clock";
export default {
  components: {
    FlipClock,
  },
};
</script>
<style lang="scss" scoped>
.test-clock-container {
  font: normal 14px "Helvetica Neue", Helvetica, sans-serif;
  user-select: none;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  background: radial-gradient(ellipse at center, #969696 0%, #595959 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
i {
  right: 100px;
  position: absolute;
  bottom: 100px;
  color: white;
  font-size: 30px;
}
</style>
