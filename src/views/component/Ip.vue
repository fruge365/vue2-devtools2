<template>
  <div class="ip">
    {{ city }} {{ area }}&ensp;
    <i
      class="el-icon-refresh"
      @click="getIPCity"
      title="重新查询"
      v-show="!show"
    ></i>
    <i class="el-icon-loading" v-show="show"></i>
    <br />
    <br />
    天气：{{ this.tianqi.wea }}
    <br />
    温度：{{ this.tianqi.tem }}
    <br />
    白天温度：{{ this.tianqi.tem_day }}
    <br />
    晚上温度：{{ this.tianqi.tem_night }}
    <br />
    湿度：{{ this.tianqi.humidity }}
    <br />
    空气质量：{{ this.tianqi.air }}
    <br />
    压力：{{ this.tianqi.pressure }}

    <br />
    风向：{{ this.tianqi.win }}
    <br />
    风速：{{ this.tianqi.win_meter }}
    <br />
    风级：{{ this.tianqi.win_speed }}
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
    };
  },
  methods: {
    // 查询天气
    Tianqi(city) {
      Tianqi(city).then((res) => {
        // console.log(res.data, "天气");
        this.tianqi = res.data;
        this.show = false;
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
            let city = res.result.ad_info.city.slice(
              0,
              res.result.ad_info.city.length - 1
            );
            this.Tianqi(city);
          }
          this.city = res.result.ad_info.city;
          this.area = res.result.ad_info.district;

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
