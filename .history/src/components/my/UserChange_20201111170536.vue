<template>
<div>
    2
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
        getuser() {
            this.$api.user().then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getuser()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
