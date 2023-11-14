<template>
  <div class="right">
    <!-- 当前时间 -->
    <el-card class="box-card hot" shadow="hover"
      ><Time />
      <!-- 翻页时钟 -->
      <!-- <Clock /> -->
      <Ip />
    </el-card>
    <!-- 百度热搜 -->
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
        v-for="(item, index) in baiduHOT.slice(4, 16)"
        :key="index"
        class="text item"
      >
        <a :href="item.url" :title="item.word" target="_blank">
          {{ index + 4 }}&emsp;{{ item.word }}</a
        >
      </div>
      <div @click="$router.push('/hot')" class="show-more">查看更多 >>></div>
    </el-card>
    <!-- 微博热搜 -->
    <el-card class="box-card weiboHOT hot" shadow="hover">
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
        v-for="(item, index) in weiboHOT.slice(4, 16)"
        :key="index"
        class="text item"
      >
        <a :href="item.url" :title="item.title" target="_blank">
          {{ index + 4 }}&emsp;{{ item.title }}</a
        >
      </div>
      <div @click="$router.push('/hot')" class="show-more">查看更多 >>></div>
    </el-card>
    <!-- 个人 -->
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>个人</span>
      </div>
      <div class="text item">
        <div>
          <a href="http://120.48.59.67:3309/" target="_blank">
            <img
              src="http://www.amoureux555.xyz/%E5%A4%B4%E5%83%8F.jpg"
              alt=""
              class="search-image"
            />
            &emsp; 个人博客
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="https://blog.csdn.net/qq_46123200?type=blog" target="_blank">
            <img
              src="https://g.csdnimg.cn/static/logo/favicon32.ico"
              alt=""
              class="search-image"
            />
            &emsp; CSDN
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a
            href="https://docs.qq.com/sheet/DVGFaSGp1alhtZ0tN?tab=BB08J2"
            target="_blank"
          >
            <img
              src="https://docs.gtimg.com/sheet/assets/file_sheet_16.c302c049fefc79588994.svg"
              alt=""
              class="search-image"
            />
            &emsp; 其他项目
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="http://amoureux555.gitee.io/utils/" target="_blank">
            <img
              src="http://www.amoureux555.xyz/gitee.png"
              alt=""
              class="search-image"
            />
            &emsp; Gitee 前端工具箱
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="https://www.yuque.com/amoureux555" target="_blank">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png"
              alt=""
              class="search-image"
            />
            &emsp; 语雀 前端面试题
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="http://amoureux555.jueguangzhe.cn/" target="_blank">
            <img
              src="http://www.amoureux555.xyz/%E6%90%9C%E9%A2%98%E7%B3%BB%E7%BB%9F.ico"
              alt=""
              class="search-image"
            />
            &emsp; Am查题系统
          </a>
        </div>
      </div>
      <!-- <div class="text item">
        <div>
          <a href="https://gitlab.com/Etc-Hub/devtools" target="_blank">
            <img
              src="https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"
              alt=""
              class="search-image"
            />
            &emsp; 本项目开源地址
          </a>
        </div>
      </div> -->
    </el-card>
    <!-- 个人 -->
    <el-card class="box-card tuiguang" shadow="hover">
      <div class="text item">
        <img
          src="http://www.amoureux555.xyz/%E6%89%AB%E7%A0%81_%E6%90%9C%E7%B4%A2%E8%81%94%E5%90%88%E4%BC%A0%E6%92%AD%E6%A0%B7%E5%BC%8F-%E7%99%BD%E8%89%B2%E7%89%88.webp"
          alt=""
          class="search-image"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import Time from "../../component/time.vue";
import Ip from "../../../views/component/Ip";
// import Clock from "@/views/component/Clock";
import { baiDuHot, wbhot } from "@/api/index.js";

export default {
  components: {
    Time,
    Ip,
    // Clock,
  },
  data() {
    return {
      baiduHOT: [
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
        { word: "暂未加载", url: "" },
      ],
      // 微博热搜榜
      weiboHOT: [
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
    // 微博热搜榜 VVHAN
    async wbhot() {
      await wbhot().then((res) => {
        // this.weiboHOT = this.weiboHOTOne = res.data.data.realtime;
        // console.log(res.data.data);
        this.weiboHOT = res.data.data;
      });
    },
    // 百度热搜
    async baiDuHot() {
      await baiDuHot().then((res) => {
        this.baiduHOT = res.data.data;
      });
    },
  },
  created() {
    this.baiDuHot();
    this.wbhot();
  },
};
</script>
<style lang="scss" scoped>
.show-more {
  cursor: pointer;
  position: absolute;
  bottom: 6px;
  // left: 50%;
  right: 10%;
  transform: translateX(-50%);
  &:hover {
    color: #4285f4;
  }
}
::v-deep .baiduhot .el-card__body {
  position: relative;
}
::v-deep .weiboHOT .el-card__body {
  position: relative;
}
.right {
  width: 350px;
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
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
  // .hot {
  //   div {
  //     display: flex;
  //     align-items: center;
  //   }
  // }
}
.text {
  font-size: 14px;
}

.tuiguang {
  height: 96px;
  ::v-deep .el-card__body {
    padding: 0;
    div {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.box-card {
  margin-bottom: 20px;
  ::v-deep .person {
    display: flex;
    align-items: center;
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
::v-deep .el-card__header {
  text-align: left;
}
</style>
