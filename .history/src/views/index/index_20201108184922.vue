<template>
<div>

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
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
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

<style scoped lang='scss'>

</style>
