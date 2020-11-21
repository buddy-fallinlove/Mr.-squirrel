<template>
<div>
    <global-top>
        <div slot="title">我的收藏</div>
    </global-top>
    <div v-if="Collections.length > 0" class="wrapper">
        <goods-box v-for="item in Collections" :key="item.id" :item="item">
            <div slot="close">
                <van-icon @click="del(item)" name="delete" />
            </div>
        </goods-box>
    </div>
    <div v-else class="msg">暂无数据</div>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            arr: [],
        };
    },
    methods: {
        getDefault() {
            this.$api
                .getCollection(1)
                .then((res) => {
                    if (res.code === 200) {
                        this.getCollection = res.data.list;
                        console.log(this.getCollection);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getDefault();
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.msg {
    padding: 40px;
    text-align: center;
    background: white;
}

.wrapper {
    overflow: hidden;
    height: 94vh;
}

.van-icon {
    font-size: 16px;
}
</style>
