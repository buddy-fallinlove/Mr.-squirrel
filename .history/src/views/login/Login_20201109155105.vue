import { types } from 'node-sass';
<template>
<div class="container-login">
    <div class="back">
        <van-icon name="arrow-left" />
    </div>
    <div class="box">
        <div class="title">登录 / 注册</div>
        <!--用户名-->
        <van-field v-model="nickname" clearable placeholder="用户名" />
        <!--密码-->
        <van-field v-model="password" type="password" placeholder="密码" />
        <!-- 手机号 -->
        <van-field v-model="phone" type="tel" label="手机号" placeholder="仅不知道密码需要" />
        <!-- 短信验证码 -->
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="仅不知道密码需要">
            <van-button class="codeMsg" slot="button" size="small" type="primary" @click="getcodeMsg" :disabled="flag">{{ codeMsg }}</van-button>
        </van-field>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            nickname: "",
            password: "",
            phone: "",
        };
    },
    methods: {},
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.container-login {
    background: url("../../assets/u=1415706250,2142264197&fm=26&gp=0.jpg");
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.back {
    position: fixed;
    left: 3.333vw;
    top: 3.333vw;
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
    background: rgba($color: #cda5f3, $alpha: 0.5);
}

.title {
    font-size: 24px;
    color: rgb(119, 178, 233);
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
