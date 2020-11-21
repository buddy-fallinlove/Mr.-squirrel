<template>
  <div class="container-rate">
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>
    <div class="goodinfo">
      <div class="image">
        <img :src="tobeOne.image_path" alt />
      </div>
      <div class="star">
        <div class="star-title">商品评分</div>
        <div>
          <van-rate v-model="tobeOne.rate" />
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-field
        v-model="tobeOne.content"
        rows="5"
        autosize
        type="textarea"
        show-word-limit
        placeholder="请输入评价"
      />
      <van-uploader :after-read="afterRead" />
    </van-cell-group>
    <van-checkbox v-model="checked" class="check-box">匿名评价</van-checkbox>
    <div class="btn-box">
      <van-button class="btn" type="primary" @click="setComment()">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tobeOne: {},
      checked: false
    };
  },
  props: {},
  components: {},
  methods: {
    afterRead() {},
    evaluateOne() {
      this.$api.evaluateOne(this.$route.query.id).then(res => {
        console.log(res);
      });
    },
    setComment() {
      let obj = {};
      // comment  商品评论(id,rate,content, anonymous(是否匿名), _id, order_id, image=[])
      obj.id = this.tobeOne.cid;
      obj.rate = this.tobeOne.rate;
      obj.content = this.tobeOne.content;
      obj.anonymous = this.checked;
      obj._id = this.tobeOne._id;
      obj.order_id = this.tobeOne.order_id;
      obj.image = [];
      console.log(obj);
      this.$api.comment(obj).then(res => {
        if (res.code === 200) {
          this.$toast(res.msg);
          this.$router.push("/evaluate");
        } else {
          this.$toast(res.msg);
        }
      });
    },
    getgood() {
      this.$api.tobeEvaluated().then(res => {
        if (res.code === 200) {
          this.tobeOne = res.data.list.filter(
            item => item.cid === this.$route.query.id
          )[0];
          console.log(this.tobeOne);
        }
      });
    }

    // comment({ ...args }) {}
  },
  mounted() {
    this.getgood();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container-rate {
  overflow: hidden;
}
.goodinfo {
  display: flex;
  padding: 10px;
  .image {
    padding: 10px;
    img {
      width: 80px;
    }
  }
  .star {
    margin-left: 20px;
  }
  .star-title {
    margin: 20px 0;
    font-size: 16px;
  }
}
.textarea {
  width: 100%;
  height: 200px;
  background: rgb(236, 236, 236);
  border: none;
}
.check-box {
  font-size: 16px;
}
.btn-box {
  margin-top: 20px;
  text-align: center;
}
.btn {
  width: 300px;
}
</style>