<template>
<div>
    <div class="title">热销商品</div>
    <div class="hotgoodsbox">
        <div v-for="item in hotGoodsData" :key="item.id" class="detail">
            <div class="border">
                <img :src="item.image" alt="">
                <div class="van-ellipsis">{{item.name}}</div>
                <div class="price">￥{{item.price}}
                    <span class="oldprice">￥{{item.mallPrice}}</span>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {
        hotGoodsData: {
            type: Array,
            default: () => []
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

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.title {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    color: red;
    font-size: 16px;
}

.hotgoodsbox {
    display: flex;
    height: 2000px;
    flex-wrap: wrap;
}

.detail {
    width: 50%;
    height: 200px;
    background: white;

    .border {
        width: 100%;
        height: 100%;
        border: 0.1px solid #f3f3f3;
    }

    img {
        margin: 10px 15%;
        width: 70%;
    }

    .van-ellipsis {
        color: black;
        text-align: center;
        padding: 0 10px;
        font-size: 14px;
    }

    .price {
        color: red;
        text-align: center;
        font-size: 14px;
        margin: 8px 0;
        font-weight: 800;
    }

    .oldprice {
        color: gray;
        font-weight: initial;
        text-decoration: line-through;
    }
}
</style>
