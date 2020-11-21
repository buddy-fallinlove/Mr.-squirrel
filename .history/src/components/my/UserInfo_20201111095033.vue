<template>
<div>
    <global-top>
        <div slot="back"></div>
        <div slot="title">会员中心</div>
    </global-top>
    <div class="user-top">
        <div></div>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.user {
    font-size: 16px;
}

.user-top {
    width: 100%;
    height: 200px;
    background: #bb64e4;
    text-align: center;
    color: white;
    position: relative;

    .setting {
        position: absolute;
        top: 12px;
        right: 12px;
        font-size: 24px;
    }

    div {
        padding: 8px;
    }

    .icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
}

.control {
    height: 80px;

    /deep/ .van-icon {
        font-size: 28px;
    }

    /deep/.van-tabbar-item__text {
        font-size: 14px;
    }
}

.interval {
    margin-top: 15px;
}

.contorl-title {
    display: flex;
    padding: 15px;
    background: white;
    border: 0.1px solid rgb(243, 243, 243);
    position: relative;

    :nth-child(2) {
        padding-left: 5px;
    }

    :nth-last-child(1) {
        position: absolute;
        right: 5px;
    }

    div {
        font-size: 14px;
        color: rgb(94, 94, 94);
    }
}

.van-icon {
    font-size: 16px;
}

.end {
    margin-bottom: 8vh;
}
</style>
