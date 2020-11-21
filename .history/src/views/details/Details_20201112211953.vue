<template>
<div class="container-detail">
    <!--返回-->
    <div class="back" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
    </div>
    <!--轮播图-->
    <detail-swipe :item="goodsOne" />
    <!-- 产品信息 -->
    <detail-on :item="goodsOne" />
    <!-- 详情和用户评论 -->
    <van-tabs v-model="active">
        <van-tab title="商品详情">
            <div v-html="goodsOne.detail"></div>
        </van-tab>
        <van-tab title="用户评论" class="desc">
            <div v-if="comment.length===0" class="title">暂无评论</div>
            <div v-else>
                <better-scroll class="wrapper" :pullUp="true" :Uploaded="Uploaded" :loadedAll="Uploaded" @pullingUp="loadmore">
                    <detail-comm v-for="item in comment" :key="item.id" :item="item" />
                </better-scroll>
            </div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
import detailSwipe from '../../components/details/DetailSwipe'
import detailOn from '../../components/details/DetailOn'
import detailComm from '../../components/details/DetailComm'
export default {
    name: "",
    props: {},
    components: {
        detailSwipe,
        detailOn,
        detailComm
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
        //加载更多时的数据
        loadmore() {
            this.Uploaded = false;
            this.$store.state.cancelLoad = true;
            this.$api.goodOne(this.$route.query.id, this.page + 1).then(res => {
                if (res.code === 200) {
                    if (res.goods.count > this.comment.length) {
                        this.comment.push(...res.goods.comment);
                        this.page++;
                    } else {
                        this.loadedAll = true;
                    }
                    this.$store.state.cancelLoad = false;
                    this.Uploaded = true;
                }
            });
        }
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
