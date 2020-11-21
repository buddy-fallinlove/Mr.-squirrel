<template>
<div class="container-guest">
    <img src="../../assets/93f744d885b03b0e29ec10f221565a8a.gif" alt width="100px" height="300px" />
    <div class="desc">登录后才能查看订单</div>
    <van-button type="primary" class="btn" @click="$goto('/login')">请先登录</van-button>
</div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {},
    components: {},
    methods: {},
    mounted() {},
    watch: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
.container-guest {
    text-align: center;
    background: white;

    .desc {
        font-size: 20px;
    }

    .btn {
        margin: 10px;
    }
}

img {
    width: 100%;
}
</style>
