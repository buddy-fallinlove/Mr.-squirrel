<template>
  <div>
    <div class="header">
      <img :src="item.comment_avatar?item.comment_avatar:item.user[0].avatar" alt />
      <div>
        <div>{{item.comment_nickname?item.comment_nickname:item.user[0].nickname}}</div>
        <div>
          <van-rate :size="10" class="rate" v-model="item.rate"  readonly />
        </div>
      </div>
      <div class="date">时间{{item.comment_time}}</div>
    </div>
    <div class="content">内容：{{item.content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  font-size: 14px;
  position: relative;
  margin-bottom: 10px;
  text-align: left;
  img {
    width: 20px;
    height: 20px;
    padding: 10px;
  }
  .date {
    position: absolute;
    right: 0;
  }
}
.content {
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
  width: 280px;
  font-size: 16px;
  margin-left: 40px;
  margin-bottom: 10px;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid rgb(223, 223, 223);
}
.rate{
  height: 16px;
}
</style>