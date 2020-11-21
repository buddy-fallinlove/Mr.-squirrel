<template>
<div class="container-goods" @click="()=>{
       console.log(1)
}">
    <div class="close">
        <slot name="close"></slot>
    </div>
    <div class="box">
        <div>
            <img :src="item.image_path" alt />
        </div>
        <div>
            <div class="title van-ellipsis" v-html="detail"></div>
            <div class="price">
                ￥{{item.present_price}}
                <span>{{item.orl_price}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import util from "../../js/util.js";
export default {
    data() {
        return {
            nickname: "guest"
        };
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        keyword: {
            type: String,
            default: ""
        }
    },
    components: {},
    methods: {
        //保存关键字，并跳转
        // goto(item) {
        //     if (item.cid) {
        //         item.id = item.cid;
        //     }
        //     //保存history
        //     if (!this.$store.state.history.includes(this.keyword)) {
        //         this.$store.state.history.unshift(this.keyword);
        //         localStorage.setItem(
        //             `${this.$store.state.nickname}_history`,
        //             JSON.stringify(this.$store.state.history)
        //         );
        //     }
        //     //跳转
        //     this.$router.push({
        //         name: "details",
        //         query: {
        //             id: item.id
        //         }
        //     });
        // }
    },
    mounted() {},
    watch: {},
    computed: {
        detail() {

            return util.keyWord(this.item.name, this.keyword);
        }
    }
};
</script>

<style lang="scss" scoped>
.container-goods {
    position: relative;
}

.box {
    background: white;
    height: 100px;
    display: flex;
    padding: 0 20px;
    border-bottom: 0.1px solid rgb(243, 243, 243);
}

img {
    height: 80px;
    padding: 10px;
}

.title {
    width: 220px;
    margin-top: 30px;
    font-size: 14px;
}

.price {
    margin-top: 10px;
    color: red;
    font-weight: 800;
    font-size: 14px;

    span {
        text-decoration: line-through;
        color: gray;
        font-weight: normal;
    }
}

.close {
    position: absolute;
    right: 20px;
    bottom: 10px;
}
</style>
