<template>
<div>

</div>
</template>

<script>
export default {
    name: "",
    props: {
        item: {
            type: Object,
            default: () => {},
        },
    },
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
/deep/ .van-goods-action {
    height: 10vh;
    z-index: 1;
    border-top: .1px solid rgb(235, 235, 235);
}

.van-popup {
    overflow: initial;
}

.goodsinfo {
    display: flex;
    position: relative;
    padding: 0 20px 20px;
    border-bottom: 1px solid rgb(241, 241, 241);

    .image {
        border: 1px solid rgb(241, 241, 241);
        margin-top: -10px;
    }

    img {
        width: 80px;
    }

    .desc {
        font-size: 14px;
        margin: 20px 10px;

        .price {
            margin-top: 10px;
            color: red;
        }
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
    }
}

.shopinfo {
    font-size: 14px;
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(241, 241, 241);

    .title {
        margin: 10px 20px;
    }

    .amount {
        font-size: 12px;
        margin-top: 10px;

        :nth-child(1) {
            color: lightgray;
        }

        :nth-child(2) {
            margin-left: 10px;
            color: red;
        }
    }

    .stepper {
        margin: 20px 40px;
    }
}

.btn {
    font-size: 16px;
    margin-top: 20px;
    background: rgb(238, 72, 72);
    height: 30px;
    padding-top: 14px;
    text-align: center;
    color: white;
}
</style>
