<template>
<div>
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="$toast('系统开发中，敬请期待')" />
        <van-goods-action-icon :info="Num" icon="cart-o" text="购物车" @click="$goto('/shoppingCart')" />
        <van-goods-action-button type="warning" text="加入购物车" @click="$addShop(item.id)" />
        <van-goods-action-button type="danger" text="立即购买" @click="show=true" />
    </van-goods-action>
    <van-popup v-model="show" position="bottom" :style="{ height: '230px' }">
        <div class="goodsinfo">
            <div class="image">
                <img :src="item.image_path" alt />
            </div>
            <div class="desc">
                <div>{{item.name}}</div>
                <div class="price">{{item.present_price}}</div>
            </div>
            <div class="close" @click="show=false">
                <van-icon name="close" />
            </div>
        </div>
        <div class="shopinfo">
            <div class="title">
                <div>购买数量:</div>
                <div class="amount">
                    <span>剩余{{item.amount}}件</span>
                    <span>每人限购50件</span>
                </div>
            </div>

            <div class="stepper">
                <van-stepper v-model="value" disable-input />
            </div>
        </div>
        <div class="btn" @click="onSubmit()">立即购买</div>
    </van-popup>
</div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            show: false,
            value: ""
        };
    },
    components: {},
    methods: {
        onSubmit() {
            console.log(this.item);
            let obj = {
                cid: this.item.id,
                count: this.value,
                present_price: this.item.present_price,
                image_path: this.item.image_path,
                name: this.item.name,
                idDirect: true
            };
            this.$store.state.buyNow = obj;
            this.$router.push({
                name: "shoppingPayMent",
                query: {
                    PayMent: JSON.stringify([obj])
                }
            });
        }
    },
    mounted() {
        console.log(this.item);
    },
    watch: {},
    computed: {
        Num() {
            return this.$store.getters.getnum;
        }
    }
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
