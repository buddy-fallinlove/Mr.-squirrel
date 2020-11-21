<template>
<div></div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {};
    },
    methods: {
        getgood() {
            this.$api
                .goodOne(this.$route.query.id, this.page)
                .then((res) => {
                    if (res.code === 200) {
                        console.log(res);

                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getgood()
    },
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
