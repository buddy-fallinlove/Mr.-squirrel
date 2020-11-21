<template>
<div>
    <global-top>
        <div slot="back"></div>
        <div slot="title">购物车</div>
    </global-top>
</div>
</template>

<script>
import guestShop from '../../components/shoppingCart/GuestShop'
import userShop from '../../components/shoppingCart/UserShop'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        getCardData() {
            this.$api.getCard().then(res => {
                res;
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getCardData();
    },
    watch: {

    },
    computed: {
        nickname() {
            return this.$store.state.nickname;
        }
    }
}
</script>

<style scoped lang='scss'>

</style>
