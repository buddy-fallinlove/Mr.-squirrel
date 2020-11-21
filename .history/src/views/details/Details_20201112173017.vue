<template>
<div class="container-detail">
    <!--返回-->
    <div class="back" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
    </div>
    <!--轮播图-->
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {};
    },
    methods: {
        getgood() {
            this.$api
                .goodOne(this.$route.query.id, this.page)
                .then((res) => {
                    if (res.code === 200) {
                        console.log(res);

                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getgood()
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.container-detail {
    width: 375px;
    background: white;
    position: relative;
}

.back {
    position: fixed;
    left: 5px;
    top: 5px;
    z-index: 10;

    .van-icon-arrow-left {
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: rgb(182, 182, 182);
        background: rgba($color: #cecece, $alpha: 0.5);
    }
}

.title {
    font-size: 16px;
}

.desc {
    height: 80vh;
    padding: 10px 5px;
    text-align: center;
}

.wrapper {
    overflow: hidden;
    height: 80px;
}
</style>
