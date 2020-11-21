<template>
<div>
    <div class="wrapper" :pullUp="true" @pullingUp="getdata" :Uploaded="Uploaded" :loadedAll="loadedAll">
        <div>
            <goods-box v-for="item in dataList" :key="item.id" :item="item" :keyword="keyword">
                <div slot="del"></div>
            </goods-box>
        </div>
    </div>
</div>
</template>

<script>
import goodsBox from "../../box/GoodsBox";
export default {
    props: {
        keyword: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            dataList: [],
            page: 2,
            length: "",
            Uploaded: false,
            loadedAll: false
        };
    },
    components: {
        goodsBox
    },
    methods: {
        getDefault() {
            this.$api.search(this.keyword, 1).then(res => {
                if (res.code === 200) {
                    this.dataList = res.data.list
                }
            });
        },
        getdata() {
            this.Uploaded = false;
            this.$api.search(this.keyword, this.page).then(res => {
                if (res.code === 200) {
                    if (res.data.count > this.dataList.length) {
                        this.page++;
                        this.dataList.push(...res.data.list);
                    } else {
                        this.loadedAll = true;
                    }
                    this.Uploaded = true;
                }
            });
        }
    },
    mounted() {
        this.getDefault();
    },
    watch: {
        //   监听value值得变化
        keyword(val) {
            this.getDefault();
        }
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
    overflow: hidden;
    // height: 94vh;
}
</style>
