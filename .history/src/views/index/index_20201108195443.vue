<template>
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
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'HomeRecommand',
    props: {
        recommendList: {
            type: Array,
            required: true
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
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
        this.$nextTick(() => {
            let timer = setTimeout(() => { // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
                if (timer) {
                    clearTimeout(timer)
                    this.verScroll()
                }
            }, 0)
        })
    }
}
</script>

<style lang="scss" scoped>
.recommand-wrap {
    height: 0;
    padding-bottom: 50%;
    margin-top: .2rem;
    background: #fff;
    padding-left: .24rem;
    width: 100%;

    .title {
        position: relative;
        height: 40px;
        display: flex;
        padding: 12px 0;
        box-sizing: border-box;

        .title-img {
            width: 15px;
            height: 15px;
        }

        .title-hotrec {
            font-size: 16px;
            margin-left: 4px;
        }

        .title-allrec {
            position: absolute;
            padding-top: 2px;
            font-size: 13px;
            right: 20px;
            color: gray;
        }
    }

    .cont {
        list-style: none;
        // overflow-x: scroll;  
        white-space: nowrap;
        font-size: 12px;
        text-align: center;
        padding-right: .24rem;

        .cont-item {
            position: relative;
            display: inline-block;
            padding: .06rem 0 .2rem;
            width: 2rem;
            margin: 0 .1rem;

            .cont-img {
                overflow: hidden;
                width: 2rem;
                height: 0;
                padding-bottom: 100%;

                .img {
                    width: 100%;
                }
            }

            .cont-dest {
                margin: .1rem 0;
            }

            .cont-price {
                .price {
                    color: #ff8300;
                }
            }
        }
    }
}
</style>
