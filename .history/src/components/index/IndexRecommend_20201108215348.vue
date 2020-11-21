<template>
<div class="container">
    <div class="title">推荐商品</div>
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
            recommendData: {
                type: Array,
                default: () => {}
            }
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
.container {
    width: 360px;

    .title {
        font-size: 16px;
        padding: 10px;
        background: white;
        border-bottom: 0.5px solid rgb(243, 243, 243);
    }
}

.recommend-group {
    width: 100%;
    height: 190px;
    display: inline-block;
}

.recommend-box {
    width: 125px;
    display: inline-block;
    border: 0.1px solid rgb(243, 243, 243);
}

.wrapperX {
    background: white;
    width: 5000px;
    height: 200px;
    overflow: hidden;
    white-space: nowrap;
}
</style>
