<template>
  <div class="left">
    <!-- 工具 -->
    <el-card
      class="box-card"
      shadow="hover"
      v-for="item in sort"
      :key="item.name"
      :id="item.id"
    >
      <div slot="header" class="clearfix">
        <span>{{ item.name }}</span>
      </div>
      <div
        v-for="item2 in item.children"
        :key="item2.index"
        class="text twoitem"
      >
        <a :href="item2.url" :title="item2.title" target="_blank">
          <!-- <img :src="item2.ico" alt="" class="search-image" /> -->
          <img
            v-lazy="item2.ico"
            alt=""
            class="search-image"
            :key="item2.ico"
          />
          &ensp;{{ item2.name }}</a
        >
      </div>
    </el-card>
    <div id="header-bar-menu">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(item, index) in sort"
          :key="item.name"
          @click.native="tabsColor(item.id)"
        >
          <!-- {{ item.name }} -->
          <span :class="index == activeIndex ? 'active_color' : ''">{{
            item.name
          }}</span>
        </el-timeline-item>
      </el-timeline>
      <!-- <div v-for="item in sort" :key="item.name" @click="tabsColor(item.id)">
      <a :href="'#' + `${item.id}`">{{ item.name }}</a>
      {{ item.name }}
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      scrollHeight: [],
      reverse: false,
      // isisactive: 0, // 是否选中
      sort: [
        {
          id: "changyong",
          name: "常用",
          index: 0,
          children: [
            {
              ico: "https://www.baidu.com/favicon.ico",
              name: "百度",
              title: "百度一下",
              url: "https://www.baidu.com/",
            },
            {
              ico: "https://fanyi-cdn.cdn.bcebos.com/webStatic/translation/img/favicon/favicon.ico",
              name: "百度翻译",
              title: "百度翻译",
              url: "https://fanyi.baidu.com/",
            },
            {
              ico: "https://static.zhihu.com/heifetz/favicon.ico",
              name: "知乎",
              title: "有问题就有答案",
              url: "https://www.zhihu.com/",
            },
            {
              ico: "https://www.cnki.net/favicon.ico",
              name: "中国知网",
              title: "论文集合地",
              url: "https://www.cnki.net/",
            },

            {
              ico: "https://g.csdnimg.cn/static/logo/favicon32.ico",
              name: "CSDN",
              title: "CSDN",
              url: "https://www.csdn.net/",
            },

            {
              ico: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196",
              name: "StackOverflow",
              title: "比肩CSDN",
              url: "https://stackoverflow.com/",
            },
            {
              ico: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png",
              name: "掘金",
              title: "稀土掘金",
              url: "https://juejin.cn/",
            },
            {
              ico: "http://www.amoureux555.xyz/%E5%8A%9B%E6%89%A3.ico",
              name: "力扣",
              title: "全球极客挚爱的技术成长平台",
              url: "https://leetcode.cn/",
            },
            {
              // ico: "https://m1.im5i.com/2023/01/10/UG7jnw.jpg",
              ico: "http://www.amoureux555.xyz/%E5%8D%9A%E5%AE%A2%E5%9B%AD.png",
              name: "博客园",
              title: "博客园",
              url: "https://www.cnblogs.com/",
            },

            {
              // ico: "https://m1.im5i.com/2023/01/02/UGcdeM.png",
              ico: "http://www.amoureux555.xyz/%E7%AE%80%E4%B9%A6.png",
              name: "简书",
              title: "创作你的创作",
              url: "https://www.jianshu.com/",
            },
            {
              ico: "https://www.bilibili.com/favicon.ico?v=1",
              name: "哔哩哔哩",
              title: "哔哩哔哩",
              url: "https://www.bilibili.com/?spm_id_from=333.337.0.0",
            },
            {
              ico: "http://www.amoureux555.xyz/%E8%85%BE%E8%AE%AF%E6%96%87%E6%A1%A3.ico",
              name: "腾讯文档",
              title: "腾讯文档",
              url: "https://docs.qq.com/desktop/?needShowTips=1",
            },
            {
              ico: "http://www.amoureux555.xyz/%E7%9F%B3%E5%A2%A8%E6%96%87%E6%A1%A3.ico",
              name: "石墨文档",
              title: "石墨文档",
              url: "https://shimo.im/loginByCode?redirect_url=https%3A%2F%2Fshimo.im%2Fdesktop",
            },
            {
              ico: "http://www.amoureux555.xyz/%E4%B8%83%E7%89%9B%E4%BA%91%E5%AD%98%E5%82%A8.ico",
              name: "七牛云存储",
              title: "七牛云存储",
              url: "https://sso.qiniu.com/?client_id=PIapUKqa3u6S24H868BelwrG0OFu8dS7AxVQ8oz8HznLXhgrl2BnjaO9cs9LzxK2&redirect_url=https:%2F%2Fportal.qiniu.com%2Fapi%2Fgaea%2Fsso%2Fsignin%3F",
            },
            {
              ico: "http://www.amoureux555.xyz/flomo.ico",
              name: "flomo",
              title: "flomo 极简笔记",
              url: "https://v.flomoapp.com",
            },
          ],
        },
        {
          id: "ai",
          name: "AI",
          children: [
            {
              ico: "http://www.amoureux555.xyz/chatGPT.png",
              name: "chatGPT",
              title: "chatGPT",
              url: "https://chat.openai.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/chatGPT.png",
              name: "freeGpt",
              title: "无需登录，直接使用",
              url: "https://freegpt.one/",
            },
            {
              ico: "http://www.amoureux555.xyz/discord.ico",
              name: "discord",
              title: "聊天室",
              url: "https://discord.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/nightcafe.png",
              name: "nightcafe",
              title: "根据内容生成图片",
              url: "https://creator.nightcafe.studio/",
            },
            {
              ico: "http://www.amoureux555.xyz/midjourney.ico",
              name: "midjourney",
              title: "根据内容生成图片",
              url: "https://midjourney.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/civitai.ico",
              name: "civitai",
              title: "根据内容生成图片",
              url: "https://civitai.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/LALAL.png",
              name: "LALAL.ai",
              title: "ai分离音频",
              url: "https://www.lalal.ai/",
            },
            {
              ico: "http://www.amoureux555.xyz/%E9%AD%94%E6%9C%AF%E6%A9%A1%E7%9A%AE%E6%93%A6.ico",
              name: "Ai魔术橡皮擦",
              title: "ai自动修复背景",
              url: "https://jpgrm.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/Hama.ico",
              name: "Hama",
              title: "ai自动修复背景",
              url: "https://www.hama.app/zh",
            },
            {
              ico: "http://www.amoureux555.xyz/removebg.ico",
              name: "removebg",
              title: "ai自动抠图、移除背景",
              url: "https://www.remove.bg/zh",
            },
            {
              ico: "http://www.amoureux555.xyz/magic%20eraser.ico",
              name: "Magic Eraser",
              title: "ai自动抠图、移除背景",
              url: "https://magicstudio.com/zh/magiceraser",
            },
            {
              ico: "http://www.amoureux555.xyz/MotionGo.ico",
              name: "MotionGo",
              title: "根据需求生成ppt",
              url: "http://motion.yoo-ai.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/insCode.ico",
              name: "inscode",
              title: "代码在线运行",
              url: "https://inscode.csdn.net/",
            },
            {
              ico: "http://www.amoureux555.xyz/AIGClogoXIAO-2.png",
              name: "AiGc",
              title: "AI导航页",
              url: "https://www.aigc.cn/",
            },
          ],
        },
        {
          id: "gongxiang",
          name: "共享文件",
          index: 1,
          children: [
            {
              ico: "https://www.sharedrop.io/assets/images/sharedrop-icon-273177f251fa14fe1911fc332d41373e.png",
              name: "Share drop",
              title: "局域网分享，无需登录",
              url: "https://www.sharedrop.io/",
            },
            {
              ico: "https://www.wenshushu.cn/favicon.ico",
              name: "文叔叔",
              title: "国内领先的文件传输网站",
              url: "https://www.wenshushu.cn/",
            },
            // {
            //   ico: "https://deershare.com/images/favicon.ico",
            //   name: "小鹿快传",
            //   title: "免登录，可批量，有网就可以传文件",
            //   url: "https://deershare.com/send",
            // },
            {
              ico: "https://assets.retiehe.com/ap-icon-192-2.png",
              name: "AirProtal",
              title: "免登录，有网即可传文件",
              url: "https://airportal.cn/",
            },
            {
              ico: "http://www.amoureux555.xyz/%E5%A5%B6%E7%89%9B.jpg",
              name: "奶牛快传",
              title: "操作简单，无需登录",
              url: "https://cowtransfer.com/",
            },
            {
              ico: "https://qnproxy.iamtsm.cn/44826979.png",
              name: "Iamtsm",
              title: "开源代码、自行搭建",
              url: "https://im.iamtsm.cn/file/",
            },
          ],
        },
        {
          id: "jqxiangguan",
          name: "jq相关",
          index: 2,
          children: [
            {
              ico: "http://www.amoureux555.xyz/jQuery%E9%80%89%E6%8B%A9%E5%99%A8.ico",
              name: "jQuery 选择器",
              title: "jQuery 选择器",
              url: "http://www.360doc.com/content/13/1206/15/10504424_334970071.shtml",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRzmz.png",
              ico: "http://www.amoureux555.xyz/jquery.png",
              name: "JQuery插件库",
              title: "JQuery插件库",
              url: "https://www.jq22.com/",
            },
            {
              ico: "http://www.htmleaf.com/favicon.ico",
              name: "JQuery之家",
              title: "JQuery之家",
              url: "http://www.htmleaf.com/",
            },
            // {
            //   ico: "http://www.amoureux555.xyz/MiniUI.png",
            //   name: "miniUi",
            //   title: "jquery miniui",
            //   url: "http://www.miniui.com/",
            // },
          ],
        },
        {
          id: "css",
          name: "css",
          index: 3,
          children: [
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRfpx.png",
              ico: "http://www.amoureux555.xyz/CSSFX.png",
              name: "Cssfx",
              title: "css样式集合、特效",
              url: "https://cssfx.netlify.app/",
            },
            {
              ico: "https://uiverse.io/favicon-32x32.png",
              name: "UIverse",
              title: "按钮、输入框、loader等样式",
              url: "https://uiverse.io/",
            },
            {
              ico: "https://cssreference.io/favicons/favicon.ico?v=201702181118",
              name: "Cssreference",
              title: "css属性详解、效果",
              url: "https://cssreference.io/",
            },
            {
              ico: "https://css-tricks.com/favicon.svg",
              name: "Css-Tricks",
              title: "你不知道的css效果",
              url: "https://css-tricks.com/",
            },
            {
              ico: "https://www.postcss.com.cn/assets/postcss.e01d2066.png",
              name: "PostCSS",
              title: "PostCSS适配",
              url: "https://www.postcss.com.cn/",
            },
          ],
        },
        {
          id: "guanwang",
          name: "软件下载、官网",
          index: 4,
          children: [
            {
              ico: "http://www.amoureux555.xyz/Git.ico",
              name: "Git",
              title: "Git",
              url: "https://git-scm.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/gitlab.ico",
              name: "Gitlab",
              title: "gitlab",
              url: "https://gitlab.com/",
            },
            {
              ico: "https://github.githubassets.com/favicons/favicon.png",
              name: "Github",
              title: "github",
              url: "https://github.com/",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRFGT.jpg",
              ico: "http://www.amoureux555.xyz/gitee.png",
              name: "Gitee",
              title: "gitee",
              url: "https://gitee.com/",
            },

            {
              ico: "https://assets.pgyer.com/static-20221020/assets/img/favicon.ico",
              name: "蒲公英",
              title: "发布一些软件",
              url: "https://www.pgyer.com/",
            },
            {
              ico: "https://easydoc.net/favicon.ico",
              name: "易文档",
              title: "自定义测试接口",
              url: "https://easydoc.net/",
            },
            {
              ico: "https://static.runoob.com/images/favicon.ico",
              name: "菜鸟教程",
              title: "学的不仅是技术、更是梦想",
              url: "https://www.runoob.com/",
            },
            {
              ico: "https://7n.w3cschool.cn/statics/images/favicon.ico?v=2.2",
              name: "W3Cschool",
              title: "W3Cschool词典库",
              url: "https://www.w3cschool.cn/",
            },
            {
              ico: "https://www.axure.com/wp-content/uploads/2019/04/favicon.ico",
              name: "Axure rp",
              title: "产品设计、产品经理",
              url: "https://www.axure.com/",
            },
            {
              // ico: "https://m1.im5i.com/2023/01/02/UGcnxG.jpg",
              ico: "http://www.amoureux555.xyz/Collectui.png",
              name: "Collectui",
              title: "很多和前端相关的东西",
              url: "https://collectui.com/",
            },
            {
              ico: "https://devdocs.io/favicon.ico",
              name: "Devdocs",
              title: "各种文档的集合",
              url: "https://devdocs.io/",
            },
            {
              ico: "https://www.google.cn/chrome/static/images/favicons/favicon-32x32.png",
              name: "Chrome谷歌",
              title: "Chrome谷歌",
              url: "https://www.google.cn/chrome/",
            },
            {
              ico: "https://www.firefox.com.cn/media/img/favicons/firefox/browser/favicon.f093404c0135.ico",
              name: "Firefox火狐",
              title: "firefox火狐",
              url: "http://www.firefox.com.cn/",
            },
            {
              ico: "https://www.todesk.com/favicon.ico",
              name: "Todesk",
              title: "todesk",
              url: "https://www.todesk.com/?from=baidu001",
            },
            {
              ico: "https://sunlogin.oray.com/favicon.ico",
              name: "向日葵",
              title: "向日葵",
              url: "https://sunlogin.oray.com/",
            },
            {
              // ico: "https://m1.im5i.com/2023/01/02/UGcUTf.png",
              ico: "http://www.amoureux555.xyz/stream.png",
              name: "Stream",
              title: "Stream游戏中心",
              url: "https://store.steampowered.com/",
            },
            {
              ico: "https://www.u.tools/favicon.ico",
              name: "UTools",
              title: "UTools",
              url: "https://www.u.tools/",
            },
            {
              ico: "https://steampp.net/favicon.ico",
              name: "Watt Toolkit",
              title: "Watt Toolkit加速",
              url: "https://steampp.net/",
            },
            {
              ico: "https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico",
              name: "阿里云盘",
              title: "阿里云盘",
              url: "https://www.aliyundrive.com/",
            },
            {
              ico: "https://www.huorong.cn/favicon.ico",
              name: "火绒",
              title: "火绒安全",
              url: "https://www.huorong.cn/",
            },
            {
              ico: "https://images.modao.cc/images/favicon.ico",
              name: "墨刀",
              title: "产品设计、产品经理",
              url: "https://modao.cc/brand",
            },
            {
              ico: "https://wac-cdn.atlassian.com/assets/img/favicons/sourcetree/favicon.ico",
              name: "Sourcetree",
              title: "sourcetree",
              url: "https://www.sourcetreeapp.com/",
            },
            {
              ico: "https://gw.alicdn.com/imgextra/i3/O1CN01eMicSg1GVD4uXMWGv_!!6000000000627-73-tps-32-32.ico",
              name: "钉钉",
              title: "钉钉",
              url: "https://page.dingtalk.com/wow/z/dingtalk/default/dddownload-index?from=zebra:offline",
            },
            {
              ico: "https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png",
              name: "语雀",
              title: "语雀",
              url: "https://www.yuque.com/download",
            },
            {
              ico: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
              name: "微信",
              title: "微信",
              url: "https://weixin.qq.com/",
            },
            {
              ico: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
              name: "微信开发者工具",
              title: "微信开发者工具",
              url: "https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",
            },
            {
              ico: "https://mimg.127.net/xm/dashi-official-site-pc/static/media/logo.a7c8955e.svg",
              name: "网易邮箱大师",
              title: "网易邮箱大师",
              url: "https://dashi.163.com/download.html?scene=appTrack&session_id=CC2A67C7-122A-496D-849A-536D07B326A9&uid=&from=mail11&spm=pos.free_webmail_9c89159b6fde1dc2.loginPage.login126Page.header.nav&gotodownload=1&fromDlpro=1",
            },
            {
              ico: "https://meeting.tencent.com/favicon.ico",
              name: "腾讯会议",
              title: "腾讯会议",
              url: "https://meeting.tencent.com/activities?fromSource=sem81_gwzcw.447781123.4477849.447781162&bd_vid=10584323930055557430",
            },
            {
              ico: "http://www.amoureux555.xyz/node.png",
              name: "Nodejs",
              title: "nodejs",
              url: "https://nodejs.org/en/download/",
            },
            {
              ico: "http://www.amoureux555.xyz/node.png",
              name: "Nodejs中文网",
              title: "nodejs中文网",
              url: "http://nodejs.cn/",
            },
            {
              ico: "http://www.amoureux555.xyz/uniapp.png",
              name: "Hbuild/Uniapp",
              title: "DCloud",
              url: "https://dcloud.io/",
            },
            {
              ico: "https://code.visualstudio.com/favicon.ico",
              name: "VsCode",
              title: "vscode",
              url: "https://code.visualstudio.com/",
            },

            {
              ico: "https://lhcdn.lanhuapp.com/dashboard/production/favicon.ico",
              name: "蓝湖",
              title: "蓝湖ps插件",
              url: "https://lanhuapp.com/ps",
            },
            {
              ico: "https://www.itab.link/favicon.ico",
              name: "iTab 标签页",
              title: "iTab 新标签页",
              url: "https://www.itab.link/",
            },
            {
              ico: "http://www.amoureux555.xyz/weTabs.ico",
              name: "weTabs 标签页",
              title: "weTabs 新标签页",
              url: "https://www.wetab.link/",
            },
            {
              ico: "http://www.amoureux555.xyz/infinity.ico",
              name: "Infinity 标签页",
              title: "Infinity 新标签页",
              url: "https://www.infinitytab.com/",
            },
            {
              ico: "https://www.jetbrains.com/favicon.ico?r=1234",
              name: "idea",
              title: "idea 官网",
              url: "https://www.jetbrains.com/idea/download/#section=windows",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Postman.png",
              name: "Postman",
              title: "Postman",
              url: "https://www.postman.com/downloads/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/ApiPost.ico",
              name: "ApiPost",
              title: "国产",
              url: "https://www.apipost.cn/download.html",
            },
            {
              ico: "",
              name: "VeryCapture",
              title: "截图、贴图、屏幕录制等工具",
              url: "https://verycapture.com/cn/index.html",
            },
            {
              ico: "https://www.lanzou.com/favicon.ico",
              name: "其他",
              title: "可能有你想要的，杂七杂八，密码：amoureux555",
              url: "https://amoureux555.lanzoum.com/b03jaj3qb",
            },
          ],
        },
        {
          id: "gongju",
          name: "工具",
          index: 5,
          children: [
            {
              ico: "http://www.amoureux555.xyz/jisu.ico",
              name: "极速接码",
              title: "接码平台",
              url: "https://smsjisu.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/logoly.ico",
              name: "logoly",
              title: "p站logo风格生成",
              url: "https://www.logoly.pro/#/vertical-ph",
            },
            {
              ico: "https://smalldev.tools/favicon.png",
              name: "Dev tools",
              title: "Json在线格式化",
              url: "https://smalldev.tools/",
            },
            {
              ico: "https://static.canva.cn/static/images/favicon-1.ico",
              name: "Canva 可可",
              title: "封面模板",
              url: "https://www.canva.cn/",
            },
            {
              ico: "https://www.aconvert.com/favicon.ico",
              name: "PDF",
              title: "在线转PDF",
              url: "https://www.aconvert.com/cn/pdf/",
            },
            {
              ico: "https://excalidraw.com/favicon.ico",
              name: "Excalidraw",
              title: "画图",
              url: "https://excalidraw.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/ialtone.jpg",
              name: "ialtone的短信测压",
              title: "短信轰炸",
              url: "https://run.ialtone.xyz/message/index.php",
            },
            {
              ico: "http://www.folderelf.com/logo.ico",
              name: "文件夹隐藏精灵",
              title: "文件夹隐藏、伪装、加密",
              url: "http://www.folderelf.com/",
            },
            {
              ico: "https://toolb.cn/favicon.ico",
              name: "文字转语音",
              title: "微软AI语音",
              url: "https://toolb.cn/textspeech",
            },
            {
              ico: "https://www.uugai.com/favicon.ico",
              name: "钙网",
              title: "免费logo",
              url: "https://www.uugai.com/",
            },

            {
              ico: "https://apis.baidu.com/favicon.ico",
              name: "易源数据",
              title: "短网址生成，约0.04元/条",
              url: "https://apis.baidu.com/store/detail/995bd886-d6aa-4c3e-b704-f786e6124c6f",
            },
            {
              ico: "https://404.456.cn/favicon.ico",
              name: "404",
              title: "404模板网",
              url: "https://404.life/",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRGq0.png",
              ico: "http://www.amoureux555.xyz/loading.io.png",
              name: "Loading.io",
              title: "各种loading",
              url: "https://loading.io/",
            },
            {
              ico: "https://www.qianbo.com.cn/favicon.ico",
              name: "比较工具",
              title: "在线文本比较工具",
              url: "https://www.qianbo.com.cn/Tool/Text-Difference/",
            },
            {
              ico: "https://www.bejson.com/favicon.ico",
              name: "JSON格式化",
              title: "在线JSON校验格式化工具",
              url: "https://www.bejson.com/",
            },
            {
              ico: "https://www.qqxiuzi.cn/favicon.ico",
              name: "Base64",
              title: "Base64编码转换",
              url: "https://www.qqxiuzi.cn/bianma/base64.htm",
            },
            {
              ico: "https://www.ip138.com/favicon.ico",
              name: "查询网",
              title: "什么都能查，只有你想不到",
              url: "https://www.ip138.com/",
            },
            {
              // ico: "https://m1.im5i.com/2023/01/02/UGcLp7.png",
              ico: "http://www.amoureux555.xyz/%E5%A5%87%E8%BF%B9%E7%A7%80.png",
              name: "奇迹秀工具箱",
              title: "各种找不到的官网",
              url: "http://www.qijishow.com/down/index.html",
            },

            {
              ico: "https://www.mysubmail.com/favicon.ico",
              name: "赛邮云",
              title: "企业级短信验证码接口",
              url: "https://www.mysubmail.com/",
            },
            {
              ico: "https://cn.bing.com/favicon.ico",
              name: "在线win11",
              title: "在线win11，大佬开发",
              url: "https://win11.blueedge.me/",
            },
            {
              ico: "https://github.githubassets.com/images/icons/emoji/unicode/1f300.png",
              name: "程序员忙碌",
              title: "摸鱼",
              url: "https://svenstaro.github.io/genact/",
            },
            {
              // ico: "https://m1.im5i.com/2023/01/02/UGcgNv.png",
              ico: "http://www.amoureux555.xyz/silk.png",
              name: "Silk",
              title: "互动生成艺术",
              url: "http://www.qijishow.com/Brand/Brand23/index.htm",
            },
            {
              ico: "https://zhutix.com/favicon.ico",
              name: "致美化",
              title: "各种主题、壁纸、指针",
              url: "https://zhutix.com/",
            },
            {
              ico: "",
              name: "对话生成器",
              title: "微信转账什么都能造，禁止用于违法行为",
              url: "https://tool.dvgod.com/index.html",
            },
            {
              ico: "https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",
              name: "Themes | Hexo",
              title: "博客园主题",
              url: "https://hexo.io/themes/",
            },

            {
              ico: "https://code.haiyong.site/wp-content/uploads/2022/10/logo.jpg",
              name: "海拥",
              title: "资源站点集合、技术宅集合点",
              url: "https://code.haiyong.site/",
            },
            {
              ico: "http://www.amoureux555.xyz/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86%E5%99%A8.png",
              name: "资源管理器",
              title: "资源管理器/文件夹",
              url: "https://code.haiyong.site/",
            },
          ],
        },
        {
          id: "peise",
          name: "配色",
          index: 6,
          children: [
            {
              ico: "https://color.adobe.com/favicon.ico",
              name: "土坯颜色",
              title: "土坯颜色",
              url: "https://color.adobe.com/zh/create/color-contrast-analyzer",
            },
            {
              ico: "https://uidesigndaily.com/public/img/favicon-32x32.png",
              name: "Design Daily",
              title: "Design Daily",
              url: "https://uidesigndaily.com/",
            },
            {
              ico: "https://www.91sotu.com/favicon.ico",
              name: "搜图配色",
              title: "搜图配色",
              url: "https://www.91sotu.com/colors/plate",
            },
            {
              ico: "https://webgradients.com/img/other/logos/webgradients_logo.png",
              name: "渐变背景",
              title: "渐变背景",
              url: "https://webgradients.com/",
            },
            {
              ico: "https://color.adobe.com/favicon.ico",
              name: "Adobe Color",
              title: "Adobe Color",
              url: "https://color.adobe.com/zh/explore/newest/",
            },
            {
              ico: "http://zhongguose.com/img/favicon.ico",
              name: "中国色",
              title: "中国色",
              url: "http://zhongguose.com/",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRbyB.png",
              ico: "http://www.amoureux555.xyz/%E9%85%8D%E8%89%B2%E8%A1%A8.png",
              name: "配色表",
              title: "配色表",
              url: "http://tool.c7sky.com/webcolor/",
            },
            {
              ico: "http://materialuicolors.co/img/favicon.ico",
              name: "materialuicolors",
              title: "materialuicolors",
              url: "http://materialuicolors.co/",
            },
            {
              ico: "https://color.hailpixel.com/static/ios/media/colordot-icon@2x.png",
              name: "Colordot",
              title: "随机颜色",
              url: "https://color.hailpixel.com/#",
            },
            {
              ico: "https://madewith.cn/favicon.png",
              name: "ColorUI",
              title: "专注视觉的小程序组件库",
              url: "https://madewith.cn/51",
            },
          ],
        },
        {
          id: "tupian",
          name: "图片",
          index: 7,
          children: [
            {
              ico: "https://unsplash.com/favicon-32x32.png",
              name: "Unsplash",
              title: "无版权图片",
              url: "https://unsplash.com/",
            },
            {
              ico: "https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico",
              name: "爱给",
              title: "爱给-专注免费素材",
              url: "https://www.aigei.com/icon/class",
            },

            {
              ico: "https://www.lightgalleryjs.com/favicon-32x32.png",
              name: "lightGallery",
              title: "图片、视频",
              url: "https://www.lightgalleryjs.com//",
            },
            {
              ico: "https://www.91sotu.com/favicon.ico",
              name: "搜图导航",
              title: "搜图导航",
              url: "https://www.91sotu.com/",
            },
            {
              ico: "https://tinify.cn/images/favicon.ico",
              name: "TinyPNG",
              title: "熊猫图片压缩",
              url: "https://tinify.cn/",
            },
            {
              ico: "https://www.gaituya.com/favicon.ico",
              name: "改图鸭",
              title:
                "压缩、转换、转文字、改大小、改分辨率、老照片修复、编辑、加水印、变漫画、特效...",
              url: "https://www.gaituya.com/",
            },
            {
              ico: "https://bgsub.cn/webapp/favicon.ico",
              name: "Bgsub",
              title: "修改背景、编辑图片",
              url: "https://bgsub.cn/webapp/",
            },

            {
              ico: "https://macimg.com/content/images/system/favicon_1601432933484_f405da.png",
              name: "麦克图床",
              title: "上传图片获取在线链接",
              url: "https://macimg.com/",
            },
            {
              ico: "https://www.upyun.com/static/favicon-32x32.png",
              name: "WebP图片压缩",
              title: "WebP图片压缩",
              url: "https://www.upyun.com/webp?utm_source=baidu&utm_medium=ppc&utm_campaign=%E4%BA%91%E5%A4%84%E7%90%86&utm_term=webp&utm_content=webp008&bd_vid=8557131538873693775",
            },
          ],
        },
        {
          id: "youxi",
          name: "游戏",
          index: 8,
          children: [
            {
              ico: "https://learngitbranching.js.org/assets/favicon.ico",
              name: "Gitgame",
              title: "git从这里开始",
              url: "https://learngitbranching.js.org/?locale=zh_CN",
            },
            {
              ico: "http://flexboxfroggy.com/favicon.ico",
              name: "FLEXBOX",
              title: "flex布局从这里开始",
              url: "http://flexboxfroggy.com/",
            },
          ],
        },
        {
          id: "chajian",
          name: "插件",
          index: 9,
          children: [
            {
              ico: "https://chrome.zzzmh.cn/favicon.ico",
              name: "极简插件",
              title: "极简插件",
              url: "https://chrome.zzzmh.cn/#/index",
            },
            {
              ico: "https://www.chajianxw.com/static/favicon.ico",
              name: "插件小屋",
              title: "插件小屋",
              url: "https://www.chajianxw.com/",
            },

            {
              ico: "https://greasyfork.org/vite/assets/blacklogo16.bc64b9f7.png",
              name: "油猴官网",
              title: "油猴官网",
              url: "https://greasyfork.org/zh-CN",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRJGQ.png",
              ico: "http://www.amoureux555.xyz/%E6%B2%B9%E7%8C%B4%E4%B8%AD%E6%96%87%E7%BD%91.png",
              name: "油猴中文网",
              title: "油猴中文网",
              url: "https://bbs.tampermonkey.net.cn/",
            },
            {
              ico: "https://www.lanzou.com/favicon.ico",
              name: "其他",
              title: "可能有你想要的，杂七杂八，密码：amoureux555",
              url: "https://amoureux555.lanzoum.com/b03j6d3xi",
            },
          ],
        },
        {
          id: "jiekou",
          name: "接口",
          index: 10,
          children: [
            {
              ico: "https://yiketianqi.com/favicon.ico",
              name: "天气API",
              title: "天气API",
              url: "https://yiketianqi.com/index/doc",
            },
            {
              ico: "",
              name: "初见之旅",
              title: "初见之旅",
              url: "https://blog.1314.cool/category-16.html",
            },
            {
              ico: "http://www.amoureux555.xyz/cu%20api.ico",
              name: "CU API",
              title: "CU API",
              url: "https://www.coderutil.com/cuapi/list",
            },
            {
              ico: "http://www.amoureux555.xyz/%E6%8E%A5%E5%8F%A3%E5%A4%A7%E5%85%A8.ico",
              name: "接口大全",
              title: "免费 API",
              url: "https://www.free-api.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/vvhan.ico",
              name: "韩小韩API接口站",
              title: "韩小韩API接口站",
              url: "https://api.vvhan.com/",
            },
            {
              ico: "https://mapapi.qq.com/web/lbs/logo/favicon.ico",
              name: "腾讯地图",
              title: "腾讯地图",
              url: "https://lbs.qq.com/webDemoCenter/glAPI/glMap/createMap",
            },
            {
              ico: "https://mapapi.qq.com/web/lbs/logo/favicon.ico",
              name: "腾讯位置服务",
              title: "腾讯位置服务",
              url: "https://lbs.qq.com/webDemoCenter/javascriptV2/libraries/placeLibrary",
            },
            {
              ico: "https://lbsyun.baidu.com/skins/MySkin/resources/img/icon/lbsyunlogo_icon.ico",
              name: "百度地图",
              title: "百度地图开放平台",
              url: "https://lbsyun.baidu.com/index.php?title=jspopularGL",
            },
            {
              ico: "https://a.amap.com/pc/static/favicon.ico",
              name: "高德地图",
              title: "高德地图开放平台",
              url: "https://lbs.amap.com/api/jsapi-v2/summary/",
            },
          ],
        },
        {
          id: "shuiyin",
          name: "去水印",
          index: 11,
          children: [
            {
              // ico: "https://m1.im5i.com/2023/01/02/UGciu3.png",
              ico: "http://www.amoureux555.xyz/%E7%96%AF%E7%8B%82%E8%A7%86%E9%A2%91.png",
              name: "疯狂视频",
              title: "疯狂视频",
              url: "https://douyin.video996.com/",
            },
            {
              ico: "https://ae01.alicdn.com/kf/Hb54975f7973845bf9f54a110dfd65064i.png",
              name: "酷豆",
              title: "酷豆",
              url: "https://dy.kukutool.com/",
            },
            {
              ico: "http://www.cainiaojiexi.com/favicon.ico",
              name: "菜鸟",
              title: "菜鸟",
              url: "http://www.cainiaojiexi.com/",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVR7Ts.png",
              ico: "http://www.amoureux555.xyz/%E5%97%A8%E5%91%80.jpg",
              name: "嗨呀",
              title: "菜嗨呀",
              url: "http://www.haiya360.com/",
            },
          ],
        },
        {
          id: "yinyue",
          name: "音乐",
          index: 12,
          children: [
            {
              ico: "https://s1.music.126.net/style/favicon.ico?v20180823",
              name: "网易云音乐",
              title: "网易云音乐",
              url: "https://music.163.com/",
            },
            {
              ico: "https://www.kugou.com/root/favicon.ico",
              name: "酷狗音乐",
              title: "酷狗音乐",
              url: "https://www.kugou.com/",
            },
            {
              ico: "https://y.qq.com/favicon.ico?max_age=2592000",
              name: "QQ音乐",
              title: "QQ音乐",
              url: "https://y.qq.com/",
            },
            {
              ico: "http://www.kuwo.cn/favicon.ico?v=1",
              name: "酷我音乐",
              title: "酷我音乐",
              url: "http://www.kuwo.cn/",
            },
            {
              ico: "https://music.91q.com/favicon.ico",
              name: "千千音乐",
              title: "千千音乐",
              url: "https://music.91q.com/",
            },
            {
              ico: "https://www.9ku.com/favicon.ico",
              name: "九酷音乐",
              title: "九酷音乐",
              url: "https://www.9ku.com/",
            },
            {
              ico: "https://img1.doubanio.com/f/fm/55cc7ebd1777d5101a82d7d6ce47ffc5e114131d/pics/fm/san_favicon.ico",
              name: "豆瓣电台",
              title: "豆瓣电台",
              url: "https://fm.douban.com/",
            },
            {
              ico: "http://www.5nd.com/favicon.ico",
              name: "5ND音乐",
              title: "搜歌词",
              url: "http://www.5nd.com/",
            },
            {
              ico: "https://npm.elemecdn.com/@liumingye/cdn2/favicon.ico",
              name: "MyfreeMp3",
              title: "搜歌词",
              url: "https://tool.liumingye.cn/music/#/",
            },
            {
              ico: "https://www.fangpiw.com/favicon.ico",
              name: "放屁音乐网",
              title: "全网资源免费下",
              url: "https://www.fangpiw.com/",
            },
          ],
        },
        {
          id: "bizhi",
          name: "壁纸",
          index: 13,
          children: [
            {
              ico: "https://wallhaven.cc/favicon.ico",
              name: "wallhaven",
              title: "wallhaven",
              url: "https://wallhaven.cc/",
            },
            {
              ico: "https://www.3gbizhi.com/favicon.ico",
              name: "手机壁纸大全",
              title: "手机壁纸大全",
              url: "https://www.3gbizhi.com/",
            },
            {
              ico: "https://bz.zzzmh.cn/img/icons/favicon-192x192.png",
              name: "极简壁纸",
              title: "极简壁纸",
              url: "https://bz.zzzmh.cn/index",
            },
            {
              // ico: "https://www.wallpapermaiden.com/images/favicons/favicon-32x32.png",
              ico: "http://www.amoureux555.xyz/wallpapermaiden.png",
              name: "wallpapermaiden",
              title: "wallpapermaiden",
              url: "https://www.wallpapermaiden.com/",
            },
            {
              ico: "https://backiee.com/assets/favicon/favicon-32x32.png?v2",
              name: "backiee",
              title: "backiee",
              url: "https://backiee.com/",
            },
          ],
        },
        {
          id: "求职",
          name: "求职、兼职",
          index: 14,
          children: [
            {
              ico: "https://www.zhipin.com/favicon.ico",
              name: "BOSS直聘",
              title: "找工作上BOSS直聘",
              url: "https://www.zhipin.com/nanjing/?sid=sem_pz_bdpc_dasou_title",
            },
            {
              ico: "https://common-bucket.zhaopin.cn/img/zhilian-ico/zhilian-ico-1.0.0.png",
              name: "智联招聘",
              title: "上智联，靠谱工作视频见",
              url: "https://landing.zhaopin.com/register?utm_source=baidupcpz&utm_medium=cpt&utm_provider=partner&sid=121113803&site=null&identity=c",
            },
            {
              ico: "https://mkt.51job.com/favicon.ico",
              name: "前程无忧",
              title: "好工作尽在前程无忧",
              url: "https://mkt.51job.com/tg/sem/LP_2022_BC.html?from=baidupz&partner=sem_pcbaidupz_2",
            },
            {
              ico: "https://concat.lietou-static.com/fe-www-pc/v5/static/favicon.e6edbc00.ico",
              name: "猎聘网",
              title: "找工作上猎聘准！",
              url: "https://wow.liepin.com/t1009641/878bbe06.html?mscid=s_00_pz0",
            },
            {
              ico: "https://www.nowcoder.com/favicon.ico",
              name: "牛客",
              title: "程序员朋友圈，职业能力测评",
              url: "https://www.nowcoder.com/",
            },
            {
              ico: "https://stacdn.proginn.com/favicon_new.ico",
              name: "程序员客栈",
              title: "免费发布需求、开发者入住",
              url: "https://www.proginn.com/",
            },
            {
              ico: "https://s.zbjimg.com/img/favicon.ico",
              name: "猪八戒网",
              title: "猪八戒网",
              url: "https://nanjing.zbj.com/?fr=header",
            },
            {
              ico: "https://zb.oschina.net/static/images/favicon.ico",
              name: "开源众包",
              title: "开源众包",
              url: "https://zb.oschina.net/projects/list.html",
            },
            {
              ico: "https://www.upwork.com/favicon.ico",
              name: "upwork",
              title: "为国内外科技公司招聘远程工作的工程师",
              url: "https://www.upwork.com/",
            },
            {
              ico: "https://shixian.com/assets/favicon-d7e1bd3ff5eeeb7edaf14ccaa86e3c8146757bf9e0cf7b4fa729dc581d160096.ico",
              name: "实现网",
              title: "实现网",
              url: "https://shixian.com/",
            },
            {
              ico: "https://www.kaifabang.com/wp-content/themes/kaifabangguanwang/taoke.ico",
              name: "开发邦",
              title: "面向开发工程师的分享社区",
              url: "https://www.kaifabang.com/",
            },
            {
              ico: "https://www.codemart.com/favicon.ico",
              name: "码市",
              title: "互联网软件外包服务平台",
              url: "https://www.codemart.com/",
            },
            {
              ico: "http://www.rrkf.com/images/favicon.png",
              name: "人人开发",
              title: "开启你的微创业之旅",
              url: "http://www.rrkf.com/",
            },
            {
              ico: "https://www.mayigeek.com/icon.png",
              name: "码易",
              title: "撮合需求方和开发者的事情，但却不收取佣金",
              url: "https://www.mayigeek.com/",
            },
            {
              ico: "https://frontier-assets.toptal.com/c4a9fd60eec9d204fb7d.png",
              name: "Toptal",
              title: "国外的自由职业者招募平台",
              url: "https://www.toptal.com/",
            },
            {
              ico: "https://www.f-cdn.com/assets/main/en/assets/app-icons/icon-192x192.png",
              name: "freelancer",
              title:
                "在国外比较有名，从程序开发到市场营销、广告、会计、法务等一系列的远程开展的业务，都能在这里找到工作。",
              url: "https://www.freelancer.cn/",
            },
            {
              ico: "http://www.taskcity.com/assets/taskcity-e9b9211ba34efd28e0ca304ccebc91e8efe7f00625881de82382ec3cd6f2af5c.ico",
              name: "智城",
              title: "让外包更简单",
              url: "http://www.taskcity.com/",
            },
            {
              ico: "https://www.sxsoft.com/favicon.ico",
              name: "Sxsoft",
              title: "专注在软件外包行业十几年的平台",
              url: "https://www.sxsoft.com/",
            },
          ],
        },
        {
          id: "iconfont",
          name: "Icon、SVG",
          index: 15,
          children: [
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVR5iS.png",
              ico: "http://www.amoureux555.xyz/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E7%9F%A2%E9%87%8F%E5%9B%BE%E6%A0%87%E5%BA%93.png",
              name: "阿里矢量图标库",
              title: "Iconfont",
              url: "https://www.iconfont.cn/",
            },
            {
              ico: "https://fontawesome.dashgame.com/assets/ico/favicon.ico",
              name: "Font Awesome",
              title: "Font Awesome",
              url: "https://fontawesome.dashgame.com/",
            },
            {
              ico: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
              name: "IconPark",
              title: "IconPark",
              url: "https://iconpark.oceanengine.com/official",
            },
            {
              ico: "https://igoutu.cn/vue-static/icon/favicon/icons8_fav_32%C3%9732.png",
              name: "ICONS",
              title: "ICONS",
              url: "https://igoutu.cn/icons",
            },
            {
              ico: "https://www.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aa",
              name: "ICONFINDER",
              title: "ICONFINDER",
              url: "https://www.iconfinder.com/search?q=&price=free",
            },
            {
              ico: "http://www.amoureux555.xyz/css.gg.png",
              name: "css.gg",
              title: "css.gg",
              url: "https://css.gg/",
            },
            {
              ico: "http://www.amoureux555.xyz/ikonate.png",
              name: "ikonate",
              title: "ikonate",
              url: "https://ikonate.com/",
            },
            {
              ico: "",
              name: "radix",
              title: "radix",
              url: "https://icons.radix-ui.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/ionicons.png",
              name: "ionic",
              title: "ionic",
              url: "https://ionic.io/ionicons",
            },
            {
              ico: "http://www.amoureux555.xyz/feather.png",
              name: "feathericons",
              title: "feathericons",
              url: "https://feathericons.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/iconmonstr.ico",
              name: "iconmonstr",
              title: "iconmonstr",
              url: "https://iconmonstr.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/bootstrap.ico",
              name: "bootstrap",
              title: "bootstrap",
              url: "https://icons.bootcss.com/",
            },

            {
              ico: "http://www.zuohaotu.com/svg/images/logo.png",
              name: "Svg在线编辑器",
              title: "svg在线编辑器",
              url: "http://www.zuohaotu.com/svg/",
            },
            {
              ico: "http://www.amoureux555.xyz/svg%E8%BD%ACpng.png",
              name: "Svg在线转换",
              title: "svg在线转换",
              url: "https://svgtopng.com/zh/",
            },
            {
              ico: "https://undraw.co/favicon.ico",
              name: "UnDraw",
              title: "unDraw",
              url: "https://undraw.co/illustrations",
            },
            {
              ico: "https://static.production.thenounproject.com/img/favicons/favicon-32x32.015f779a87e7.png",
              name: "Noun project",
              title: "icons + photos",
              url: "https://thenounproject.com/",
            },
            {
              ico: "https://onlineconvertfree.com/favicon.ico",
              name: "Unsplash",
              title: "ico在线转图片",
              url: "https://onlineconvertfree.com/zh/convert-format/png-to-svg/",
            },
            {
              ico: "https://cn.office-converter.com/Online-Converter/OnlineConvert32.png",
              name: "在线转换器",
              title: "ico在线转图片",
              url: "https://cn.office-converter.com/free-ico-to-png",
            },
            {
              ico: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
              name: "icon_png",
              title: "ico在线转图片",
              url: "https://www.alltoall.net/ico_png/",
            },
            {
              ico: "https://www.bitbug.net/favicon.ico",
              name: "比特虫",
              title: "jpg、jpeg、gif、png等制作为ico图标",
              url: "http://www.bitbug.net/",
            },
          ],
        },
        {
          id: "emoji",
          name: "Emoji",
          index: 16,
          children: [
            {
              ico: "https://www.emojiall.com/favicon.ico",
              name: "EmojiAll",
              title: "Emoji中文网",
              url: "https://www.emojiall.com/zh-hans",
            },
            {
              ico: "https://getemoji.com/assets/ico/favicon.png",
              name: "Emoji表情",
              title: "Emoji表情",
              url: "https://getemoji.com/",
            },
            {
              ico: "https://bj.96weixin.com/favicon.ico",
              name: "表情代码",
              title: "emoji表情代码大全",
              url: "https://bj.96weixin.com/tools/emoji",
            },
            {
              ico: "https://emojiwiz.com/img/fav/favicon.ico",
              name: "表情能手",
              title: "表情能手",
              url: "https://emojiwiz.com/zh/",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVR9So.jpg",
              ico: "http://www.amoureux555.xyz/%E5%8F%91%E8%A1%A8%E6%83%85.png",
              name: "发表情",
              title: "发表情",
              url: "https://fabiaoqing.com/",
            },
          ],
        },
        {
          id: "echarts",
          name: "Echarts",
          index: 17,
          children: [
            {
              ico: "https://madeapie.com/favicon.ico",
              name: "Made a Pie",
              title: "Made a Pie",
              url: "https://madeapie.com/#/",
            },
            {
              ico: "http://uipower.com/static/images/index/pic_biaoq.png",
              name: "UIPower",
              title: "UI设计公司",
              url: "http://uipower.com/",
            },
            {
              ico: "https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1",
              name: "Apache Echarts",
              title: "Apache Echarts",
              url: "https://echarts.apache.org/zh/index.html",
            },
            {
              ico: "http://www.amoureux555.xyz/hightecharts.ico",
              name: "Hight Echarts",
              title: "Hight Echarts",
              url: "https://www.hcharts.cn/demo/highcharts",
            },
            {
              ico: "https://www.isqqw.com/favicon.ico",
              name: "Echarts Demo集",
              title: "Echarts Demo集",
              url: "https://www.isqqw.com/",
            },
            {
              ico: "http://analysis.datains.cn/finance-admin/upload/theme/img/8D9AE0CCF1CC43B998AD4FCB0B613EF4.png?v=1666919734997",
              name: "DataInsight",
              title: "DataInsight",
              url: "http://chartlib.datains.cn/",
            },
            {
              ico: "http://192.144.199.210/favicon.ico",
              name: "数据可视化技术",
              title: "数据可视化技术",
              url: "http://192.144.199.210/forum.php?mod=forumdisplay&fid=2",
            },
            {
              ico: "http://ppchart.com/favicon.ico",
              name: "PPChart",
              title: "PPChart",
              url: "http://ppchart.com/#/",
            },
            {
              ico: "https://www.shanhaibi.com/wp-content/themes/twentyseventeen/assets/images/favicon.ico",
              name: "山海鲸可视化",
              title: "山海鲸可视化",
              url: "https://www.shanhaibi.com/?type=marketlist",
            },
            {
              ico: "http://www.amoureux555.xyz/datav.ico",
              name: "Datav",
              title: "构建大屏的框架",
              url: "http://datav.jiaminghi.com/guide/",
            },
          ],
        },
        {
          id: "donghua",
          name: "动画、特效",
          index: 18,
          children: [
            {
              ico: "https://www.dowebok.com/favicon.ico",
              name: "Animate.css",
              title: "Animate.css",
              url: "https://www.dowebok.com/demo/2014/98/",
            },
            {
              ico: "https://animate.style/img/favicon.ico",
              name: "动画演示",
              title: "动画演示",
              url: "https://animate.style/",
            },
            {
              ico: "https://better-scroll.github.io/examples/static/bs.ico",
              name: "BetterScroll",
              title: "移动端的一些示例",
              url: "https://better-scroll.github.io/examples/#/",
            },
            {
              ico: "https://www.swiper.com.cn/favicon.ico",
              name: "Swiper",
              title: "Swiper中文网",
              url: "https://www.swiper.com.cn/demo/index.html",
            },
            {
              ico: "https://animpen.com/favicon.ico",
              name: "animpen",
              title: "码笔网",
              url: "https://animpen.com/",
            },
            {
              ico: "https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",
              name: "CodePen",
              title: "CodePen",
              url: "https://codepen.io/",
            },
            {
              ico: "http://www.amoureux555.xyz/C3%E5%8A%A8%E7%94%BB%E4%BB%A3%E7%A0%81%E5%A4%A7%E5%90%88%E9%9B%86.png",
              name: "C3动画",
              title: "C3动画代码大集合",
              url: "https://www.webhek.com/post/css3-animation-sniplet-collection/#/",
            },
            {
              ico: "http://www.amoureux555.xyz/vantajs.ico",
              name: "vantajs",
              title: "网站动态背景",
              url: "https://www.vantajs.com/?effect=waves",
            },
          ],
        },
        {
          id: "muban",
          name: "模板",
          index: 19,
          children: [
            {
              ico: "http://www.shenmaziyuan.com/assets/images/logo_1.png",
              name: "神码资源",
              title: "什么模板都有",
              url: "http://www.shenmaziyuan.com/",
            },
            {
              ico: "https://downdemo.npsvip.cn/template/static/images/logo.png",
              name: "DOWN源码",
              title: "免费里面最好的一个",
              url: "https://www.downdemo.com/#/index",
            },
            {
              ico: "https://www.adminbuy.cn/favicon.ico",
              name: "AB模板网",
              title: "前端模板",
              url: "https://www.adminbuy.cn/plus/search.php?typeid=0&q=%CA%B3%C6%B7&imageField=",
            },

            {
              ico: "http://www.cssmoban.com/favicon.ico",
              name: "模板之家",
              title: "前端模板网站",
              url: "http://www.cssmoban.com/tags/5YmN56uv/",
            },
            {
              ico: "https://www.17sucai.com/statics/images/favicon.ico",
              name: "17素材",
              title: "模板是收费的！",
              url: "https://www.17sucai.com/category/47",
            },
            {
              ico: "https://sc.chinaz.com/favicon.ico",
              name: "站长之家",
              title: "感觉还不错",
              url: "https://sc.chinaz.com/tag_moban/html5.html",
            },

            {
              ico: "http://www.html5code.net/favicon.ico",
              name: "HTML5模板",
              title: "HTML5模板",
              url: "http://www.html5code.net/moban/",
            },
            {
              ico: "http://www.baisheng999.com/skin/1.0/images/original269x269.png",
              name: "网站模板库",
              title: "网站模板库",
              url: "http://www.baisheng999.com/webtemplate/",
            },
            {
              ico: "https://jianlixiazai.cn/assets/img/favicon.ico",
              name: "简历下载",
              title: "简历魔板下载，全免费！！",
              url: "https://jianlixiazai.cn/",
            },
            {
              ico: "https://www.51pptmoban.com/favicon.ico",
              name: "PPT模板",
              title: "PPT模板免费下载",
              url: "http://www.51pptmoban.com/",
            },
          ],
        },
        {
          id: "wendang",
          name: "文档手册",
          index: 20,
          children: [
            {
              ico: "https://socket.io/zh-CN/images/favicon.png",
              name: "Socket.io",
              title: "Socket.io",
              url: "https://socket.io/zh-CN/",
            },
            {
              ico: "https://unbug.github.io/codelf/images/codelf_logo.f4ae25bd.png",
              name: "codeLF",
              title: "起变量名神器",
              url: "https://unbug.github.io/codelf/",
            },
            {
              ico: "http://www.amoureux555.xyz/MiniUI.png",
              name: "miniUi",
              title: "jquery miniui",
              url: "http://www.miniui.com/",
            },
            {
              // ico: "https://m1.im5i.com/2022/12/30/UGEVYF.png",
              ico: "http://www.amoureux555.xyz/MUI.png",
              name: "MUI",
              title: "最接近原生APP体验的高性能前端框架",
              url: "https://dev.dcloud.net.cn/mui/",
            },
            {
              ico: "http://backbonejs.org/favicon.ico",
              name: "Backbone",
              title: "Backbone.js",
              url: "http://backbonejs.org/",
            },
            {
              ico: "https://angular.cn/assets/images/favicons/favicon.ico",
              name: "Angular",
              title: "三大主流框架之一",
              url: "https://angular.cn/",
            },
            {
              ico: "http://www.amoureux555.xyz/APlayer.png",
              name: "APlayer",
              title: "开源音乐播放器",
              url: "https://aplayer.js.org/#/zh-Hans/",
            },
            // {
            //   ico: "https://ogp.me/favicon.ico",
            //   name: "开放图谱协议",
            //   title: "开放图谱协议",
            //   url: "https://ogp.me/",
            // },
            {
              ico: "https://apidocjs.com/img/favicon.ico",
              name: "APIDOC",
              title: "RESTful Web API",
              url: "https://apidocjs.com/#configuration",
            },
            {
              ico: "https://www.lodashjs.com/img/favicon.ico",
              name: "Lodash",
              title: "Lodash中文文档（深拷贝）",
              url: "https://www.lodashjs.com/",
            },
            {
              ico: "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
              name: "Npm",
              title: "npm部署包",
              url: "https://www.npmjs.com/",
            },
            {
              ico: "https://www.npmjs.cn/images/favicon.ico",
              name: "Npm",
              title: "npm中文文档",
              url: "https://www.npmjs.cn/",
            },
            {
              ico: "http://www.amoureux555.xyz/yarn.png",
              name: "Yarn",
              title: "yarn中文文档",
              url: "https://www.yarnpkg.cn/getting-started",
            },
            {
              ico: "https://www.pnpm.cn/img/favicon.png",
              name: "Pnpm",
              title: "pnpm中文文档",
              url: "https://www.pnpm.cn/",
            },
            {
              ico: "https://cn.vuejs.org/logo.svg",
              name: "Vue2",
              title: "vue2中文文档",
              url: "https://cn.vuejs.org/",
            },
            {
              ico: "https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png",
              name: "made with vue.js",
              title: "制成vue.js",
              url: "https://madewithvuejs.com/",
            },
            {
              ico: "https://cn.vuejs.org/logo.svg",
              name: "Vue3",
              title: "vue3中文文档",
              url: "https://v3.cn.vuejs.org/",
            },
            {
              ico: "http://www.amoureux555.xyz/react%20%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3.png",
              name: "React",
              title: "React中文文档",
              url: "https://zh-hans.reactjs.org/docs/getting-started.html",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRaNq.png",
              ico: "http://www.amoureux555.xyz/bootstrap.png",
              name: "Bootstrap",
              title: "Bootstrap中文文档",
              url: "https://v3.bootcss.com/",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRaNq.png",
              ico: "http://www.amoureux555.xyz/Nuxt.png",
              name: "Nuxt",
              title: "Nuxt2 文档",
              url: "https://nuxtjs.org/docs/get-started/installation/",
            },
            {
              // ico: "https://m1.im5i.com/2022/10/31/UVRaNq.png",
              ico: "http://www.amoureux555.xyz/zui.ico",
              name: "ZUI",
              title: "开源HTML5跨屏框架",
              url: "https://www.openzui.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/Iview.ico",
              name: "IVIew",
              title: "北京视图",
              url: "https://iview.github.io/components/grid",
            },
            {
              ico: "https://img01.yzcdn.cn/vant/logo.png",
              name: "Vant ui",
              title: "杭州有赞",
              url: "https://vant-contrib.gitee.io/vant/v2/#/zh-CN/",
            },
            {
              ico: "http://www.amoureux555.xyz/Mintui.png",
              name: "Mint-ui",
              title: "饿了么",
              url: "http://mint-ui.github.io/#!/zh-cn",
            },
            {
              ico: "https://element.eleme.cn/favicon.ico",
              name: "Element-ui",
              title: "饿了么",
              url: "https://element.eleme.cn/#/zh-CN/component/link",
            },
            {
              ico: "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
              name: "Element-plus",
              title: "饿了么",
              url: "https://element-plus.gitee.io/zh-CN/guide/quickstart.html",
            },
            {
              ico: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
              name: "AntD React",
              title: "蚂蚁金服antd",
              url: "https://ant.design/docs/react/introduce-cn",
            },
            {
              ico: "http://www.amoureux555.xyz/AntD%20Vue.png",
              name: "AntD Vue",
              title: "蚂蚁金服antd",
              url: "https://www.antdv.com/docs/vue/introduce-cn",
            },
            {
              ico: "http://www.amoureux555.xyz/iview%20Design.png",
              name: "iview Design",
              title: "iview Design",
              url: "基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案",
            },
            {
              ico: "https://pro.ant.design/favicon.png",
              name: "Antd Pro",
              title: "Ant Design Pro",
              url: "https://pro.ant.design/zh-CN/",
            },
            {
              ico: "http://doc.ruoyi.vip/images/favicon.ico",
              name: "若依",
              title: "若依框架功能组件",
              url: "http://doc.ruoyi.vip/",
            },
            {
              ico: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
              name: "微信开放文档",
              title: "微信开放文档",
              url: "https://developers.weixin.qq.com/miniprogram/dev/component/",
            },
            {
              // ico: "https://m1.im5i.com/2023/02/06/UbLz8a.png",
              ico: "http://www.amoureux555.xyz/vue%20Code%20View.png",
              name: "vue Code View",
              title: "网页中实时编辑运行代码的交互组件",
              url: "https://andurils.github.io/vue-code-view/#/home",
            },
            {
              ico: "https://www.layui.site/favicon.ico",
              name: "layui",
              title: "开源模块化前端UI矿建",
              url: "https://www.layui.site/index.htm",
            },
            {
              ico: "http://www.amoureux555.xyz/arco.design.ico",
              name: "arco.design",
              title: "vue、react都能用",
              url: "https://arco.design/docs/spec/link",
            },
            {
              ico: "http://www.amoureux555.xyz/MDN.png",
              name: "MDN",
              title: "学习web开发 | MDN",
              url: "https://developer.mozilla.org/zh-CN/docs/Learn",
            },
            {
              ico: "http://www.amoureux555.xyz/Electron.ico",
              name: "Electron ",
              title: "构建桌面化应用程序",
              url: "https://www.electronjs.org/",
            },
            {
              ico: "http://www.amoureux555.xyz/TS.ico",
              name: "TS 中文手册",
              title: "TS 中文手册",
              url: "https://typescript.bootcss.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/vite.png",
              name: "Vite",
              title: "vite | 下一代的前端工具链",
              url: "https://cn.vitejs.dev/",
            },
            {
              ico: "http://www.amoureux555.xyz/uniapp.png",
              name: "uniapp 官网",
              title: "uniapp 官网",
              url: "https://uniapp.dcloud.net.cn/collocation/App.html",
            },
            {
              ico: "http://www.amoureux555.xyz/es6%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.ico",
              name: "es6 入门教程",
              title: "es6 入门教程",
              url: "https://es6.ruanyifeng.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/WebGL.ico",
              name: "WebGL教程",
              title: "WebGL教程",
              url: "http://www.webgl3d.cn/WebGL/",
            },
            {
              ico: "http://www.amoureux555.xyz/threejs.ico",
              name: "three.js",
              title: "three.js",
              url: "https://threejs.org/",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 锚链接平滑滚动
    tabsColor(index) {
      const tabsId = document.querySelector(`#${index}`);
      // document.querySelectorAll(".clearfix")
      // var clearList = document.querySelectorAll(".clearfix");
      var clearList = document.querySelectorAll(".el-card__header");
      clearList.forEach((item) => {
        item.style.backgroundColor = null;
        item.children[0].style.color = "black";
        // console.log(item.children[0]);
      });
      // console.log(document.querySelectorAll(".clearfix"));
      // const headerHeight = document.getElementsByClassName("el-header");
      if (tabsId) {
        window.scrollTo({
          // top: tabsId.offsetTop - headerHeight[0].clientHeight - 20,
          top: tabsId.offsetTop - 90,
          behavior: "smooth",
        });
        document.getElementById(
          `${index}`
        ).childNodes[0].style.backgroundColor = "gray";
        document.getElementById(
          `${index}`
        ).childNodes[0].childNodes[0].style.color = "white";
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.search-image {
  width: 20px;
  height: 20px;
}
.check_color {
  ::v-deep .el-timeline-item__node {
    background-color: #3fa3ff !important;
  }
}
.active_color {
  color: #3fa3ff;
}
.left {
  // z-index: 1;
  width: 86%;
  ::v-deep .el-card__body {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    div {
      margin: 10px 20px;
    }
  }
}
.text {
  font-size: 14px;
}
.box-card {
  div {
    position: relative;
    font-size: 16px;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .clearfix {
    span {
      font-weight: 600;
    }
  }
  div:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0;
    height: 2px;
  }
  div:hover:before {
    width: 100%;
    left: 0;
    right: 0;
  }
  a:hover {
    color: #4285f4;
  }
  ::v-deep .el-card__body {
    padding: 10px;
  }
  width: 96%;
  margin-bottom: 30px;
  .twoitem {
    width: 150px;
    a {
      display: flex;
      align-items: flex-end;
      white-space: nowrap;
    }
  }
}
::v-deep .el-card__header {
  text-align: left;
  padding: 15px 0 5px 30px;
}
#header-bar-menu {
  position: fixed;
  top: 125px;
  right: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.el-timeline {
  text-align: left;
  ::v-deep .el-timeline-item {
    padding: 0;
    div:nth-of-type(3):hover {
      cursor: pointer;
      div:nth-of-type(1) {
        color: #40a9ff;
      }
    }
  }
}
</style>
