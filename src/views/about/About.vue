<template>
  <!-- 关于本站 -->
  <div class="about">
    <!-- 因为喜欢，所以坚持。<br /><br /> -->
    <div class="top">
      <el-card class="about1" shadow="never">
        <div slot="header" class="clearfix">
          <span>关于本站</span>
        </div>
        <div class="content">
          <h2>一、Amoureux555 工具箱是什么？</h2>
          <span>工具箱 —— amoureux555.xyz 是一个编程网站目录！</span>
          <span
            >是我多年浪迹互联网收集整理的编程网站列表，指在分享当前最好用、最优质、最常用的编程网站导航。</span
          >
          <h2>二、为什么要创建这个网站？</h2>
          <span
            >创建 工具箱
            是为了让大家能快速找到优质、好用的编程网站，让编程变得简单！</span
          >
          <h2>三、与其他编程网站导航比有什么优势？我为什么要收藏？</h2>
          <span>能找到当下互联网最好用，最优质的协作编程网站！</span>
          <span>编程想用时不再苦苦寻找，打开 工具箱 即可！</span>
          <h3>如果你觉得这个网站还不错，可以帮助我们提高网站的知名度！</h3>
          <h3>
            我相信你不是唯一一个在网上艰难寻找编程资源的人，或许你的朋友现在正在为寻找编程资源发愁，为什么不将最好的编程网站导航目录分享给他呢！
          </h3>
        </div>
      </el-card>
      <el-card class="about2" shadow="never">
        <div slot="header" class="clearfix">
          <span>
            <img
              src="http://www.amoureux555.xyz/%E7%83%AD%E9%97%A8%E7%BD%91%E5%9D%80.png"
              alt=""
              srcset=""
            />&ensp;热门网址</span
          >
        </div>
        <div class="content">
          <ul>
            <div v-for="(item, index) in hotWeb" :key="index">
              <a :href="item.url" target="_blank">
                <li>
                  <img :src="item.src" :alt="item.name" />&ensp;{{ item.name }}
                </li>
              </a>
            </div>
          </ul>
        </div>
      </el-card>
    </div>
    <el-card class="bottom" shadow="never">
      <!-- <div slot="header" class="clearfix">
        <span>关于本站</span>
      </div> -->
      <div class="btn">
        <div class="top">
          <div class="left">
            <div class="content1">
              <h2 style="cursor: pointer" @click="$router.push('/')">
                Amoureux555
              </h2>
              <h2 style="cursor: pointer" @click="$router.push('/')">
                Amoureux555
              </h2>
            </div>
            <span>
              这里收集整理的编程网站列表，指在分享当前最好用、最优质、最常用的编程网站导航。
            </span>
          </div>
          <div class="right">
            <img
              src="http://www.amoureux555.xyz/%E8%B5%9E%E8%B5%8F%E7%A0%81.jpg"
              alt="投喂amoureux555"
              srcset=""
            />
            <span>帮助网站持续运营</span>
          </div>
        </div>
        <div class="bottom">
          Copyright © 2023
          <div class="blog" @click="blogFn">Amoureux555</div>
          |
          <div @click="$router.push('/')" class="gjx">工具箱</div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotWeb: [
        {
          // 网站名称
          name: "CV开发",
          // 网站链接
          url: "https://www.5cv.top/",
          // 网站ico
          src: "http://www.amoureux555.xyz/cv%E5%BC%80%E5%8F%91.ico",
        },
        {
          // 网站名称
          name: "神码资源",
          // 网站链接
          url: "http://www.shenmaziyuan.com/",
          // 网站ico
          src: "http://www.shenmaziyuan.com/assets/images/logo_1.png",
        },
      ],
    };
  },
  methods: {
    blogFn() {
      window.open("http://amoureux555.top/", "_blank");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.about {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    // background-color: red;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 80px;
    ::v-deep .about1 {
      width: 55%;
      padding-bottom: 30px;
      margin-right: 20px;
      .clearfix {
        text-align: left;
        span {
          font-size: 25px;
        }
      }
      .content {
        .top {
          display: flex;
          flex-direction: column;
          span {
            width: 200px;
          }
        }
        span {
          color: #cc7549;
          margin-bottom: 25px;
          display: block;
          font-size: 18px;
        }
      }
    }
    .about2 {
      width: 370px;
      .clearfix {
        span {
          display: flex;
          align-items: center;
          font-size: 18px;
          img {
            width: 24px;
            height: 24px;
          }
        }
      }
      ::v-deep .el-card__body {
        padding: 0;
      }
      .content {
        // position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          // width: 80%;
          margin-left: 20px;
          div {
            li {
              height: 35px;
              width: 130px;
              background-color: rgba(128, 128, 128, 0.1);
              margin: 5px;
              padding-left: 10px;
              line-height: 35px;
              border-radius: 5px;
              display: flex;
              align-items: center;
              img {
                width: 22px;
                height: 22px;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    // width: 1000px;
    width: 73%;
    .btn {
      .top {
        justify-content: space-between;
        margin: 0 40px 30px;
        .left {
          display: flex;
          flex-direction: column;
        }
        .right {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
      .bottom {
        .blog {
          display: inline-block;
          &:hover {
            cursor: pointer;
            color: #4285f4;
          }
        }
        .gjx {
          display: inline-block;
          &:hover {
            cursor: pointer;
            color: #4285f4;
          }
        }
      }
    }
  }
}
.content1 {
  width: 200px;
  position: relative;
  height: 60px;
  // background-color: rgb(44, 46, 47);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.content1 h2 {
  color: #fff;
  font-size: 2em;
  position: absolute;
  // transform: translate(-50%, -50%);
}

.content1 h2:nth-child(1) {
  color: transparent;
  // -webkit-text-stroke: 2px #03a9f4;
  // -webkit-text-stroke: 3px white;
  -webkit-text-stroke: 1px #03a9f4;
}

.content1 h2:nth-child(2) {
  // color: #03a9f4;
  // color: black;
  color: #03a9f4;
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
</style>
