<template>
<div>
    <div class="name">商品推荐</div>
    <div class="contAll" ref="wrapper">
        <div class="cont">
            <div class="cont-item" v-for="(item,index) in recommend" :key="index" @click="$goto(item.goodsId)">
                <div>
                    <img class="img" :src="item.image" alt />
                    <!-- 推荐商品图片 -->
                </div>
                <div class="cont-name">{{item.goodsName}}</div>
                <!-- 推荐商品名称 -->
                <div class="priceAll">
                    <div>￥{{item.mallPrice}}</div>
                    <div class="price">￥{{item.price}}</div>
                    <!-- 推荐商品价格 -->
                </div>
                <div class="bttom-group">
                    <van-icon name="shopping-cart" />
                    <div class="desc" @click="$goto(item.goodsId)">查看详情</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll"; //滑动效果插件
export default {
    name: '',
    props: {
        recommend: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        new BScroll(this.$refs.wrapper, {
            scrollX: true //左右滑动
            // click: true //点击为true才能滑动,关闭避免触发两次点击事件
        });
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.name {
    width: 100%;
    height: 25px;
    padding: 10px;
}

.cont {
    // white-space: nowrap;
    display: flex;
    flex: 1;
}

.contAll {
    display: flex;
    overflow: hidden;
    height: 230px;
}

.cont-item {
    display: inline-block;
    border: 0.5px solid rgb(238, 238, 238);
    width: 124px;
}

.cont-name {
    width: 120px;
    font-size: 14px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 10px;
}

.img {
    width: 122px;
    height: 125px;
}

.priceAll {
    display: flex;
    padding: 10px;
}

.price {
    text-decoration: line-through;
    color: rgb(255, 0, 0);
    font-size: 13px;
    margin-left: 13px;
}

.bttom-group {
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;

    .van-icon-shopping-cart {
        padding: 5px;
        color: white;
        background: orange;
        border-radius: 5px 0 0 5px;
    }

    .desc {
        line-height: 14px;
        height: 16px;
        width: 100%;
        padding: 5px;
        background: red;
        color: white;
        text-align: center;
        font-size: 12px;
        border-radius: 0 5px 5px 0;
    }
}
</style>
