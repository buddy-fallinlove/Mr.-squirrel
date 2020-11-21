<template>
<div>
    <div class="name">商品推荐</div>
    <div class="contAll" ref="wrapper">
        <div class="cont">
            <div class="cont-item" v-for="(item,index) in recommend" :key="index">
                <img class="img" :src="item.image" alt="">
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
    color: #999;
    font-size: 15px;
    margin-left: 13px;
}

.btn {
    margin-left: 5%;
    width: 90%;
    height: 30px;
    display: flex;
}

.car {
    flex: 1;
    background: rgb(254, 202, 58);
    border-radius: 5px 0 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.see {
    flex: 3;
    background: rgb(255, 76, 56);
    border-radius: 0 5px 5px 0;
    font-size: 14px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
