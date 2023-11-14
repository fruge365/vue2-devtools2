<template>
  <div class="chatgpt">
    <div class="logo" @click="jumpFn">
      <img src="http://www.amoureux555.xyz/chatGPT.png" alt="" />
      <br />
      ChatGpt尝鲜
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jumpFn() {
      this.$router.push("/phind");
    },
  },
};
</script>
<style lang="scss" scoped>
.chatgpt {
  font-size: 14px;
  .btn {
    position: fixed;
    bottom: 50px;
    right: 50px;
  }
  .logo {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 90px;
    height: 60px;
    // background-color: red;
    transition: all 0.15s ease-out;
    -webkit-transition: all 0.15s ease-out;
    -moz-transition: all 0.15s ease-out;
    img {
      width: 30px;
      height:30px;
    }
  }

  .logo:hover {
    cursor: pointer;
    transform: scale(1.07) rotate(-10deg);
    -webkit-transform: scale(1.07) rotate(-10deg);
    -moz-transform: scale(1.07) rotate(-10deg);
  }
}
</style>
