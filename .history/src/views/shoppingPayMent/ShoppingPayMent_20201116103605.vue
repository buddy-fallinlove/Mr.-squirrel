<template>
  <div>
    <global-top>
      <div slot="title">订单结算</div>
    </global-top>
    <div></div>
  </div>
</template>

<script>
import shoppingAddress from "../../components/shoppingPayMent/ShoppingAddress";
export default {
  name: "",
  props: {}, 
  components: {
    shoppingAddress,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
          console.log(JSON.parse(this.$route.query.PayMent));
  },
  watch: {},
  computed: {
          // 购物车
    checkList() {
      return JSON.parse(this.$route.query.PayMent);
    },
    //计算总价
    sum() {
      let sum = 0;
      this.checkList.map(item => {
        sum += item.count * item.present_price;
      });
      return sum;
    },
    // 第一个商品的数量
    count() {
      return this.checkList[0].count;
    },
    //所有商品的id
    ids() {
      let arr = [];
      JSON.parse(this.$route.query.PayMent).map(item => {
        arr.push(item.cid);
      });
      return arr;
    },
    defaultAddress() {
      return this.$store.state.shippingAddress;
    }
  },
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden;
  height: 71vh;
}
.bottom-btn {
  height: 8vh;
}
</style>
