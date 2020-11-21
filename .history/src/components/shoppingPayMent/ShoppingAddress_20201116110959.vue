<template>
  <div class="container-add">
    <div class="adress-box" v-if="!defaultAddress.name">
      <div class="add" @click="$goto('/address')">点击添加收货地址</div>
    </div>
    <div v-else>
      <div class="adress-box">
        <div class="logo">
          <van-icon name="location-o" />
        </div>
        <div class="detail">
          <div class="userinfo">
            <div>收货人:{{ defaultAddress.name }}</div>
            <div>{{ defaultAddress.tel }}</div>
          </div>
          <div class="address van-ellipsis">
            收货地址:{{ defaultAddress.city }}{{ defaultAddress.county
            }}{{ defaultAddress.addressDetail }}
          </div>
        </div>
                <div @click="$goto('/address')" class="address-edit">
          <van-icon name="arrow" />
        </div>
      </div>
        <div class="msg">(收货不便时，可选择免费待收货服务)</div>
    </div>
        <div class="Splitter"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    defaultAddress: {
      type: Object,
      default: () => {},
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // console.log(this.defaultAddress);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.container-add {
  height: 15vh;
}
.adress-box {
  display: flex;
  height: 80px;
  position: relative;
  .add {
    margin: 30px auto 0;
    text-decoration: underline;
    cursor: pointer;
  }
  .logo {
    margin-top: 30px;
    margin-left: 10px;
    font-size: 30px;
  }
  .detail {
    margin: 10px 5px;
    width: 280px;
    .userinfo {
      display: flex;
      justify-content: space-between;
    }
    .address {
      margin-top: 20px;
      font-size: 14px;
      line-height: 14px;
    }
  }
}
.msg {
  margin-left: 40px;
  margin-bottom: 2px;
  font-size: 12px;
  color: orange;
}
.address-edit {
  position: absolute;
  right: 10px;
  top: 50%;
}
.Splitter {
  background: url("../../assets/caitiao.jpg");
  width: 100%;
  height: 5px;
}
</style>