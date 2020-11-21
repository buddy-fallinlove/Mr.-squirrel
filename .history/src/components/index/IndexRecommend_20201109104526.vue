<template>
<div class="container">
    <div class="title">推荐商品</div>
    <div class="wrapperX" :className="'.wrapperX'" :scrollX="true" :scrollY="false" :click="true">
        <div class="recommend-group">
            <recommend-box class="recommend-box" v-for="item in recommendData" :key="item.id" :item="item" />

        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import recommendBox from "../../components/index/RecommendBox";
export default {
    props: {
        recommendData: {
            type: Array,
            default: () => {}
        }
    },
    data() {
        return {};
    },
    components: {
        recommendBox
    },
    methods: {},
    mounted() {
        new BScroll(this.$refs.wrapper, {
            scrollX: true, //上下滑动
            // click: true //点击为true才能滑动
        });
    },
    watch: {},
    computed: {}
};
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

.wrapperX {
    background: white;
    width: 300px;
    height: 200px;
    overflow: hidden;
    // white-space: nowrap;
}
</style>
