<template>
  <div class="mjx">
    <!-- 买家秀 -->
    <div ref="content_box" class="content_box">请求接口无响应，延后开发</div>
    <div class="button">
      <el-button @click="mjx()"
        >下一条
        <i class="el-icon-loading" v-if="status"></i>
      </el-button>
    </div>
  </div>
</template>
<script>
import { mnsp } from "@/api/index";
export default {
  data() {
    return {
      imgurl: "",
      status: false,
    };
  },
  methods: {
    // 抖音美女
    async mnsp() {
      this.status = true;
      await mnsp()
        .then((res) => {
          console.log(res);
          this.status = false;
        })
        .catch((err) => {
          console.log("请求失败自动重新请求", err);
        });
    },
  },
  created() {
    this.mnsp();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.mjx {
  height: 100%;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .content_box {
    width: 400px;
    height: 600px;
    background-size: cover;
  }
  .content {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
