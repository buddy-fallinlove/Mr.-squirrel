<template>
<div></div>
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
.container-login {
    background: url('../../assets/u=1415706250,2142264197&fm=26&gp=0.jpg');
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.back {
    position: fixed;
    left: 5px;
    top: 5px;
    z-index: 10;

    .van-icon-arrow-left {
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: rgb(182, 182, 182);
        background: rgba($color: #cecece, $alpha: 0.5);
    }
}

.box {
    margin: 16vh auto;
    padding: 12px;
    width: 330px;
    height: 78vh;
    background: rgba($color: #87d0f1, $alpha: 0.5);
}

.title {
    font-size: 24px;
    padding-bottom: 2vh;
}

.van-field {
    margin-bottom: 3vh;
}

.codeMsg {
    width: 70px;
}

.btn-group {
    margin-top: 20px;
}

.login-btn {
    margin: 0 10px;
    width: 80px;
}

.codes {
    display: flex;
}

.code {
    width: 100px;
    height: 40px;
}
</style>
