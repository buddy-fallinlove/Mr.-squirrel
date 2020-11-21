<template>
<div class="wwe">
    <global-top>
        <div slot="back"></div>
        <div slot="title">商品分类</div>
    </global-top>
    <div class="main"></div>
    <!-- 左侧导航栏 -->
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        getData() {
            this.$api.getRecommend().then(res => {
                if (res.code == 200) {
                    console.log(res)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
