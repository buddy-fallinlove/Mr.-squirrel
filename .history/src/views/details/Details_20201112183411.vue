<template>
<div class="container-detail">
    <!--返回-->
    <div class="back" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
    </div>
    <!--轮播图-->
    <detail-swipe :item="goodsOne" />
</div>
</template>

<script>
import detailSwipe from '../../components/details/DetailSwipe'
import detailOn from '../../components/details/DetailOn'
export default {
    name: "",
    props: {},
    components: {
        detailSwipe
    },
    data() {
        return {
            goodsOne: {},
            active: 0,
            flag: false,
            comment: [],
            page: 1,
            Uploaded: false,
            loadedAll: false
        };

    },
    beforeRouteLeave(to, from, next) {
        if (
            !this.$store.state.browseList.some(
                item => item.id === this.goodsOne.id
            ) &&
            this.$store.state.nickname !== "guest"
        )
            this.$store.state.browseList.unshift(this.goodsOne);
        localStorage.setItem(
            `${this.$store.state.nickname}_browse`,
            JSON.stringify(this.$store.state.browseList)
        );
        next();
    },
    methods: {
        getgood() {
            this.$api
                .goodOne(this.$route.query.id, this.page)
                .then((res) => {
                    if (res.code === 200) {
                        console.log(res);
                        this.goodsOne = res.goods.goodsOne;
                        this.comment.push(...res.goods.comment);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getgood();
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
