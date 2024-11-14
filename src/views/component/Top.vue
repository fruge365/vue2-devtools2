<template>
  <div class="top">
    <div class="left">
      <!-- <i class="icon el-icon-s-fold" title="收起菜单"></i> -->
      <span></span>
      <!-- <i class="icon el-icon-s-unfold" title="展开菜单"></i> -->
    </div>
    <div class="right" @click="dialogVisible = true">
      <!-- <i class="icon el-icon-s-operation" title="设置" @click="FitFn()"></i>
      <i class="icon el-icon-full-screen" title="全屏" v-screenfull></i> -->
      <img :src="require('@/assets/avatar.png')" alt="" srcset="" />
      &emsp; 我要联系网站作者
    </div>
    <el-dialog
      title="扫码联系网站作者"
      :visible.sync="dialogVisible"
      width="40%"
    >
      <!-- :close-on-click-modal="false" -->

      <img
        :src="require('@/assets/微信.png')"
        alt=""
        width="60%"
        height="60%"
      />

      <!-- <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >关 闭</el-button
        >
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    FitFn() {
      this.drawer = true;
    },
    handleClose() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 0px 25px 5px rgb(10 10 10 / 5%);
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // position: sticky;
  top: 0;
  .icon {
    font-size: 20px;
    margin: 0 10px;
    &:hover {
      cursor: pointer;
      color: #409eff;
    }
  }
  .left {
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    color: gray;
    img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
  ::v-deep .el-dialog__title {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
