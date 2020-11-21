<template>
<div>
    <van-swipe :autoplay="3000" :stop-propagation='false' indicator-color="white">
        <van-swipe-item>
            <img :src="item.image" alt @click="click(item)" />
        </van-swipe-item>
        <van-swipe-item>
            <img :src="item.image_path" alt @click="click(item)" />
        </van-swipe-item>
    </van-swipe>
    <van-image-preview v-model="show" :images="arr" @change="onChange">
        <template v-slot:index>第{{ index+1 }}页</template>
    </van-image-preview>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            arr: [],
            index: 0,
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
        click(item) {
            this.arr = [item.image_path, item.image];
            this.show = !this.show
        },
        onChange(index) {
            this.index = index;
        }
    },
    mounted() {},
    watch: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    margin-top: 20px;
}
</style>
