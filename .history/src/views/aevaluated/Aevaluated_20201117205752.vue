<template>
  <div class="container-aev">
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>
    <div class="header">
      <img :src="item.image" alt />
      <div>
        <van-rate v-model="item.rate" disabled disabled-color="#ffd21e" />
      </div>
      <div class="comment_time">{{item.comment_time}}</div>
    </div>
    <div class="content">
      <van-field v-model="item.content" rows="5" autosize readonly type="textarea" />
    </div>
    <div class="good-box" @click="$goto(item.goods[0].id)">
      <img :src="good.image_path" alt />
      <div class="good-name van-ellipsis">名称: {{good.name}}</div>
      <div @click.stop="$addShop(good.id)" class="shopping-cart">
        <van-icon name="shopping-cart" />
      </div>
    </div>
    <div class="btn-box">
      <van-button class="btn" type="primary" @click="goBack">返回</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {},
      good: {}
    };
  },
  props: {},
  components: {},
  methods: {
    goBack() {
      // this.$router.go(-1)
      this.$router.push({ name: "evaluate", query: { active: this.item.cid } });
    },
    getData() {
      this.$api.alreadyEvaluated().then(res => {
        this.item = res.data.list.filter(
          item => item._id === this.$route.query.id
        )[0];
        this.good = this.item.goods[0];
      });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container-aev {
  width: 100%;
}
.header {
  display: flex;
  margin: 20px;
  font-size: 14px;
  justify-content: space-between;
  .comment_time {
    line-height: 20px;
  }
}
.content {
  width: 375px;
  font-size: 14px;
}
.good-box {
  margin: 100px 20px;
  font-size: 14px;
  display: flex;
  position: relative;
  .good-name {
    width: 225px;
    line-height: 60px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .shopping-cart {
    position: absolute;
    width: 14px;
    height: 14px;
    text-align: center;
    padding: 10px;
    right: 15px;
    top: 13px;
    border-radius: 50%;
    background: rgb(241, 121, 121);
  }
}
.btn-box {
  margin-top: 20px;
  text-align: center;
}
.btn {
  width: 300px;
}
</style>