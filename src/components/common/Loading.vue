<template>
  <div>
    <div v-show="loading" class="container">
      <van-loading class="loading" size="24px">加载中...</van-loading>
      <!-- <div>
        <img src="../../assets/loading.gif" alt />
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //   background: white;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 100;
}
img {
  margin-top: 150px;
  width: 375px;
}
.loading {
  z-index: 105;
  position: absolute;
  top: 40%;
  left: 50%;
  height: 20px;
  width: 100px;
  margin-left: -50px;
}
</style>