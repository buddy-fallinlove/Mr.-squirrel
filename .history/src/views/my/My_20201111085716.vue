<template>
<div>
    <userInfo v-if="!flag"></userInfo>
    <UserChange v-else></UserChange>
</div>
</template>

<script>
import userInfo from "../../components/my/UserInfo.vue";
import UserChange from "../../components/my/UserChange.vue";

export default {
    name: "",
    props: {},
    components: {
        userInfo,
        UserChange,
    },
    data() {
        return {
            flag: false,
        };
    },
    methods: {},
    mounted() {},
    watch: {},
    computed: {},
};
</script>

<style scoped lang='scss'>
</style>
