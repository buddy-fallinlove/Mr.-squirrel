<template>
<div class="wwe">
    <global-top>
        <div slot="back"></div>
        <div slot="title">商品分类</div>
    </global-top>
    <div class="main">
        <!-- 左侧导航栏 -->
        <van-sidebar class="sidebar" v-model="mallCategoryId">
            <van-sidebar-item v-for="item in category" :key="item.id" @click="change(item)" :title="item.mallCategoryName" />
        </van-sidebar>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            mallCategoryId: 0,
            category: [],
            data: [],
            dataid: "",
        };
    },
    methods: {
        getData() {
            this.$api
                .getRecommend()
                .then((res) => {
                    if (res.code == 200) {
                        this.category = res.data.category;
                        //根据mallCategoryId来加载二级分类的列表和id
                        this.data = res.data.category[this.mallCategoryId].bxMallSubDto;
                        this.dataid =
                            res.data.category[this.mallCategoryId].bxMallSubDto[0].mallSubId;
                        this.actived =
                            res.data.category[this.mallCategoryId].bxMallSubDto[0].mallSubId;
                        console.log(res);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        change(item) {
            this.mallCategoryId = item.mallCategoryId;
        },
        getId() {
            if (this.$route.params.mallCategoryId) {
                this.mallCategoryId = this.$route.params.mallCategoryId;
            }
            this.getData();
        }
    },
    mounted() {
        this.getId()
    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
