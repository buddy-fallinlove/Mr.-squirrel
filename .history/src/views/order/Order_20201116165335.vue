<template>
  <div class="container-order">
    <global-top>
      <div slot="back">
        <van-icon name="arrow-left" @click="$router.push('/my')" />
      </div>
      <div slot="title">我的订单</div>
    </global-top>
    <van-tabs v-model="active" @click="onClick">
      <van-tab name="0" title="全部">
        <div class="coming-soon">开发中，敬请期待</div>
      </van-tab>
      <van-tab name="1" title="待支付">
        <div class="coming-soon">开发中，敬请期待</div>
      </van-tab>
      <van-tab name="2" title="待发货">
        <div class="coming-soon">开发中，敬请期待</div>
      </van-tab>
      <van-tab name="3" title="待收货">
        <div class="coming-soon">开发中，敬请期待</div>
      </van-tab>
      <van-tab name="4" title="已完成"></van-tab>
      <div v-if="active==='4'" class="wrapper" :loaded="loaded">
        <div v-for="detail in list" :key="detail.id" class="box">
          <div class="box-top">
            <div class="order_id">订单编号:{{detail.order_id}}</div>
            <div class="icon">交易完成</div>
          </div>

          <van-card
            @click="$goto(item.cid)"
            v-for="item in detail.order_list"
            :key="item.id"
            :num="item.count"
            :price="item.present_price.toFixed(2)"
            :title="item.name"
            :thumb="item.image_path"
          />
          <div class="box-bottom">
            <div>创建时间：{{detail.add_time}}</div>
            <div>收获地址：{{detail.address}}</div>
            <div>共 {{detail.order_list |counts}} 件商品 合计：{{detail.mallPrice.toFixed(2)}}</div>
          </div>
        </div>
        <div class="coming-soon color" v-if="list.length<1">暂无数据</div>
      </div>
    </van-tabs>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      list: [],
      loaded: false
    };
  },
  props: {},
  components: {},
  methods: {
    onClick() {
      this.$router.push(`order?id=${this.active}`);
    },
    getMyOrder() {
      this.loaded = false;
      this.$api.getMyOrder().then(res => {
        console.log(res);
        if (res.code === 200) {
          this.loaded = true;
          this.list = res.list;
        }
      });
    }
  },
  mounted() {
    this.getMyOrder();
    this.active = this.$route.query.id;
  },
  filters: {
    counts(list) {
      let num = 0;
      list.map(item => {
        num += item.count;
      });
      return num;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container-order {
  background: rgb(236, 236, 236);
}
.coming-soon {
  background: white;
  font-size: 18px;
  text-align: center;
  padding: 30px 10px;
}
.color {
  background: rgb(236, 236, 236);
}
/deep/.van-tab {
  width: 15% !important;
}
/deep/.van-tabs__wrap {
  height: 6vh;
}
.nav {
  display: flex;
  div {
    width: 20%;
    padding: 15px 0;
    text-align: center;
    border-bottom: 1px solid rgb(221, 221, 221);
    background: white;
    color: gray;
  }
}
.actived {
  color: black !important;
}
/deep/.van-tab {
  padding: 0;
  width: 40px !important;
  flex-basis: 20% !important;
}
.box {
  margin: 10px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  .box-top {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  .order_id {
    font-size: 14px;
  }
  .icon {
    font-size: 14px;
  }
  .box-bottom {
    font-size: 14px;
    text-align: right;
    div {
      margin: 10px 0;
    }
  }
}
.wrapper {
  height: 88vh;
  overflow: hidden;
}
</style>