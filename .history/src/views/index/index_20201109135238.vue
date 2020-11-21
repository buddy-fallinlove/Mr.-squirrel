<template>
<div class="container-index">
    <!-- 顶部组件 -->
    <index-top />
    <div style="overflow: hidden">
        <div class="wrapper" @incident="getData" :pullDownloaded="pullDownloaded" :pullDown="true">
            <div>
                <!-- 轮播图组件 -->
                <index-slides :slidesData="Data.slides" class="slides" />
                <!-- 分类组件 -->
                <index-category :categoryData="Data.category" class="category" />
                <!-- AD -->
                <img :src="advertesPicture" alt class="advertesPicture" />
                <!-- 推荐 -->
                <index-recommend :recommend="recommend" />
                <!-- 商品楼 -->
                <index-floor :title="floorName.floor1" floor="1F" :data="Data.floor1" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
import indexTop from "../../components/index/IndexTop";
import indexSlides from "../../components/index/IndexSlides";
import indexCategory from "../../components/index/IndexCategory";
import indexRecommend from "../../components/index/IndexRecommend";
import indexFloor from "../../components/index/IndexFloor";
// import indexHotGoods from "../../components/index/IndexHotGoods";
export default {
    name: "index",
    data() {
        return {
            Data: {},
            recommend: [],
            advertesPicture: null,
            isLoading: false,
            floorName: {},
            pullDownloaded: false,
        };
    },
    props: {},
    components: {
        indexTop,
        indexSlides,
        indexCategory,
        indexRecommend,
        indexFloor,
    },
    methods: {
        getData() {
            this.pullDownloaded = false;
            this.$api.getRecommend().then((res) => {
                if ((res.code = 200)) {
                    console.log(res.data.recommend);
                    this.pullDownloaded = true;
                    this.Data = res.data;
                    this.recommend = res.data.recommend;
                    this.advertesPicture = res.data.advertesPicture.PICTURE_ADDRESS;
                    this.floorName = res.data.floorName;
                }
            });
        },
    },
    mounted() {
        this.getData();
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
