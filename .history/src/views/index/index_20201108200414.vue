<template>
<div class="container-index">
    <!--搜索-->
    <index-top />
    <!--商品推荐-->
    <div class="contAll" ref="wrapper">
        <!--这是父盒子-->
        <div class="cont">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
//搜索
import indexTop from '@/components/index/IndexTop'
export default {
    name: '',
    props: {},
    components: {
        indexTop
    },
    data() {
        return {

        }
    },
    methods: {
        getData() {
            this.$api.getRecommend().then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },

    },
    mounted() {
        this.getData()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.container-index {
    width: 100%;
    height: 100%;
}
</style>
