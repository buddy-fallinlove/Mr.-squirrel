<template>
<div class="usershop">
    <div class="container-shop" v-if="shopList.length>0">
        <div class="checkbox">
            <van-checkbox v-model="checked" @click="changeAll" checked-color="#07c160">{{checked?'取消全选':'全选'}}</van-checkbox>
        </div>
        <div class="total">
            <div>
                合计：
                <span>￥{{sum}}</span>
            </div>
            <div>请确认订单</div>
        </div>
        <van-divider :style="{ padding: '0 3px' }" />
        <div v-if="flag">
            <van-button class="btn" type="primary" @click="del()">删除</van-button>
            <van-button class="btn" type="primary" @click="gotoPayMent">结算</van-button>
        </div>
    </div>
    <div v-else class="msg">
        <div class="image">
            <img src="../../assets/shop.png" alt />
        </div>
        <div class="detail">您的购物车还是空的</div>
        <div class="goto" @click="$goto('/')">去购物</div>
    </div>
    <div v-if="shopList.length>0" class="wrapper">
        <div class="goodsbox" v-for="item in $store.state.shopList" :key="item.id">
            <div class="checkbox">
                <van-checkbox v-model="item.check" checked-color="#07c160" @change="change"></van-checkbox>
            </div>
            <div class="img" @click="$goto(item.cid)">
                <img :src="item.image_path" alt />
            </div>
            <div class="desc">
                <div class="title van-ellipsis" @click="$goto(item.cid)">{{item.name}}</div>
                <div class="price">￥{{item.mallPrice}}</div>
                <van-stepper class="stepper" v-model="item.count" @change="onChange(item)" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    },
    props: {},
    components: {},
    methods: {
        //删除按钮
        del() {
            this.$dialog
                .alert({
                    title: "提示框", //加上标题
                    message: "是否删除？", //改变弹出框的内容
                    showCancelButton: true //展示取水按钮
                })
                .then(() => {
                    let arr = [];
                    this.$store.state.shopList.map(item => {
                        if (item.check) {
                            arr.push(item.cid);
                        }
                    });
                    this.$api.deleteShop(arr).then(res => {
                        if (res.code === 200) {
                            this.$toast("删除完毕");
                            this.getCardData();
                        }
                    });
                })
                .catch(() => {
                    this.$toast("取消删除");
                });
        },
        //全选改变复选状态
        changeAll() {
            this.checked !== this.checked;
            this.$store.state.shopList.map(item => (item.check = this.checked));
        },
        //复选改变全选状态
        change() {
            this.checked = this.$store.state.shopList.every(item => item.check);
        },
        //获取数据
        getCardData() {
            this.$api.getCard().then(res => {
                if (res.code === 200) {
                    this.$store.state.shopList = res.shopList;
                    this.$store.dispatch("getShopList");
                }
            });
        },
        // 修改商品数量
        onChange(val) {
            this.$store.state.cancelLoad = true;
            this.$api.editCart(val.count, val.cid, val.mallPrice).then(res => {
                if (res.code === 200) {
                    this.$store.state.cancelLoad = false;
                    this.$store.dispatch("getShopList");
                }
            });
        },
        gotoPayMent() {
            let payList = this.$store.state.shopList.filter(item => item.check);
            this.$router.push({
                name: "shoppingPayMent",
                query: {
                    PayMent: JSON.stringify(payList)
                }
            });
        }
    },
    mounted() {
        this.getCardData();
    },
    watch: {},
    computed: {
        shopList() {
            if (this.$store.state.shopList) {
                return this.$store.state.shopList;
            }
        },
        sum() {
            return this.$store.getters.getSum;
        },
        flag() {
            if (this.$store.state.shopList.some(item => item.check)) {
                return true;
            } else return;
        }
    }
};
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
