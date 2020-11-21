<template>
<div class="usershop">
    <div class="container-shop"></div>
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
            checked: false
        }
    },
    methods: {
        //获取全部数据
        getCardData() {
            this.$api.getCard().then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
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
.container-shop {
    position: relative;
    height: 13vh;
    padding: 1vh 0;
    font-size: 14px;
    border-top: 0.1px solid rgb(243, 243, 243);
    border-bottom: 0.1px solid rgb(243, 243, 243);
}

.checkbox {
    margin: 5px 10px;
}

.total {
    width: 120px;
    position: absolute;
    right: 20px;
    top: 10px;

    div {
        padding-bottom: 5px;

        span {
            color: red;
            font-weight: 700;
        }
    }
}

.btn {
    float: right;
    margin-right: 10px;
    height: 30px;
    line-height: 30px;
}

.usershop {
    position: relative;
    overflow: hidden;
}

.user-top {
    position: fixed;
    width: 100%;
    background: white;
    z-index: 999;
}

.wrapper {
    overflow: hidden;
    height: 72vh;
}

.goodsbox {
    position: relative;
    width: 375px;
    height: 100px;
    display: flex;
    border: 0.1px solid rgb(243, 243, 243);

    .checkbox {
        padding: 10px;
        margin-top: 30px;
    }

    img {
        margin: 10px 0;
        width: 80px;
        border: 1px solid rgb(209, 209, 209);
    }

    .desc {
        width: 100%;
        color: red;
    }

    .title {
        width: 200px;
        font-size: 14px;
        margin: 10px;
    }

    .price {
        font-size: 14px;
        margin: 40px 10px;
    }

    .stepper {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}

.msg {
    text-align: center;
    padding: 10px;

    .image {
        margin: 20px auto;
        background: rgb(235, 235, 235);
        padding: 30px;
        width: 100px;
        height: 100px;
        border-radius: 50%;

        img {
            width: 100px;
            height: 100px;
        }
    }

    .detail {
        margin: 40px;
        font-size: 20px;
        color: gray;
    }

    .goto {
        padding: 10px;
        color: gray;
        border-radius: 30px;
        font-size: 20px;
        width: 100px;
        margin: 0 auto;
        border: 1px solid rgb(0, 0, 0);
    }
}
</style>
