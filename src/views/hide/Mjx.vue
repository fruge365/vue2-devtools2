<template>
  <div class="mjx">
    <!-- 买家秀 -->
    <div ref="content_box" class="content_box"></div>
    <div class="button">
      <el-button @click="download()">保存图片</el-button>
      <el-button @click="mjx()"
        >下一张
        <i class="el-icon-loading" v-if="status"></i>
      </el-button>
    </div>
  </div>
</template>
<script>
import { mjx } from "@/api/index";
export default {
  data() {
    return {
      imgurl: "",
      status: false,
    };
  },
  methods: {
    // 请求买家秀接口
    async mjx() {
      this.status = true;
      await mjx()
        .then((res) => {
          // console.log(res);
          const myBlob = new window.Blob([res.data], { type: "image/jpeg" });
          // Tianqimg是提前定义好的模型
          this.imgurl = window.URL.createObjectURL(myBlob);
          this.ready();
          this.status = false;
        })
        .catch((err) => {
          console.log("请求失败自动重新请求", err);
          this.mjx();
        });
    },
    // 渲染到页面
    ready() {
      this.$nextTick(() => {
        if (this.$refs.content_box) {
          this.$refs.content_box.style.backgroundImage = `url(${this.imgurl})`;
        }
      });
    },
    // 保存图片
    download() {
      var image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      var _this = this;
      image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = _this.projectName || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = this.imgurl;
    },
  },
  created() {
    this.mjx();
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
