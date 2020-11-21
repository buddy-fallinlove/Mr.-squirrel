<template>
  <div>
    <global-top>
      <div slot="title">订单结算</div>
    </global-top>
    <div class="wrapper">
      <div v-if="checkList.length > 0">
        <van-card
          v-for="item in checkList"
          :key="item.id"
          :num="item.count"
          :price="item.present_price"
          :title="item.name"
          :thumb="item.image_path"
        />
      </div>
    </div>
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
    return {
      items: [],
      list: [],
    };
  },
  methods: {
    onSubmit() {
      if (!this.defaultAddress.name) {
        this.$toast("无收货地址，无法购买");
        return;
      }
      let obj={
                 // 收货地址province city county addressDetail
        address: `${this.defaultAddress.province}
        ${this.defaultAddress.city}
        ${this.defaultAddress.county}
        ${this.defaultAddress.addressDetail}`,
        // 电话
        tel: this.defaultAddress.tel,
        // 所有商品的id
        orderId: this.ids,
        // 商品数量
        count: this.count
      }
           //如果时立即购买，则传入以下值
      if (JSON.parse(this.$route.query.PayMent)[0].idDirect) {
        obj.idDirect = true;
      }
      console.log(obj);
      this.$api.placeOrder(obj).then(res => {
        if (res.code === 200) {
          this.$toast(res.msg);
          this.$router.push("/");
        }
      });
    },
        getdata() {
      if (!this.$store.state.shippingAddress.name) {
        this.$api.getDefaultAddress().then(res => {
          if (res.defaultAdd) {
            this.$store.state.shippingAddress = res.defaultAdd;
          }
        });
      }
    }
  },
  mounted() {
          this.getdata();
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
      this.checkList.map((item) => {
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
      JSON.parse(this.$route.query.PayMent).map((item) => {
        arr.push(item.cid);
      });
      return arr;
    },
    defaultAddress() {
      return this.$store.state.shippingAddress;
    },
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
