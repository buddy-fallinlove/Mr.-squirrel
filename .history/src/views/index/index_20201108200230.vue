<template>
<div class="container-index">
    <!--搜索-->
    <index-top />
    <!--商品推荐-->
    <div class="contAll" ref=""></div>
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
