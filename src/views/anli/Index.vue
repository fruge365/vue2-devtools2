<template>
  <div class="anli">
    <div>
      <span class="title">动画案例</span>
      <ul>
        <li><router-link to="/test-clock-container">翻页时钟</router-link></li>
        <li><router-link to="/clock">简单模拟时钟</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.anli {
  margin: 0 15px;
  div {
    width: 200px;
    .title {
      font-size: 24px;
    }
    ul {
      text-align: left;
      li {
        list-style: circle;
        a {
          color: rgba(23, 23, 193, 0.759);
        }
      }
    }
  }
}
</style>
