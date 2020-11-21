<template>
<div class="container-index">
    <!--搜索-->
    <index-top />
    <!--商品推荐-->

    <div>
        <index-slides></index-slides>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
//搜索
import indexTop from "@/components/index/IndexTop";
import indexSlides from "../../components/index/IndexSlides";
export default {
    name: "",
    props: {},
    components: {
        indexTop,
        indexSlides,
    },
    data() {
        return {
            Data: {}
        };
    },
    methods: {
        getData() {
            this.$api
                .getRecommend()
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getData();
        new BScroll(this.$refs.wrapper, {
            scrollX: true, //左右滑动
            // click: true //点击为true才能滑动,关闭避免触发两次点击事件
        });
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.container-index {
    width: 100%;
    height: 100%;
}
</style>
