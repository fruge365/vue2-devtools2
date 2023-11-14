<template>
  <div class="Clock">
    <div class="hour">
      <div class="hr" id="hr"></div>
    </div>
    <div class="minute">
      <div class="min" id="min"></div>
    </div>
    <div class="second">
      <div class="sec" id="sec"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var _hmt = _hmt || [];
    return {};
  },
  methods: {
    timeFun() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?a9430a37066911650e26adadcc42798a";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    },
  },
  created() {
    this.timeFun();
  },
  mounted() {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const min = document.querySelector("#min");
    const sec = document.querySelector("#sec");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      min.style.transform = `rotateZ(${mm}deg)`;
      sec.style.transform = `rotateZ(${ss}deg)`;
    });
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: hsl(113, 12%, 15%);
}
.Clock {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sa5ueuzzu2l7j8iv7bk8.jpg);
  background-size: cover;
  border: 6px solid #3ac7e0;
  border-radius: 20px;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);

  margin: 0 auto;
}
.Clock:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index: 10000;
}
.Clock .hour,
.Clock .minute,
.Clock .second {
  position: absolute;
}
.Clock .hour,
.hr {
  width: 160px;
  height: 160px;
}
.Clock .minute,
.min {
  width: 190px;
  height: 190px;
}
.Clock .second,
.sec {
  width: 230px;
  height: 230px;
}
.hr,
.min,
.sec {
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
}
.hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 80px;
  background: #ff10a3;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.min:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: rgb(26, 219, 245);
  z-index: 11;
  border-radius: 6px 6px 0 0;
}
.sec:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 150px;
  background: rgb(248, 233, 15);
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
</style>
