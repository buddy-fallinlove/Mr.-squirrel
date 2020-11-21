<template>
<div class="container-detailOn">
    <div class="title">{{item.name}}</div>
    <div class="price">￥{{item.present_price}}</div>
    <div class="desc">
        <div>运费：0</div>
        <div>剩余：{{item.amount}}</div>
        <div @click="collection(item)">
            <div v-if="flag">
                点击收藏
                <span class="collection">
                    <van-icon name="like-o" />
                </span>
            </div>
            <div v-else>
                取消收藏
                <span class="collection">
                    <van-icon name="like" />
                </span>
            </div>
        </div>
    </div>
    <div class="store">
        <div @click="$toast('功能开发中，敬请期待')">
            <van-icon name="shop-o" />有赞的店
        </div>
        <div @click="$toast('功能开发中，敬请期待')">进入店铺</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            flag: null
        };
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    components: {},
    methods: {
        //点击收藏
        collection(goods) {
            if (!localStorage.getItem("nickname")) {
                this.$dialog
                    .alert({
                        title: "登录后才可启用此功能", //加上标题
                        message: "是否跳转登录/注册界面",
                        showCancelButton: true
                    })
                    .then(() => {
                        this.$router.push("/login");
                    })
                    .catch(() => {});
            } else {
                if (this.flag) {
                    this.$api.collection(goods).then(res => {
                        if (res.code === 200) {
                            this.$toast(res.msg);
                            this.getisCollection(goods.id);
                        } else {
                            this.$toast("收藏失败");
                        }
                    });
                } else {
                    this.$api.cancelCollection(this.$route.query.id).then(res => {
                        if (res.code === 200) {
                            this.$toast(res.msg);
                            this.getisCollection(goods.id);
                        } else {
                            this.$toast("取消失败");
                        }
                    });
                }
            }
        },
        //取消收藏
        getisCollection(id) {
            this.$api.isCollection(id).then(res => {
                console.log(res);
                if (res.isCollection === 1) {
                    this.flag = false;
                } else {
                    this.flag = true;
                }
            });
        }
    },
    mounted() {
        this.getisCollection(this.$route.query.id);
    },
    watch: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
.container-detailOn {
    background: white;
}

.title {
    padding: 10px;
    font-size: 16px;
}

.price {
    padding-left: 10px;
    color: red;
    font-size: 16px;
}

.desc,
.store {
    font-size: 16px;
    color: gray;
    margin: 15px 0;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
}

.store {
    color: #000;
}

.van-icon-shop-o {
    width: 20px;
    height: 18px;
}

.collection {
    font-size: 16px;
    margin-top: -2px;
    color: red;
}
</style>
