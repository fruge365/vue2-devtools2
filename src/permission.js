import router from "@/router";
router.beforeEach((to, from, next) => {
  // console.log(chainWebpack, ">>>");
  if (to.meta.title) {
    document.title = "工具箱" + "-" + to.meta.title;
  } else {
    document.title = "工具箱";
  }
  next();
});
