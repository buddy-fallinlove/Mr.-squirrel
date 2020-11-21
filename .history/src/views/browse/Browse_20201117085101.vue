<template>
  <div>
    <global-top>
      <div slot="title">最近浏览</div>
    </global-top>
    <div class="wrapper" v-if="browseList.length>0">
          <goods-box v-for="item in browseList" :key="item.id" :item="item">
        <div slot="close">
          <van-icon @click="del(item)" name="delete" />
        </div>
      </goods-box>
    </div>
    <div v-else class="msg">暂无数据</div>
  </div>
</template>

<script>
import goodsBox from  '../../components/box/GoodsBox'
export default {
  name: "",
  props: {},
  components: {
      goodsBox
  },
  
  data() {
    return {};
  },
  methods: {},
  mounted() {
    if (localStorage.getItem(`${localStorage.getItem("nickname")}_browse`)) {
      this.$store.state.browseList = JSON.parse(
        localStorage.getItem(`${localStorage.getItem("nickname")}_browse`)
      );
    }
    this.$store.state.loading = false;
  },
  watch: {},
  computed: {
    browseList() {
      return this.$store.state.browseList;
    },
  },
};
</script>

<style scoped lang='scss'>
.msg {
  padding: 40px;
  text-align: center;
  background: white;
}
.btn {
  width: 100%;
  height: 100%;
}
.wrapper {
  overflow: hidden;
  height: 94vh;
}
</style>
