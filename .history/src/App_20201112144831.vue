<template>
<div id="app">
    <keep-alive include="index">
        <router-view />
    </keep-alive>
    <loading />
</div>
</template>

<script>
import loading from "./components/common/Loading";
export default {
    components: {
        loading
    }
};
</script>

<style lang="scss">
</style>
