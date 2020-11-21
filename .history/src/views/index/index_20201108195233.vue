<template>
<div class="container-index">
    <!--搜索-->
    <index-top />
    <div class="recommand-wrap">
        <div class="title">
            <img class="title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
            <span class="title-hotrec">本周热门榜单</span>
            <span class="title-allrec">全部榜单</span>
        </div>
        <div ref="wrapper"> /* 这里是父盒子*/
            <ul class="cont" ref="cont"> /* 这里是子盒子，即滚动区域*/
                <li class="cont-item" v-for="item of recommendList" :key="item.id">
                    <div class="cont-img">
                        <img class="img" :src="item.url" :alt="item.text">
                    </div>
                    <div class="cont-dest">{{item.text}}</div>
                    <div class="cont-price">
                        <span class="price">￥{{item.price}}</span>
                        <span>起</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
//搜索
import indexTop from '@/components/index/IndexTop'
export default {
    name: '',
    props: {},
    components: {
        indexTop
    },
    data() {
        return {

        }
    },
    methods: {
        getData() {
            this.$api.getRecommend().then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },

        verScroll() {
            let width = this.recommendList.length * 110 // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
            this.$refs.cont.style.width = width + 'px' // 修改滚动区域的宽度
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
                        click: true,
                        scrollX: true,
                        scrollY: false,
                        eventPassthrough: 'vertical'
                    })
                } else {
                    this.scroll.refresh() //如果dom结构发生改变调用该方法
                }
            })
        }
    },
    mounted() {
        this.getData(),

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.container-index {
    width: 100%;
    height: 100%;
}
</style>
