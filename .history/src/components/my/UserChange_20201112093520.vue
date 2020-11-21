<template>
<div class="container">
    <global-top>
        <div slot="back">
            <van-icon name="arrow-left" @click="$parent.flag = false" />
        </div>
        <div slot="title">个人资料</div>
    </global-top>
    <van-list>
        <van-cell>github</van-cell>
        <van-cell>
            <div class="avatar">
                <span class="avatar-title">头像</span>
                <div>
                    <img :src="userInfo.avatar" alt="" />
                </div>
            </div>
        </van-cell>
        <van-cell>
            <div>
                用户名
                <input disabled style="color: gray" type="text" :value="userInfo.username" />
            </div>
        </van-cell>
        <van-cell>
            <div>
                昵称
                <input type="text" v-model="userInfo.nickname" placeholder="请输入昵称" />
            </div>
        </van-cell>
        <van-cell>
            <div>
                性别
                <div class="gender">
                    <van-radio-group v-model="userInfo.gender">
                        <van-radio name="男">男</van-radio>
                        <van-radio name="女">女</van-radio>
                        <van-radio name="保密">保密</van-radio>
                    </van-radio-group>
                </div>
            </div>
        </van-cell>
        <van-cell>
            <div>
                邮箱
                <input type="text" v-model="userInfo.email" placeholder="请输入邮箱" />
            </div>
        </van-cell>
        <van-cell>
            <div>出生年月</div>
            <div class="date" @click="flag = true">
                {{ userInfo.year }}年{{ userInfo.month }}月{{ userInfo.day }}日
            </div>
        </van-cell>
    </van-list>
    <div class="datetime-picker">
        <van-datetime-picker v-show="flag" :min-date="minDate" :max-date="maxDate" v-model="currentDate" @cancel="cancel" @confirm="confirm" type="date" />
    </div>
    <div class="btn-group">
        <van-button class="btn" type="primary">保存</van-button>
        <van-button class="btn" type="default" @click="$parent.flag = false">取消</van-button>
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
            flag: false,
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(),
            currentDate: "",
            userInfo: {
                email: "",
            },
        };
    },
    methods: {
        getuser() {
            this.$api
                .user()
                .then((res) => {
                    // console.log(res.userInfo);
                    this.userInfo = res.userInfo;
                    this.currentDate = new Date(
                        this.userInfo.year,
                        this.userInfo.month - 1,
                        this.userInfo.day
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        confirm(val) {
            // console.log(val);
            this.userInfo.year = this.$dayjs(val).format("YYYY");
            this.userInfo.month = this.$dayjs(val).format("MM");
            this.userInfo.day = this.$dayjs(val).format("DD");
            this.flag = false;
        },
        cancel() {
            this.flag = false;
        },
    },
    mounted() {
        this.getuser();
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.container {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 999;
}

.gender {
    display: inline-block;
}

/deep/ .van-radio-group {
    display: flex;
}

/deep/ .van-cell__value {
    padding: 0;
    display: flex;
    position: relative;
}

.avatar {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .avatar-title {
        line-height: 50px;
    }

    img {
        height: 50px;
        border-radius: 50%;
    }
}

input,
.date,
.gender {
    position: absolute;
    left: 60px;
    margin-left: 20px;
    background: none;
    outline: none;
    border: none;
}

.datetime-picker {
    border: none;
    z-index: 99;
    width: 100%;
    position: absolute;
    bottom: 8vh;
    overflow: hidden;
}

.btn-group {
    text-align: center;

    .btn {
        width: 80%;
        margin: 10px;
    }
}
</style>
