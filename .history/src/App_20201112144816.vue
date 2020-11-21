<template>
<div id="app">
    <keep-alive include="index">
        <router-view />
        <loading />
    </keep-alive>

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
