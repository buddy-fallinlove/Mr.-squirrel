<template>
<div class="container">
    <img :src="item.image" alt @click="$goto(item.goodsId)" />
    <div class="van-ellipsis">{{item.goodsName}}</div>
    <div class="price">
        ￥{{item.mallPrice}}
        <span class="oldprice">￥{{item.price}}</span>
    </div>
    <div class="bttom-group">
        <van-icon name="shopping-cart" @click.prevent="$addShop(item.goodsId)" />
        <div class="desc" @click.prevent="$goto(item.goodsId)">查看详情</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    components: {},
    methods: {},
    mounted() {},
    watch: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
.container {
    width: 125px;
    height: 300px;
    font-size: 14px;

    img {
        width: 80%;
        margin: 5% 10%;
    }

    .van-ellipsis {
        padding: 0 5px;
        margin-bottom: 8px;
    }

    .price {
        padding: 0 5px;
        color: red;
    }

    .oldprice {
        font-size: 12px;
        color: gray;
        text-decoration: line-through;
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
}
</style>
