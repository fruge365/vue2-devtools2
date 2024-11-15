<template>
  <!-- 首页 -->
  <div class="index">
    <Left />
    <Right />
    <BackTop />

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :show-close="false"
      top="10px"
    >
      <!-- <div>
        网站域名随时到期，建议前往新域名<a href="http://amoureux555.top"
          >点击跳转新域名</a
        >
      </div> -->
      <img :src="Tianqimg" alt="" width="100%" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >朕已阅</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Left from "./component/Left";
import Right from "./component/Right";
import BackTop from "../component/Backtop.vue";
import { moyu } from "@/api/index";

export default {
  name: "index",
  components: {
    Left,
    Right,
    BackTop,
  },
  data() {
    return {
      Tianqimg: "",
      dialogVisible: true,
    };
  },
  methods: {
    // 摸鱼人日历
    moyu() {
      moyu().then((res) => {
        console.log(res);
        const myBlob = new window.Blob([res.data], { type: "image/jpeg" });
        // Tianqimg是提前定义好的模型
        this.Tianqimg = window.URL.createObjectURL(myBlob);
      });
    },
    handleClose() {
      this.dialogVisible = false;
    },
  },
  mounted() {
    this.moyu();
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

::v-deep .el-dialog {
  background: none;
  color: white;
  box-shadow: none;
  div {
    color: white;
    font-size: 18px;
    a {
      color: blue;
    }
  }
  .el-dialog__headerbtn,
  .el-dialog__title,
  .el-dialog__close {
    color: white;
  }
  .el-dialog__body {
    padding: 0;
    margin: 0;
    img {
      height: 700px;
    }
  }
}
</style>
