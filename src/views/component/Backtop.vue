<template>
  <!-- 返回顶部 -->
  <div class="backtop">
    <el-backtop :visibility-height="50" title="返回顶部"></el-backtop>
  </div>
</template>
<script>
export default {};
</script>
哈哈哈
<style lang="scss" scoped>
.backtop {
  ::v-deep .el-backtop {
    display: flex;
    right: 180px !important;
    bottom: 60px !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
