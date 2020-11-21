<template>
<div>
    <div class="container">
        <div class="van-ellipsis">获取中...</div>
    </div>
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

    }
}
</script>

<style lang="scss" scoped>
.container {
    position: fixed;
    z-index: 9999;
    display: flex;
    width: 100%;
    height: 6vh;
    padding: 1vh 0;
    background: #f2f2f2;
}

.city {
    div {
        width: 100%;
        text-align: center;
    }

    width: 65px;
    display: flex;
    font-size: 14px;
    line-height: 6vh;
    height: 6vh;
    margin-left: 10px;
    position: relative;

    .van-icon {
        position: absolute;
        right: -10px;
        line-height: 6vh;
    }
}

.search {
    width: 300px;
    height: 4vh;
    margin-top: 1vh;
}

.box {
    margin-top: 7vh;
    padding-top: 10px;
    position: fixed;
    width: 100%;
    height: 93vh;
    background: white;
    z-index: 103;
}

.fade-enter,
.fade-leave-to {
    transform: translateX(375px);
}

.fade-leave,
.fade-enter-to {
    transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
</style>
