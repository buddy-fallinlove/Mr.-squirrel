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
    </div>

    <img v-if="nickname==='guest'" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4187538616,1757466218&fm=26&gp=0.jpg" alt="">
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
