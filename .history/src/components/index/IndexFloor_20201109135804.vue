<template>
<div>
    <div class=""></div>
</div>
</template>

<script>
export default {
    name: '',
    props: {
        floor: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.title {
    width: 100px;
    margin: 10px auto;
    display: flex;
    text-align: center;

    :nth-child(1) {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 20px;
        font-size: 12px;
        background: red;
        color: white;
    }

    :nth-child(2) {
        font-size: 16px;
        padding-left: 10px;
        color: red;
        line-height: 20px;
    }
}

.box {
    width: 100%;
    height: 320px;

    .desc {
        width: 50%;
        float: left;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
