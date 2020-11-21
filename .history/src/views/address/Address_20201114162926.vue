<template>
<div>
    <global-top>
        <div slot="title">地址列表</div>
    </global-top>
    <van-address-list v-model="chosenAddressId" :list="list" address @add="onAdd" @edit="onEdit" default-tag-text="默认" @select="setAddress" />
    <div class="msg" v-if="list.length === 0">暂无收货地址~~</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            chosenAddressId: "",
            list: [],
        };
    },
    props: {},
    components: {},
    methods: {
        //跳转到添加页面
        onAdd() {
            this.$router.push("/addressEdit");
        },
        //跳转修改页面
        onEdit(item, index) {
            this.$router.push({
                name: "addressEdit",
                params: {
                    item: item,
                },
            });
        },
        //获取地址并转存id
        getAddress() {
            this.$api.getAddress().then((res) => {
                if (res.code === 200) {
                    console.log(res)
                    this.list = res.address.reverse();
                    this.list.forEach((item) => {
                        item.id = item._id;
                        item.address = item.addressDetail;
                    });

                    this.$api.getDefaultAddress().then((res) => {
                        if (res.code === 200) {
                            if (res.defaultAdd) {
                                this.chosenAddressId = res.defaultAdd._id;
                                this.list.map((item, index) => {
                                    if (item._id === this.chosenAddressId) {
                                        this.list.splice(index, 1);
                                        this.list.unshift(item);
                                    }
                                });
                            } else {
                                this.chosenAddressId = this.list[0]._id;
                            }
                        }
                    });
                }
            });
            //默认地址和选中地址判断
        },
        //设置地址
        setAddress() {
            if (this.$store.state.jump) {
                this.$router.go(-1);
            }
        },
    },
    mounted() {
        this.$store.state.shippingAddress = {};
        this.getAddress();
    },
    updated() {},
    watch: {
        chosenAddressId(val) {
            this.$store.state.shippingAddress = this.list.filter(
                (item) => item._id === this.chosenAddressId
            )[0];
        },
    },
    computed: {},
    beforeRouteEnter(to, from, next) {
        if (from.name === "shoppingPayMent") {
            next((vm) => {
                vm.$store.state.jump = true;
            });
        } else if (from.name === "my") {
            next((vm) => {
                vm.$store.state.jump = false;
            });
        } else {
            next();
        }
    },
};
</script>

<style lang="scss" scoped>
/deep/ .van-radio__icon {
    border: 1px solid gray;
    border-radius: 50%;
}

.msg {
    font-size: 20px;
    color: gray;
    text-align: center;
    margin: 40px;
}
</style>
