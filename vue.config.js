const path = require("path");
module.exports = {
  // 网站标题
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "工具箱";
      return args;
    });
    // svg图标加载
    config.module
      .rule("svg")
      .exclude.add(path.join(__dirname, "src/assets/svg"))
      .end();

    config.module
      .rule("icons") // 定义一个名叫 icons 的规则
      .test(/\.svg$/) // 设置 icons 的匹配正则
      .include.add(path.join(__dirname, "src/assets/svg")) // 设置当前规则的作用目录，只在当前目录下才执行当前规则
      .end()
      .use("svg-sprite") // 指定一个名叫 svg-sprite 的 loader 配置
      .loader("svg-sprite-loader") // 该配置使用 svg-sprite-loader 作为处理 loader
      .options({
        // 该 svg-sprite-loader 的配置
        symbolId: "icon-[name]",
      })
      .end();
  },
  // 全局路径
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~mock": path.resolve(__dirname, "mock"),
      },
    },
  },
  // 跨域
  devServer: {
    proxy: {
      //百度搜索
      "/api": {
        target: "https://www.baidu.com/sugrec?prod=pc&wd=",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        pathRewrite: {
          // 重写路径请求
          "^/api": "", //路径重写
        },
      },
      // 百度热搜
      "/baidu-api": {
        target: "https://api.1314.cool/",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        // logLevel: "debug",
        pathRewrite: {
          // 重写路径请求
          "^/baidu-api": "", //路径重写
        },
      },
      // 百度热搜 | 官网
      "/baiduapi1": {
        target: "https://top.baidu.com",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        // logLevel: "debug",
        pathRewrite: {
          // 重写路径请求
          "^/baiduapi1": "", //路径重写
        },
      },
      // 微博热搜 | 官网
      "/weiboapi": {
        // target: "https://s.weibo.com",
        target: "https://weibo.com",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        // logLevel: "debug",
        pathRewrite: {
          // 重写路径请求
          "^/weiboapi": "", //路径重写
        },
      },
      "/vvhan": {
        // target: "https://s.weibo.com",
        target: "https://api.vvhan.com/api",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        // logLevel: "debug",
        pathRewrite: {
          // 重写路径请求
          "^/vvhan": "", //路径重写
        },
      },
      // 天气搜索
      "/tianqi": {
        // target: "https://s.weibo.com",
        target: "https://www.tianqiapi.com",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        // logLevel: "debug",
        pathRewrite: {
          // 重写路径请求
          "^/tianqi": "", //路径重写
        },
      },
      // 抖音美女
      "/zjapi": {
        // target: "https://s.weibo.com",
        target: "https://zj.v.api.aa1.cn/api",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        // logLevel: "debug",
        pathRewrite: {
          // 重写路径请求
          "^/zjapi": "", //路径重写
        },
      },
      // ....
    },
  },
  // svg图标
};
