<template>
<div class="wwe">
    <global-top>
        <div slot="back"></div>
        <div slot="title">商品分类</div>
    </global-top>
    <div class="main">
        <!-- 左侧导航栏 -->
        <van-sidebar class="sidebar" v-model="mallCategoryId">
            <van-sidebar-item v-for="item in category" :key="item.id" :title="item.mallCategoryName" />
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
            dataid: ""
        };
    },
    methods: {
        getData() {
            this.$api
                .getRecommend()
                .then((res) => {
                    if (res.code == 200) {
                        this.category = res.data.category;
                        console.log(res);
                    }
                })
                .catch((err) => {
                    console.log(err);
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

<style scoped lang='scss'>
</style>
