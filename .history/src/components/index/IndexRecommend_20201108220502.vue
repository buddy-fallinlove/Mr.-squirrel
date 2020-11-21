<template>
<div class="container">
    <div class="title">推荐商品</div>
    <div ref="wrapper" class="contAll" :scrollX="true" :scrollY="false" :click="false">
        <div class="cont">
            <recommend-box class="recommend-box" v-for="item in recommendData" :key="item.id" :item="item" />
        </div>
    </div>
</div>
</template>

<script>
import recommendBox from "../../components/index/RecommendBox";
import BScroll from "better-scroll"; //滑动效果插件
export default {
    name: '',
    props: {},
    components: {
        recommendBox
    },
    data() {
        return {
            recommendData: {
                type: Array,
                default: () => {}
            }
        }
    },
    methods: {

    },
    mounted() {
        new BScroll(this.$refs.wrapper, {
            scrollX: true //左右滑动
            // click: true //点击为true才能滑动,关闭避免触发两次点击事件
        });
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 360px;

    .title {
        font-size: 16px;
        padding: 10px;
        background: white;
        border-bottom: 0.5px solid rgb(243, 243, 243);
    }
}

.recommend-group {
    width: 100%;
    height: 190px;
    display: inline-block;
}

.recommend-box {
    width: 125px;
    display: inline-block;
    border: 0.1px solid rgb(243, 243, 243);
}

.contAll {
    display: flex;
    overflow: hidden;
    height: 230px;
}

.cont {
    // white-space: nowrap;
    display: flex;
    flex: 1;
}
</style>
