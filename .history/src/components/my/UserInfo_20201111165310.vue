<template>
<div>
    <global-top>
        <div slot="back"></div>
        <div slot="title">会员中心</div>
    </global-top>
    <div class="user-top">
        <div>
            <van-icon v-if="nickname !== 'guest'" name="setting" class="setting" @click="$parent.flag = true" />
        </div>
        <div>
            <img v-if="nickname==='guest'" src="../../assets/icon.svg" alt class="icon" />
            <img v-else src="http://img4.imgtn.bdimg.com/it/u=198369807,133263955&fm=27&gp=0.jpg" alt class="icon" />
        </div>
        <div v-if="nickname==='guest'" @click="$goto('/login')">登录/注册</div>
        <div v-else class="user">
            <div>欢迎您, {{nickname}}</div>
            <div @click="outline">退出登录</div>
        </div>
    </div>
    <van-tabbar :fixed="false" active-color="#646566" class="control">
        <van-tabbar-item @click="$goto('/order')" icon="paid">待付款</van-tabbar-item>
        <van-tabbar-item @click="$goto('/order')" icon="send-gift-o">待发货</van-tabbar-item>
        <van-tabbar-item @click="$goto('/order')" icon="logistics">待收货</van-tabbar-item>
        <van-tabbar-item @click="$goto('/evaluate')" icon="records">评价</van-tabbar-item>
        <van-tabbar-item @click="$goto('/order')" icon="points">已完成</van-tabbar-item>
    </van-tabbar>
    <div class="contorl-title" @click="$goto('/order')">
        <van-icon name="cart-circle-o" />
        <div>全部订单</div>
        <div>
            <van-icon name="arrow" />
        </div>
    </div>
    <div class="contorl-title interval" @click="$goto('/collection')">
        <van-icon name="points" />
        <div>收藏商品</div>
        <div>
            <van-icon name="arrow" />
        </div>
    </div>
    <div class="contorl-title" @click="$goto('/address')">
        <van-icon name="aim" />
        <div>地址管理</div>
        <div>
            <van-icon name="arrow" />
        </div>
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
            userpic: "",
        };
    },
    methods: {
        outline() {
            this.$dialog
                .alert({
                    title: "您是否要退出本商场", //加上标题
                    message: "本系统将保留您的浏览记录",
                    showCancelButton: true,
                })
                .then(() => {
                    this.$api
                        .loginOut()
                        .then((res) => {
                            if (res.code === 0) {
                                this.$store.state.nickname = "guest";
                                localStorage.removeItem("nickname");
                                this.$store.state.history = [];
                                this.$toast("退出成功");
                                this.$router.go(0);
                                console.log(res.data);
                            } else {
                                this.$toast(res.msg);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch(() => {
                    console.log(err);
                });
        },
        tobeEvaluated() {
            this.$store.state.cancelLoad = true;
            this.$api.tobeEvaluated().then((res) => {
                if (res.code === 200) {
                    this.$store.state.cancelLoad = false;
                    this.$store.state.tobeEvaluated = res.data.list;
                }
            });
        },
    },
    mounted() {
        this.tobeEvaluated();
    },
    watch: {},
    computed: {
        nickname() {
            return this.$store.state.nickname;
        },
        tobe() {
            if (this.$store.state.tobeEvaluated.length > 0) {
                return this.$store.state.tobeEvaluated.length;
            } else return;
        },
    },
};
</script>

<style lang="scss" scoped>
.user {
    font-size: 16px;
}

.user-top {
    width: 100%;
    height: 200px;
    background: #e9ab27;
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
