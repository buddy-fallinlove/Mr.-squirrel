<!-- better_Scroll-demo -->
<template>
<div class="page_wraper" ref="wrap">
    <div class="content">
        <div class="top_tip tc">{{ pullDownMsg }}</div>
        <ul>
            <li v-for="i in list">::key="key"{{ i }}</li>
        </ul>
        <div class="bottom_tip tc">{{ pullUpMsg }}</div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {
    setTimeout
} from 'timers';
export default {
    data() {
        return {
            startNum: 1,
            list: [],
            pullDownMsg: "下拉刷新，发现更多",
            pullUpMsg: "加载中，请稍后...",
            noMsg: "没有更多了",
            bsScroll: ""
        };
    },

    components: {},

    computed: {},

    mounted: function () {
        this.getList().then((res) => {
            this.list = this.list.concat(res);
        });
        // 初始化
        this.bsScroll = new BScroll(this.$refs.wrap, {
            probeType: 1,
            click: true
        })
        // 监听滚动事件
        this.bsScroll.on('scroll', (pos) => {
            if (pos.y > 0 && pos.y <= 40) {
                this.pullDownMsg = '下拉刷新，发现更多';
            } else if (pos.y > 40) {
                this.pullDownMsg = "释放更新，发现更多"
            }
        })
        // 监听滚动结束
        this.bsScroll.on('touchEnd', (pos) => {
            if (pos.y > 40) {
                // 重新获取数据
                this.startNum = this.getRandom(1, 100);
                setTimeout(() => {
                    this.getList().then((res) => {
                        this.list = res;
                        this.pullDownMsg = '下拉刷新，发现更多';
                    })
                }, 1000)
            } else if (pos.y < this.bsScroll.maxScrollY - 30) {
                // 下拉加载
                this.getList().then((res) => {
                    this.list = this.list.concat(res);
                    this.bsScroll.refresh();
                })
            }
        })
    },

    methods: {
        getList() {
            // 模拟数据请求
            return new Promise(resolve => {
                setTimeout(() => {
                    let start = this.startNum,
                        arr = [];
                    for (
                        this.startNum; this.startNum <= start + 18; this.startNum++
                    ) {
                        arr.push(this.startNum);
                        resolve(arr);
                    }
                }, 1000);
            });
        },
        getRandom(m, n) {
            return Math.floor(Math.random() * (m - n) + n);
        }
    }
};
</script>

<style lang="scss" scoped>
.page_wraper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #eee;
}

.content {
    position: relative;
    min-height: 100%;
}

.top_tip {
    position: absolute;
    top: -35px;
    left: 0;
    width: 100%;
}

.bottom_tip {
    position: absolute;
    bottom: -35px;
    left: 0;
    width: 100%;
}

ul li {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    padding: 5px 20px;
}
</style>
