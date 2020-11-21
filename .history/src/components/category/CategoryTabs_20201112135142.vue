<template>
<div>
    <!-- 顶部 -->
    <van-tabs v-model="$parent.dataid" @change="getDetail">
        <van-tab v-for="item in category" :key="item.id" :title="item.mallSubName" :name="item.mallSubId"></van-tab>
    </van-tabs>
    <div class="main">
        <div class="wrapper" :loaded="loaded">
            <category-box v-for="desc in dataList" :key="desc.id" :item="desc" />
        </div>
    </div>
</div>
</template>

<script>
import CategoryBox from './CategoryBox'
export default {
    name: "",
    props: {
        category: {
            type: Array,
            default: () => [],
        },
        dataid: {
            type: String,
            default: "",
        },
    },

    components: {
        CategoryBox
    },
    data() {
        return {
            dataList: [],
            loaded: false
        };
    },
    methods: {
        getDetail(name, title) {
            this.loaded = false;
            this.$api
                .category(name)
                .then((res) => {
                    if (res.code === 200) {
                        this.loaded = true;
                        this.dataList = res.dataList;
                        console.log(res);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {

    },
    watch: {
        //监听dataid的变化进行异步获取
        dataid(val) {
            this.getDetail(val, "");
        }
    },
    computed: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100%;
    overflow: hidden;
    margin-bottom: 50px;
}
</style>
