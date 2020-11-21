<template>
<div class="container">
    <div class="title">推荐商品</div>
    <div ref="wrapper" class="contAll">
        <div class="cont">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll"; //滑动效果插件
export default {
    name: '',
    props: {},
    components: {

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
