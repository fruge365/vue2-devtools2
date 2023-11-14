<template>
  <!-- 更新日志 -->
  <div class="history">
    <div class="radio">
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>
    <br />
    <el-timeline :reverse="reverse">
      <el-timeline-item timestamp="2022-12-31">
        <transition name="el-zoom-in-top">
          <el-card shadow="hover">
            <p>
              旧版本工具箱
              <a
                href="http://120.48.59.67:3312/"
                target="_blank"
                style="color: blue"
                title="点击跳转"
                >工具箱 v1.0.0</a
              >
            </p>
          </el-card>
        </transition>
      </el-timeline-item>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        <el-card shadow="hover">
          <span>{{ activity.name }}</span
          >&emsp;<span>{{ activity.version }}</span>
          <div>{{ activity.title }}</div>
          <ul>
            <li v-for="(item, index) in activity.content" :key="index">
              {{ item.sub }}
            </li>
          </ul>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          //更新时间
          timestamp: "2023-01-01",
          name: "版本更新",
          // 版本号
          version: "v2.0.0",
          // 标题
          title: "新增",
          // 更新内容
          content: [
            {
              sub: "左侧菜单栏",
            },
            {
              sub: "菜单-常用正则",
            },
          ],
        },
        {
          timestamp: "2023-01-07",
          name: "版本更新",
          version: "v2.0.1",
          title: "新增",
          content: [
            {
              sub: "菜单-更新日志",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-01-08",
          name: "版本更新",
          // 版本号
          version: "v2.1.1",
          // 标题
          title: "调整",
          // 更新内容
          content: [
            {
              sub: "底层布局",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-01-10",
          name: "版本更新",
          // 版本号
          version: "v2.1.2",
          // 标题
          title: "修复",
          // 更新内容
          content: [
            {
              sub: "顶部导航栏设置 模态框遮挡问题",
            },
            {
              sub: "左侧菜单栏固定问题",
            },
            {
              sub: "返回顶部按钮消失问题",
            },
            {
              sub: "锚点链接失效问题",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-01-15",
          name: "版本更新",
          // 版本号
          version: "v2.1.3",
          // 标题
          title: "修复",
          // 更新内容
          content: [
            {
              sub: "网站备案",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-05",
          name: "版本更新",
          // 版本号
          version: "v2.1.4",
          // 标题
          title: "新增",
          // 更新内容
          content: [
            {
              sub: "首页-壁纸",
            },
            {
              sub: "首页-音乐",
            },
            {
              sub: "首页-模板",
            },
            {
              sub: "看板娘",
            },
            {
              sub: "左侧菜单栏波动文字",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-08",
          name: "版本更新",
          // 版本号
          version: "v2.1.5",
          // 标题
          title: "新增",
          // 更新内容
          content: [
            {
              sub: "左侧菜单栏-案例",
            },
            {
              sub: "首页-求职、兼职",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-12",
          name: "版本更新",
          // 版本号
          version: "v2.1.6",
          // 标题
          title: "新增",
          // 更新内容
          content: [
            {
              sub: "左侧菜单栏-首页-百度",
            },
            {
              sub: "前端常用-百度热搜榜",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-16",
          name: "版本更新",
          // 版本号
          version: "v2.1.7",
          // 标题
          title: "新增+移除",
          // 更新内容
          content: [
            {
              sub: "前端常用-百度热搜榜",
            },
            {
              sub: "移除控制台log",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-17",
          name: "版本更新",
          // 版本号
          version: "v2.1.8",
          // 标题
          title: "修复",
          // 更新内容
          content: [
            {
              sub: "控制台报错url",
            },
            {
              sub: "icon获取不到",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-21",
          name: "版本更新",
          // 版本号
          version: "v2.1.9",
          // 标题
          title: "新增+修复",
          // 更新内容
          content: [
            {
              sub: "动态标题（导航守卫）",
            },
            {
              sub: "热点排行url报错",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-22",
          name: "版本更新",
          // 版本号
          version: "v2.1.10",
          // 标题
          title: "修复+新增",
          // 更新内容
          content: [
            {
              sub: "修复路由跳转问题（Router3->2）",
            },
            {
              sub: "新增热点排行-小说榜等",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-23",
          name: "版本更新",
          // 版本号
          version: "v2.1.11",
          // 标题
          title: "移除+新增",
          // 更新内容
          content: [
            {
              sub: "移除看板娘",
            },
            {
              sub: "新增微博热搜榜",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-02-25",
          name: "版本更新",
          // 版本号
          version: "v2.1.12",
          // 标题
          title: "新增+修复",
          // 更新内容
          content: [
            {
              sub: "新增音乐播放",
            },
            {
              sub: "修复微博热搜榜不能正常显示问题",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-03-06",
          name: "版本更新",
          // 版本号
          version: "v2.1.13",
          // 标题
          title: "新增+调整+新增",
          // 更新内容
          content: [
            {
              sub: "新增首页微博热搜榜",
            },
            {
              sub: "调整‘首页’菜单名为‘百度一下’",
            },
            {
              sub: "调整首页为前端常用",
            },
            {
              sub: "新增热点排行话题榜",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-03-09",
          name: "版本更新",
          // 版本号
          version: "v2.1.14",
          // 标题
          title: "新增天气",
          // 更新内容
          content: [
            {
              sub: "新增前端常用-天气",
            },
            {
              sub: "微博热搜不能正常显示问题",
            },
            {
              sub: "点击锚点链接对应高亮",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-03-10",
          name: "版本更新",
          // 版本号
          version: "v2.1.15",
          // 标题
          title: "新增热点排行内容",
          // 更新内容
          content: [
            {
              sub: "新增热点排行-贴吧热议、虎扑步行街",
            },
          ],
        },
        {
          //更新时间
          timestamp: "2023-03-15",
          name: "版本更新",
          // 版本号
          version: "v2.1.16",
          // 标题
          title: "优化",
          // 更新内容
          content: [
            {
              sub: "图片懒加载",
            },
            {
              sub: "增加chatgpt",
            },
          ],
        },
        {
          //更新时间
          timestamp: "xxxx-xx-xx",
          name: "Amoureux555.xyz",
          // 版本号
          version: "v999.999.999",
          // 标题
          title: "未完待续",
          // 更新内容
          content: [
            {
              sub: "To be continued...",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.history {
  width: 30%;
  font-size: 18px;
  ::v-deep .el-timeline {
    text-align: left;
  }
  // ele 动画特效
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
}
</style>
