<template>
  <div class="container-each" @click="item.cid?$goto(item.cid):$goto(item.id)">
    <div class="image">
      <img :src="item.image_path" alt />
    </div>
    <div class="name van-ellipsis">{{item.name}}</div>
    <div class="btn">
      <div class="noComment" v-if="isComment===false" @click.stop="tobes">评价晒图</div>
      <div class="isComment" v-else @click.stop="dones">查看评价</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    _id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    tobes() {
      this.$router.push({ name: "rate", query: { id: this.item.cid } });
    },
    dones() {
      this.$router.push({ name: "aevaluated", query: { id: this._id } });
    }
  },
  mounted() {},
  watch: {},
  computed: {
    isComment() {
      return this.item.isComment;
    }
  }
};
</script>

<style scoped lang='scss'>
.container-each {
  margin: 0 15px;
  padding-top: 10px;
  border-bottom: 0.5px solid rgb(218, 216, 216);
  display: flex;
  position: relative;
  .image {
    width: 100px;
    img {
      width: 100px;
    }
  }
  .name {
    margin: 10px 5px;
    font-size: 14px;
  }
  .btn {
    position: absolute;
    right: 0;
    bottom: 10px;
    font-size: 14px;
    div {
      padding: 5px;
      border-radius: 12px;
    }
    .noComment {
      border: 1px solid red;
      color: red;
    }
    .isComment {
      border: 1px solid gray;
      color: gray;
    }
  }
}
</style>