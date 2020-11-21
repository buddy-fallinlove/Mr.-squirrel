<template>
<div>
    <global-top>
        <div slot="back"></div>
        <div slot="title">购物车</div>
    </global-top>
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

    },
    mounted() {

    },
    watch: {

    },
    computed: {
        nickname() {
            return this.$store.state.nickname;
        }
    }
}
</script>

<style scoped lang='scss'>

</style>
