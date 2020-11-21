<template>
<div>
    <global-top>
        <div slot="title">我的收藏</div>
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
        getDefault() {
            this.$api.getDefault(1).then(res => {
                if (res.code === 200) {
                    this.Collections = res.data.list;
                }
            });
        }
    },
    mounted() {
        this.getDefault()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.msg {
    padding: 40px;
    text-align: center;
    background: white;
}

.wrapper {
    overflow: hidden;
    height: 94vh;
}

.van-icon {
    font-size: 16px;
}
</style>
