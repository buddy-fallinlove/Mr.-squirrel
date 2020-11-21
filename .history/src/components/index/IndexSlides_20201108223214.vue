<template>
<div class="container">
    <van-swipe :autoplay="3000" :stop-propagation='false' indicator-color="white">
        <van-swipe-item v-for="item in slidesData" :key="item.id">
            <img :src="item.image" alt />
        </van-swipe-item>
    </van-swipe>
</div>
</template>

<script>
export default {
    props: {
        slidesData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {};
    },
    components: {},
    methods: {},
    mounted() {},
    watch: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
