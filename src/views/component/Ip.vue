<template>
  <div class="ip">
    {{ city }} {{ area }}&ensp;
    <i
      class="el-icon-refresh"
      @click="Tianqi('查询')"
      title="重新查询"
      v-show="!show"
    ></i>
    <i class="el-icon-loading" v-show="show"></i>
    <br />
    <br />
    <div class="gn" v-if="status == true">
      {{ tianqi.data.type || "" }} {{ tianqi.data.fengxiang || "" }}
      {{ tianqi.data.fengli || "" }} {{ tianqi.data.low || "" }}~{{
        tianqi.data.high || ""
      }}
      <div>
        <br />
        {{ tianqi.tip || "" }}
      </div>
    </div>
    <div class="gw" v-else>
      <el-tag type="warning"> {{ message }}</el-tag>
    </div>
  </div>
</template>

<script>
import { Tianqi } from "@/api/index";
export default {
  data() {
    return {
      Ip: "",
      city: "", // 市
      area: "", // 区
      show: false,
      tianqi: {},
      status: true,
      message: "",
    };
  },
  methods: {
    // 查询天气
    Tianqi(val) {
      Tianqi(this.Ip).then((res) => {
        if (!res.data.success) {
          this.status = false;
          this.message = res.data.message;
        } else {
          this.status = true;
          this.tianqi = res.data;
        }
        this.show = false;
        if (val) {
          this.$notify({
            title: "成功",
            message: "查询成功",
            type: "success",
          });
        }
      });
    },
    // 获取ip所在城市、区等信息
    getIPCity() {
      this.show = true;
      var data = {
        key: "KSPBZ-V5L33-5EM3D-35N5X-DIY66-CRF7J", //密钥
      };
      var url = "https://apis.map.qq.com/ws/location/v1/ip"; //腾讯地理位置信息接口
      data.output = "jsonp"; // 解决跨域问题
      this.$jsonp(url, data)
        .then((res) => {
          // console.log(res);
          // console.log("IP所在市", res.result.ad_info.city);
          // console.log("ip所属区", res.result.ad_info.district);
          if (res.result.ad_info.city.length == 3) {
            // let city = res.result.ad_info.city.slice(
            //   0,
            //   res.result.ad_info.city.length - 1
            // );
            // this.Tianqi(city);
          }
          this.city = res.result.ad_info.city;
          this.area = res.result.ad_info.district;

          console.log("🚀 ~ .then ~ res:", res);
          this.Ip = res.result.ip;
          this.Tianqi();
          return res;
        })
        .catch((error) => {
          console.log("未获取到地址", error);
        });
    },
  },
  mounted() {},
  created() {
    this.getIPCity();
  },
};
</script>

<style lang="scss" scoped>
.ip {
  // display: flex;
  // align-items: center;
  .el-icon-refresh {
    text-align: center;
    &:hover {
      cursor: pointer;
      color: #4285f4;
    }
  }
}
</style>
