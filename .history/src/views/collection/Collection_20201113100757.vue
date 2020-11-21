<template>
<div>
    <global-top>
        <div slot="title">我的收藏</div>
    </global-top>
    <div v-if="Collections.length > 0" :pullUp="true" :Uploaded="Uploaded" :loadedAll="loadedAll" @pullingUp="getCollection" class="wrapper">
        <goods-box v-for="item in Collections" :key="item.id" :item="item">
            <div slot="close">
                <van-icon @click="del(item)" name="delete" />
            </div>
        </goods-box>
    </div>
    <div v-else class="msg">暂无数据</div>
</div>
</template>

<script>
import goodsBox from "../../components/box/GoodsBox";
export default {
    name: "",
    props: {},
    components: {
        goodsBox,
    },
    data() {
        return {
            Collections: [],
            Uploaded: false,
            loadedAll: false,
            page: 2,
        };
    },
    methods: {
        //获取收藏
        getCollection() {
            this.Uploaded = false;
            this.$store.state.cancelLoad = true;
            this.$api.getCollection(this.page).then(res => {
                if (res.code === 200) {
                    if (res.data.count > this.Collections.length) {
                        this.page++;
                        this.Collections.push(...res.data.list);
                    } else {
                        this.loadedAll = true;
                    }
                    this.Uploaded = true;
                    this.$store.state.cancelLoad = false;
                }
            }).catch(err => {
                console.log(err)
            })
        },
        del(item) {
            console.log(item);
            this.$dialog
                .alert({
                    title: "提示框", //加上标题
                    message: "是否删除？", //改变弹出框的内容
                    showCancelButton: true, //展示取水按钮
                })
                .then(() => {
                    this.$api.cancelCollection(item.cid).then((res) => {
                        if (res.code === 200) {
                            this.Collections = this.Collections.filter(
                                (i) => item.cid !== i.cid
                            );
                        }
                    });
                })
                .catch(() => {
                    this.$toast("取消删除");
                });
        },
        getDefault() {
            this.$api
                .getCollection(1)
                .then((res) => {
                    if (res.code === 200) {
                        this.Collections = res.data.list;
                        // console.log(this.Collections);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getDefault();
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
.msg {
    padding: 40px;
    text-align: center;
    background: white;
}

.wrapper {
    overflow: hidden;
    height: 94vh;
}

.van-icon {
    font-size: 16px;
}
</style>
