<template>
<div class="container">
    <global-top>
        <div slot="back">
            <van-icon name="arrow-left" @click="$parent.flag=false" />
        </div>
        <div slot="title">个人资料</div>
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
            flag: false
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
