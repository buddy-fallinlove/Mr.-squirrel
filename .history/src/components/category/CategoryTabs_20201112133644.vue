<template>
<div></div>
</template>

<script>
export default {
    name: "",
    props: {
        category: {
            type: Array,
            default: () => [],
        },
        dataid: {
            type: String,
            default: "",
        },
    },

    components: {},
    data() {
        return {
            dataList: [],
            loaded: false
        };
    },
    methods: {
        getDetail(name, title) {
            this.loaded = false;
            this.$api
                .category(name)
                .then((res) => {
                    if (res.code === 200) {
                        this.loaded = true;
                        this.dataList = res.dataList;
                        console.log(res);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
