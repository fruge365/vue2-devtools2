<template>
  <div class="menu">
    <div class="content">
      <h4 style="cursor: pointer" @click="$router.push('/')">Amoureux555</h4>
      <h4 style="cursor: pointer" @click="$router.push('/')">Amoureux555</h4>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2c2e2f"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :default-active="this.$route.path"
    >
      <template v-for="item in menuList">
        <el-menu-item
          :index="item.path"
          @click="clickMenu(item.path)"
          :key="item.path"
        >
          <svg-icon :icon-file-name="item.name" />
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import SvgIcon from "@/views/component/SvgIcon";
export default {
  components: { SvgIcon },
  data() {
    return {
      isCollapse: false,
      menuList: [
        { index: 1, path: "/", label: "前端常用", name: "frontend" },
        { index: 1, path: "/frontend", label: "百度一下", name: "baidu" },
        // { index: 2, path: "/aline", label: "常用正则", name: "reg" },
        // { index: 3, path: "/anli", label: "前端案例", name: "anli" },
        { index: 4, path: "/backend", label: "后端常用", name: "java2" },
        { index: 5, path: "/hot", label: "热点排行", name: "hot2" },
        { index: 6, path: "/history", label: "更新日志", name: "history" },
        { index: 7, path: "/feedback", label: "留言反馈", name: "feedback2" },
        { index: 8, path: "/about", label: "关于本站", name: "about" },
      ],
    };
  },
  methods: {
    clickMenu(item) {
      if (item === this.$route.path) return;
      this.$router.push(item);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  transition: all 0.3s linear;
}
::v-deep .el-menu-vertical-demo {
  height: 100%;
}
::v-deep .el-menu {
  border: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  background: #000;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.content {
  position: relative;
  height: 60px;
  background-color: rgb(44, 46, 47);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content h4 {
  color: #fff;
  font-size: 2em;
  position: absolute;
  // transform: translate(-50%, -50%);
}

.content h4:nth-child(1) {
  color: transparent;
  // -webkit-text-stroke: 2px #03a9f4;
  // -webkit-text-stroke: 3px white;
  -webkit-text-stroke: 1px yellowgreen;
}

.content h4:nth-child(2) {
  // color: #03a9f4;
  // color: black;
  color: white;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
.page-footer {
  position: fixed;
  right: 35px;
  bottom: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  color: black;
  background: rgba(255, 255, 255, 0.65);
}

.page-footer a {
  display: flex;
  margin-left: 4px;
}
.touxiang {
  bottom: 0px;
  width: 30px;
  height: 30px;
}
</style>
