<template>
  <!-- 热点排行 -->
  <div class="baidu">
    <!-- 微博热搜榜 -->
    <transition name="el-zoom-in-center">
      <el-card
        class="box-card weiboHOT hot"
        shadow="hover"
        v-if="weiboHOT.length > 0"
      >
        <div slot="header" class="clearfix person">
          <img
            src="https://weibo.com/favicon.ico"
            alt=""
            class="search-image"
          />&emsp;
          <span>微博热搜榜</span>
        </div>
        <a :href="weiboHOT[0].url" :title="weiboHOT[0].title" target="_blank">
          <i class="el-icon-download"></i>&emsp;{{ weiboHOT[0].title }}</a
        >
        <br />
        <a :href="weiboHOT[1].url" :title="weiboHOT[1].title" target="_blank">
          <span class="first">1</span>&emsp;{{ weiboHOT[1].title }}</a
        >
        <br />
        <a :href="weiboHOT[2].url" :title="weiboHOT[2].title" target="_blank">
          <span class="second">2</span>&emsp;{{ weiboHOT[2].title }}</a
        >
        <br />
        <a :href="weiboHOT[3].url" :title="weiboHOT[3].title" target="_blank">
          <span class="third">3</span>&emsp;{{ weiboHOT[3].title }}</a
        >
        <br />
        <div
          v-for="(item, index) in weiboHOT.slice(4, 52)"
          :key="index"
          class="text item"
        >
          <a :href="item.url" :title="item.title" target="_blank">
            {{ index + 4 }}&emsp;{{ item.title }}</a
          >
        </div>
        <div @click="showto" class="show-more">
          {{ textwprd }}
        </div>
      </el-card>
    </transition>
    <!-- 抖音热点 -->
    <transition name="el-zoom-in-center">
      <el-card
        class="box-card weiboHOT hot"
        shadow="hover"
        v-if="weiboHOT.length > 0"
      >
        <div slot="header" class="clearfix person">
          <img
            src="http://www.amoureux555.xyz/douyin.ico"
            alt=""
            class="search-image"
          />&emsp;
          <span>抖音热点</span>
        </div>
        <div class="dyflex">
          <a
            :href="douyinHOT[0].url"
            :title="douyinHOT[0].title"
            target="_blank"
          >
            <span class="first">1</span>&emsp;{{ douyinHOT[0].title }}
          </a>
          <span>{{ douyinHOT[0].hot }}</span>
        </div>
        <!-- <br /> -->
        <div class="dyflex">
          <a
            :href="douyinHOT[1].url"
            :title="douyinHOT[1].title"
            target="_blank"
          >
            <span class="second">2</span>&emsp;{{ douyinHOT[1].title }}
          </a>
          <span>{{ douyinHOT[1].hot }}</span>
        </div>
        <!-- <br /> -->
        <div class="dyflex">
          <a
            :href="douyinHOT[2].url"
            :title="douyinHOT[2].title"
            target="_blank"
          >
            <span class="third">3</span>&emsp;{{ douyinHOT[2].title }}
          </a>
          <span>{{ douyinHOT[3].hot }}</span>
        </div>
        <!-- <br /> -->
        <div
          v-for="(item, index) in douyinHOT.slice(3, 50)"
          :key="index"
          class="text item dyflex"
        >
          <a :href="item.url" :title="item.title" target="_blank">
            {{ index + 4 }}&emsp;{{ item.title }}</a
          >
          <span>{{ item.hot }}</span>
        </div>
        <div @click="showto1" class="show-more">
          {{ textwprd1 }}
        </div>
      </el-card>
    </transition>
    <!-- 虎扑-步行街热帖 -->
    <transition name="el-zoom-in-center">
      <el-card
        class="box-card weiboHOT hot hupu"
        shadow="hover"
        v-if="hupuHOT.length > 0"
      >
        <div slot="header" class="clearfix person">
          <img
            src="http://www.amoureux555.xyz/hupu.ico"
            alt=""
            class="search-image"
          />&emsp;
          <span>虎扑-步行街热帖</span>
        </div>
        <div class="dyflex">
          <a :href="hupuHOT[0].url" :title="hupuHOT[0].title" target="_blank">
            <span class="first">1</span>&emsp;{{ hupuHOT[0].title }}
          </a>
          <span>{{ hupuHOT[0].hot }}</span>
        </div>
        <!-- <br /> -->
        <div class="dyflex">
          <a :href="hupuHOT[1].url" :title="hupuHOT[1].title" target="_blank">
            <span class="second">2</span>&emsp;{{ hupuHOT[1].title }}
          </a>
          <span>{{ hupuHOT[1].hot }}</span>
        </div>
        <!-- <br /> -->
        <div class="dyflex">
          <a :href="hupuHOT[2].url" :title="hupuHOT[2].title" target="_blank">
            <span class="third">3</span>&emsp;{{ hupuHOT[2].title }}
          </a>
          <span>{{ hupuHOT[3].hot }}</span>
        </div>
        <!-- <br /> -->
        <div
          v-for="(item, index) in hupuHOT.slice(3, 50)"
          :key="index"
          class="text item dyflex"
        >
          <a :href="item.url" :title="item.title" target="_blank">
            {{ index + 4 }}&emsp;{{ item.title }}</a
          >
          <span>{{ item.hot }}</span>
        </div>
        <div @click="showto2" class="show-more">
          {{ textwprd2 }}
        </div>
      </el-card>
    </transition>
  </div>
</template>
<script>
import { wbhot, dyhot, bxjhot } from "@/api/index.js";
export default {
  components: {},
  data() {
    return {
      textwprd: "收起",
      textwprd1: "收起",
      textwprd2: "收起",
      // 话题榜
      loading1: false,
      content: "",
      isShow: false,
      hrefList: [],
      show: false, // ele 动画特效
      // 微博热搜榜
      weiboHOT: [
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
      ],
      weiboHOTOne: [
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
      ],
      // 抖音热搜榜
      douyinHOT: [
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
      ],
      douyinHOTOne: [
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
      ],
      // 虎扑-步行街热帖
      hupuHOT: [
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
      ],
      hupuHOTOne: [
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
        { title: "暂未加载", url: "" },
      ],
    };
  },
  methods: {
    // 抖音热搜 vvhan
    async dyhot() {
      await dyhot().then((res) => {
        this.douyinHOTOne = res.data.data;
        // console.log(res.data.data, "抖音热点");
        this.showto1();
      });
    },
    //  抖音热搜 查看更多和收起
    showto1() {
      if (this.textwprd1 === "查看更多") {
        this.douyinHOT = this.douyinHOTOne;
        this.textwprd1 = "收起";
      } else {
        this.douyinHOT = this.douyinHOTOne.slice(0, 10);
        this.textwprd1 = "查看更多";
      }
    },
    // 虎扑-步行街热帖 vvhan
    async bxjhot() {
      await bxjhot().then((res) => {
        this.hupuHOTOne = res.data.data;
        // console.log(res.data.data, "虎扑-步行街热帖");
        this.showto2();
      });
    },
    // 虎扑-步行街热帖 查看更多和收起
    showto2() {
      if (this.textwprd2 === "查看更多") {
        this.hupuHOT = this.hupuHOTOne;
        this.textwprd2 = "收起";
      } else {
        this.hupuHOT = this.hupuHOTOne.slice(0, 10);
        this.textwprd2 = "查看更多";
      }
    },
    // 微博热搜 vvhan
    async wbhot() {
      await wbhot().then((res) => {
        this.weiboHOTOne = res.data.data;
        this.showto();
      });
    },
    //  微博热搜 查看更多和收起
    showto() {
      if (this.textwprd === "查看更多") {
        this.weiboHOT = this.weiboHOTOne;
        this.textwprd = "收起";
      } else {
        this.weiboHOT = this.weiboHOTOne.slice(0, 10);
        this.textwprd = "查看更多";
      }
    },
  },
  created() {
    this.wbhot();
    this.dyhot();
    this.bxjhot();
  },
  mounted() {
    this.show = true;
  },
};
</script>
<style lang="scss" scoped>
.baidu {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 40px;
  .weiboHOT {
    ::v-deep .el-card__body {
      position: relative;
    }
  }
  .show-more {
    cursor: pointer;
    position: absolute;
    transform: translateX(-50%);
    bottom: 6px;
    left: 50%;
    &:hover {
      color: #4285f4;
    }
  }
  .show-more1 {
    cursor: pointer;
    position: absolute;
    transform: translateX(-50%);
    bottom: 6px;
    left: 80%;
    &:hover {
      color: #4285f4;
    }
  }
  .hot {
    i {
      margin-left: -3px;
      transform: rotate(180deg);
      color: #f73131;
    }
    .first {
      color: #fe2d46;
    }
    .second {
      color: #f60;
    }
    .third {
      color: #faa90e;
    }
    div:nth-of-type(2) {
      a {
        font-size: 14px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        margin-bottom: 10px;
        // width: 94%;
      }

      a:before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 0;
        height: 2px;
        background: #4285f4;
        transition: all 0.3s;
      }
      a:hover:before {
        width: 100%;
        left: 0;
        right: 0;
      }
      a:hover {
        color: #4285f4;
        a {
          color: #4285f4;
        }
      }
    }
  }
  .clearfix {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-size: 14px;
    }
  }

  ::v-deep .el-card__body {
    display: block;
    text-align: left;
  }
  .search-image {
    border-radius: 9px;
    width: 20px;
    height: 20px;
  }
  .text {
    font-size: 14px;
  }
  .box-card {
    width: 390px;
    margin: 0 0 20px 20px;
    .dyflex {
      display: flex;
      justify-content: space-between;
    }
    .item {
      div {
        position: relative;
        font-size: 16px;
        display: inline-block;
        cursor: pointer;
        margin-bottom: 10px;
      }

      div:before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 0;
        height: 2px;
        background: #4285f4;
        transition: all 0.3s;
      }
      div:hover:before {
        width: 100%;
        left: 0;
        right: 0;
      }
      div:hover {
        color: #4285f4;
        a {
          color: #4285f4;
        }
      }
    }
  }
  .hupu {
    width: 780px;
    a {
      width: 94%;
    }
  }
  ::v-deep .el-card__header {
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
