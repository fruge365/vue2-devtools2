<template>
  <div class="search1">
    <!-- 百度搜索start -->
    <!-- <div class="baidu" @mouseleave="onInputBlur"> -->
    <div class="baidu">
      <!-- @focus="onInputFocus" -->
      <transition name="el-zoom-in-top">
        <el-input
          placeholder="输入并搜索"
          v-model="search"
          class="search"
          clearable
          @keydown.enter.native="goto()"
          @change="onInputFocus"
          @focus="onInputFocus"
          v-show="show"
        >
          <template slot="prepend">
            <img
              src="https://www.baidu.com/favicon.ico"
              alt=""
              class="baiduIco"
          /></template>
        </el-input>
      </transition>
      <!-- 百度接口返回内容列表start -->
      <div class="content" v-show="contentStatus">
        <ul>
          <li @click="goto()" v-show="search">
            <i class="el-icon-search"></i>&emsp;{{ this.search }}
          </li>
          <li v-for="item in searchList" :key="item.sa" @click="goto(item.q)">
            <i class="el-icon-search"></i>&emsp;{{ item.q }}
          </li>
        </ul>
      </div>
      <!-- 百度接口返回内容列表start -->
    </div>
    <!-- 百度搜索end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false, // ele 动画特效
      contentStatus: false,
      search: "", // 输入框输入内容
      searchList: [], // 请求百度接口返回列表
    };
  },
  methods: {
    // 百度搜索(请求接口)
    searchBtn() {
      // if (this.search === "") return;
      this.searchList = [];
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        // 判断是否返回
        if (xhr.readyState === 4) {
          // 判断返回的状态
          if (xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            // console.log("百度搜索res", res); //  {....,g:[],...}  留心：res必定是对象 但是搜索不到数据的时候就没有g
            if (!res.g) return; // g没有数据 就退出函数 终止代码执行
            this.searchList = JSON.parse(JSON.stringify(res.g));
            // console.log(this.searchList);
          } else {
            console.log(xhr.status);
          }
        }
      };
      xhr.open("get", process.env.VUE_APP_BASE_API + `${this.search}`);
      // xhr.open("get", `https://www.baidu.com/sugrec?prod=pc&wd=${this.search}`);
      xhr.send(null);
    },
    // 输入框回车 | 点击搜索内容
    goto(content) {
      this.contentStatus = false;
      // 判断用户是否点击li
      if (content) {
        window.open("https://www.baidu.com/s?wd=" + content, "_blank");
      } else {
        window.open("https://www.baidu.com/s?wd=" + this.search, "_blank");
      }
    },
    // 输入框获取焦点
    onInputFocus() {
      this.searchBtn();
      this.contentStatus = true;
    },
    // 输入框失去焦点
    onInputBlur() {
      console.log("离开鼠标");
      // this.contentStatus = false;
    },
  },
  created() {},
  mounted() {
    this.show = true;
  },
  watch: {
    // 监控输入框内容变化
    search() {
      if (this.searchList.length) {
        this.contentStatus = true;
      }
      this.searchBtn();
    },
  },
};
</script>
<style lang="scss" scoped>
.search1 {
  z-index: 99;
  .baidu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content {
      width: 600px;
      background-color: white;
      margin-top: 10px;
      border-radius: 10px;
      overflow: hidden;
      backdrop-filter: saturate(50%) blur(15px);
      ul {
        margin: 5px 0;
        list-style-type: none;
        list-style-position: outside;
        padding: 0;
        border: 2px solid #4e71f2 !important;
        border-radius: 2px;
        li {
          padding: 5px 10px;
          cursor: pointer;
          text-align: left;
          color: black;
          &:hover {
            font-size: 16px;
            transition: 0.2s;
            background-color: #cdcdcd;
            color: #4e71f2;
          }
        }
      }
    }
    .baiduIco {
      height: 30px;
    }
    ::v-deep .search {
      width: 600px;
      height: 50px;
      border: 0;
      box-shadow: 0 0 10px 3px #0000001a;
      backdrop-filter: blur(8px);
      background-color: rgba(var(--alpha-bg), 0.7);
      &:hover {
        border-color: red;
      }
      .el-input__inner {
        border-left: none;
        padding: 0;
        // border-radius: 0 18px 18px 0;
        height: 50px;
      }
      .el-input__inner:focus {
        border-top: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
        border-color: #dcdfe6;
      }
      .el-input-group__prepend {
        width: 23px;
        // border-radius: 23px 0 0 23px;
        border-right: none;
        background-color: #fff;
      }
      .el-input-group__append {
        border-radius: 0 20px 20px 0;
        background-color: #fff;
        border-left: none;
      }
    }
  }
}
</style>
