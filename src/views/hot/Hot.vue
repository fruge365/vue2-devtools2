<template>
  <!-- 热点排行 -->
  <div class="ranking">
    <BaiduHot />
    <WeiBoHot />
  </div>
</template>
<script>
import BaiduHot from "./BaiduHot.vue";
import WeiBoHot from "./WeiBoHot.vue";
export default {
  components: {
    BaiduHot,
    WeiBoHot
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.ranking {
}
</style>
