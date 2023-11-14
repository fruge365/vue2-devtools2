<template>
  <!-- 热点排行 -->
  <div class="baidu">
    <!-- 百度热搜榜 -->
    <transition name="el-zoom-in-center">
      <el-card
        class="box-card baiduhot hot"
        shadow="hover"
        v-if="baiduHOT.length > 0"
      >
        <div slot="header" class="clearfix person">
          <img
            src="https://www.baidu.com/favicon.ico"
            alt=""
            class="search-image"
          />&emsp;
          <span>百度热搜榜</span>
        </div>
        <a :href="baiduHOT[0].url" :title="baiduHOT[0].word" target="_blank">
          <i class="el-icon-download"></i>&emsp;{{ baiduHOT[0].word }}</a
        >
        <br />
        <a :href="baiduHOT[1].url" :title="baiduHOT[1].word" target="_blank">
          <span class="first">1</span>&emsp;{{ baiduHOT[1].word }}</a
        >
        <br />
        <a :href="baiduHOT[2].url" :title="baiduHOT[2].word" target="_blank">
          <span class="second">2</span>&emsp;{{ baiduHOT[2].word }}</a
        >
        <br />
        <a :href="baiduHOT[3].url" :title="baiduHOT[3].word" target="_blank">
          <span class="third">3</span>&emsp;{{ baiduHOT[3].word }}</a
        >
        <br />
        <div
          v-for="(item, index) in baiduHOT.slice(4, 31)"
          :key="index"
          class="text item"
        >
          <a :href="item.url" :title="item.word" target="_blank">
            {{ index + 4 }}&emsp;{{ item.word }}</a
          >
        </div>
        <div @click="showto" class="show-more">
          {{ textwprd }}
        </div>
      </el-card>
    </transition>
    <!-- 贴吧热议榜 -->
    <transition name="el-zoom-in-center">
      <el-card
        class="box-card baiduhot hot"
        shadow="hover"
        v-if="baiduHOT.length > 0"
      >
        <div slot="header" class="clearfix person">
          <img
            src="https://www.baidu.com/favicon.ico"
            alt=""
            class="search-image"
          />&emsp;
          <span>贴吧热议榜</span>
        </div>
        <!-- <a :href="TieBaHOT[0].url" :title="TieBaHOT[0].desc" target="_blank">
          <i class="el-icon-download"></i>&emsp;{{ TieBaHOT[0].title }}</a
        >
        <br /> -->
        <a :href="TieBaHOT[0].url" :title="TieBaHOT[0].desc" target="_blank">
          <span class="first">1</span>&emsp;{{ TieBaHOT[0].title }}</a
        >
        <br />
        <a :href="TieBaHOT[1].url" :title="TieBaHOT[1].desc" target="_blank">
          <span class="second">2</span>&emsp;{{ TieBaHOT[1].title }}</a
        >
        <br />
        <a :href="TieBaHOT[2].url" :title="TieBaHOT[2].desc" target="_blank">
          <span class="third">3</span>&emsp;{{ TieBaHOT[2].title }}</a
        >
        <br />
        <div
          v-for="(item, index) in TieBaHOT.slice(3, 30)"
          :key="index"
          class="text item"
        >
          <a :href="item.url" :title="item.desc" target="_blank">
            {{ index + 4 }}&emsp;{{ item.title }}</a
          >
        </div>
        <div @click="showto1" class="show-more">
          {{ textwprd1 }}
        </div>
      </el-card>
    </transition>
    <!-- 小说榜-->
    <transition name="el-zoom-in-center">
      <el-card class="box-card weibohot hot" shadow="hover" v-show="show">
        <div slot="header" class="clearfix person">
          <img
            src="http://www.amoureux555.xyz/%E5%B0%8F%E8%AF%B4%E6%A6%9C.png"
            alt=""
            class="search-image"
          />&emsp;
          <span style="color: #ff6633">小说榜</span>
        </div>
        <a
          :href="hrefList.slice(0, 10)[0]"
          :title="hrefList.slice(0, 10)[0].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="first">1</span>&emsp;{{
            hrefList.slice(0, 10)[0].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(0, 10)[1]"
          :title="hrefList.slice(0, 10)[1].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="second">2</span>&emsp;{{
            hrefList.slice(0, 10)[1].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(0, 10)[2]"
          :title="hrefList.slice(0, 10)[2].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="third">3</span>&emsp;{{
            hrefList.slice(0, 10)[2].innerText
          }}</a
        >
        <br />
        <div
          v-for="(item, index) in hrefList.slice(0, 7)"
          :key="index"
          class="text item"
        >
          <a
            :href="hrefList[index + 3]"
            target="_blank"
            :title="hrefList[index + 3].innerText"
            >{{ index + 4 }}&emsp;{{ hrefList[index + 3].innerText }}</a
          >
        </div>
      </el-card>
    </transition>
    <!-- 电影榜-->
    <transition name="el-zoom-in-center">
      <el-card class="box-card weibohot hot" shadow="hover" v-show="show">
        <div slot="header" class="clearfix person">
          <img
            src="http://www.amoureux555.xyz/%E7%94%B5%E5%BD%B1%E6%A6%9C.png"
            alt=""
            class="search-image"
          />&emsp;
          <span style="color: #4d4dff">电影榜</span>
        </div>
        <a
          :href="hrefList.slice(10, 20)[0]"
          :title="hrefList.slice(10, 20)[0].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="first">1</span>&emsp;{{
            hrefList.slice(10, 20)[0].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(10, 20)[1]"
          :title="hrefList.slice(10, 20)[1].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="second">2</span>&emsp;{{
            hrefList.slice(10, 20)[1].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(10, 20)[2]"
          :title="hrefList.slice(10, 20)[2].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="third">3</span>&emsp;{{
            hrefList.slice(10, 20)[2].innerText
          }}</a
        >
        <br />
        <div
          v-for="(item, index) in hrefList.slice(10, 17)"
          :key="index"
          class="text item"
        >
          <a
            :href="hrefList[index + 13]"
            target="_blank"
            :title="hrefList[index + 13].innerText"
            >{{ index + 4 }}&emsp;{{ hrefList[index + 13].innerText }}</a
          >
        </div>
      </el-card>
    </transition>
    <!-- 电视剧榜-->
    <transition name="el-zoom-in-center">
      <el-card class="box-card weibohot hot" shadow="hover" v-show="show">
        <div slot="header" class="clearfix person">
          <img
            src="http://www.amoureux555.xyz/%E7%94%B5%E8%A7%86%E5%89%A7%E6%A6%9C.png"
            alt=""
            class="search-image"
          />&emsp;
          <span style="color: #4d4dff">电视剧榜</span>
        </div>
        <a
          :href="hrefList.slice(20, 30)[0]"
          :title="hrefList.slice(20, 30)[0].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="first">1</span>&emsp;{{
            hrefList.slice(20, 30)[0].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(20, 30)[1]"
          :title="hrefList.slice(20, 30)[1].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="second">2</span>&emsp;{{
            hrefList.slice(20, 30)[1].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(20, 30)[2]"
          :title="hrefList.slice(20, 30)[2].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="third">3</span>&emsp;{{
            hrefList.slice(20, 30)[2].innerText
          }}</a
        >
        <br />
        <div
          v-for="(item, index) in hrefList.slice(20, 27)"
          :key="index"
          class="text item"
        >
          <a
            :href="hrefList[index + 23]"
            target="_blank"
            :title="hrefList[index + 23].innerText"
            >{{ index + 4 }}&emsp;{{ hrefList[index + 23].innerText }}</a
          >
        </div>
      </el-card>
    </transition>
    <!-- 汽车榜-->
    <transition name="el-zoom-in-center">
      <el-card class="box-card weibohot hot" shadow="hover" v-show="show">
        <div slot="header" class="clearfix person">
          <img
            src="http://www.amoureux555.xyz/%E6%B1%BD%E8%BD%A6%E6%A6%9C.png"
            alt=""
            class="search-image"
          />&emsp;
          <span style="color: #1a8cff">汽车榜</span>
        </div>
        <a
          :href="hrefList.slice(30, 40)[0]"
          :title="hrefList.slice(30, 40)[0].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="first">1</span>&emsp;{{
            hrefList.slice(30, 40)[0].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(30, 40)[1]"
          :title="hrefList.slice(30, 40)[1].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="second">2</span>&emsp;{{
            hrefList.slice(30, 40)[1].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(30, 40)[2]"
          :title="hrefList.slice(30, 40)[2].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="third">3</span>&emsp;{{
            hrefList.slice(30, 40)[2].innerText
          }}</a
        >
        <br />
        <div
          v-for="(item, index) in hrefList.slice(30, 37)"
          :key="index"
          class="text item"
        >
          <a
            :href="hrefList[index + 33]"
            target="_blank"
            :title="hrefList[index + 33].innerText"
            >{{ index + 4 }}&emsp;{{ hrefList[index + 33].innerText }}</a
          >
        </div>
      </el-card>
    </transition>
    <!-- 游戏榜-->
    <transition name="el-zoom-in-center">
      <el-card class="box-card weibohot hot" shadow="hover" v-show="show">
        <div slot="header" class="clearfix person">
          <img
            src="http://www.amoureux555.xyz/%E6%B8%B8%E6%88%8F%E6%A6%9C.png"
            alt=""
            class="search-image"
          />&emsp;
          <span style="color: #6633ff">游戏榜</span>
        </div>
        <a
          :href="hrefList.slice(40, 50)[0]"
          :title="hrefList.slice(40, 50)[0].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="first">1</span>&emsp;{{
            hrefList.slice(40, 50)[0].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(40, 50)[1]"
          :title="hrefList.slice(40, 50)[1].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="second">2</span>&emsp;{{
            hrefList.slice(40, 50)[1].innerText
          }}</a
        >
        <br />
        <a
          :href="hrefList.slice(40, 50)[2]"
          :title="hrefList.slice(40, 50)[2].innerText"
          target="_blank"
          v-if="isShow"
        >
          <span class="third">3</span>&emsp;{{
            hrefList.slice(40, 50)[2].innerText
          }}</a
        >
        <br />
        <div
          v-for="(item, index) in hrefList.slice(40, 47)"
          :key="index"
          class="text item"
        >
          <a
            :href="hrefList[index + 43]"
            target="_blank"
            :title="hrefList[index + 43].innerText"
            >{{ index + 4 }}&emsp;{{ hrefList[index + 43].innerText }}</a
          >
        </div>
      </el-card>
    </transition>
    <!-- 百度热搜 -->
    <div v-html="content" style="display: none"></div>
  </div>
</template>
<script>
import { baiDuHot, baiDuHot1, tbhot } from "@/api/index.js";
export default {
  components: {},
  data() {
    return {
      textwprd: "查看更多",
      textwprd1: "查看更多",
      content: "",
      isShow: false,
      hrefList: [],
      show: false, // ele 动画特效
      baiduHOT: [
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
      ],
      baiduHOTOne: [
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
      ],
      // 贴吧热议榜
      TieBaHOT: [
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
      ],
      TieBaHOTOne: [
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
      ],
    };
  },
  methods: {
    // 查看更多和收起
    showto() {
      if (this.textwprd === "查看更多") {
        this.baiduHOT = this.baiduHOTOne;
        this.textwprd = "收起";
      } else {
        this.baiduHOT = this.baiduHOTOne.slice(0, 10);
        this.textwprd = "查看更多";
      }
    },
    // 查看更多和收起
    showto1() {
      if (this.textwprd1 === "查看更多") {
        this.TieBaHOT = this.TieBaHOTOne;
        this.textwprd1 = "收起";
      } else {
        this.TieBaHOT = this.TieBaHOTOne.slice(0, 10);
        this.textwprd1 = "查看更多";
      }
    },
    weet() {
      if (this.baiduHOTOne.length > 10) {
        // 截取数组的前四位
        this.baiduHOT = this.baiduHOTOne.slice(0, 10);
      } else {
        this.baiduHOT = this.baiduHOTOne;
      }
    },
    // 贴吧热议榜
    weet1() {
      if (this.TieBaHOTOne.length > 10) {
        // 截取数组的前四位
        this.TieBaHOT = this.TieBaHOTOne.slice(0, 10);
      } else {
        this.TieBaHOT = this.TieBaHOTOne;
      }
    },
    // 百度热搜榜
    Hotsearch() {
      baiDuHot().then((res) => {
        this.baiduHOTOne = res.data.data;
        this.weet();
      });
    },
    // 百度热搜榜 官方
    async testFn() {
      await baiDuHot1().then((res) => {
        this.content = res.data;
        this.clickFn();
      });
      this.isShow = true;
    },
    // 贴吧热议榜 vvhan
    async tbhot() {
      await tbhot().then((res) => {
        // console.log(res, "贴吧热议榜");
        this.TieBaHOTOne = res.data.data;
        this.weet1();
      });
    },
    // 获取页面上的 百度热搜排行元素 进行操作
    clickFn() {
      this.$nextTick(() => {
        let content1 = document.getElementsByClassName("name_3SMKh");
        // 伪数组转换成数组
        this.hrefList = [].slice.call(content1);
      });
    },
  },
  created() {
    this.Hotsearch();
    this.testFn();
    this.tbhot();
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
  .baiduhot {
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
