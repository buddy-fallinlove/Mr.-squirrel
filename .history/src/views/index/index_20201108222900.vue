<template>
<div class="container-index">
    <!--搜索-->
    <index-top />
    <!--父元素-->
    <div style="overflow: hidden">
        <!--子元素-->
        <div class="wrapper">
            <div>
                <!--轮播图-->
                <index-slides :slidesData="Data.slides" class="slides" />
                <!-- 分类组件 -->
                <index-category :categoryData="Data.category" class="category" />
                <!-- AD -->
                <img :src="advertesPicture" alt class="advertesPicture" />
                <!-- 推荐 -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import BScroll from "better-scroll";
//搜索
import indexTop from "@/components/index/IndexTop";
import indexSlides from "@/components/index/IndexSlides";
import indexCategory from "@/components/index/IndexCategory";
// import indexRecommend from "../../components/index/IndexRecommend";
export default {
    name: "",
    props: {},
    components: {
        indexTop,
        indexSlides,
        indexCategory,
        // indexRecommend,
    },
    data() {
        return {
            Data: {},
            advertesPicture: null,
            recommend: [],
        };
    },
    methods: {
        getData() {
            this.$api
                .getRecommend()
                .then((res) => {
                    console.log(res.data.recommend);
                    this.Data = res.data;
                    this.advertesPicture = res.data.advertesPicture.PICTURE_ADDRESS;
                    // this.recommend = res.data.recommend
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getData();
        // new BScroll(this.$refs.wrapper, {
        //     scrollX: true, //左右滑动
        //     // click: true //点击为true才能滑动,关闭避免触发两次点击事件
        // });
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.container-index {
    width: 100%;
    height: 100%;

    .slides {
        height: 166px;
        width: 100%;
        margin-top: 47px;
    }

    .category {
        height: 70px;
        width: 355px;
        margin: 0 10px;
        padding: 10px 0;
        background: white;
        border-radius: 10px;
    }

    .advertesPicture {
        height: 31px;
        margin: 10px 10px;
        width: 355px;
    }
}

.recommend {
    width: 100px;
    height: 280px;
}

.wrapper {
    margin-top: 10px;
    z-index: -1;
    height: 100%;
    overflow: hidden;
}
</style>
