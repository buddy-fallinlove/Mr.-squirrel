<template>
<div>
    <div class="container">
        <div @click="$goto('/city')" class="city" style="z-index: 999 !important">
            <div v-if="city" class="van-ellipsis" :alt="city">{{ city }}</div>
            <div v-else class="van-ellipsis" :alt="city">获取中...</div>
            <van-icon name="arrow-down" />
        </div>
        <van-search style="z-index: 999 !important" class="search" v-model="value" placeholder="请输入搜索关键词" :show-action="show" shape="round" @focus="show = true" @cancel="show = false" background="none"></van-search>
    </div>
    <keep-alive>
        <transition v-if="show" name="fade" @click="show = !show">
            <div class="box">
                <div ref="rap" style="height: 620px !important; overflow: hidden">
                    <div>
                        <searchHistory v-if="keyword === ''"></searchHistory>
                        <searching v-else :keyword="keyword"></searching>
                    </div>
                </div>
            </div>
        </transition>
    </keep-alive>
</div>
</template>

<script>
import BScroll from "better-scroll";
import searchHistory from "./searchBox/SearchHistory";
import searching from "./searchBox/Searching";
export default {
    props: {},
    data() {
        return {
            show: false,
            value: "",
            keyword: "",
        };
    },
    components: {
        searchHistory,
        searching,
    },
    methods: {
        onSearch() {},
        getcity() {
            if (!this.$store.state.city) {
                this.$store.state.city = this.$store.state.currentCity;
            }
        },
    },
    mounted() {
        this.getcity();
        let _this = this;
        AMap.plugin("AMap.Geolocation", function () {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: "RB",
            });
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, "complete", onComplete);
            AMap.event.addListener(geolocation, "error", onError);

            function onComplete(data) {
                // data是具体的定位信息
                _this.$store.state.currentCity = data.addressComponent.city;
            }

            function onError(data) {
                // 定位出错
                _this.$store.state.currentCity = "获取失败";
            }
        });

        setInterval(() => {
            new BScroll(this.$refs.rap, {
                scrollY: true, //左右滑动
                // click: true //点击为true才能滑动,关闭避免触发两次点击事件
            });
        }, 1000)
        let time
        clearInterval(time)
    },
    watch: {
        value(val) {
            this.keyword = val.trim();
        },
    },
    computed: {
        city() {
            if (!this.$store.state.city) {
                this.$store.state.city = this.$store.state.currentCity;
            }
            return this.$store.state.city;
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: fixed;
    z-index: 9999;
    display: flex;
    width: 100%;
    height: 6vh;
    padding: 1vh 0;
    background: #f2f2f2;
}

.city {
    div {
        width: 100%;
        text-align: center;
    }

    width: 65px;
    display: flex;
    font-size: 14px;
    line-height: 6vh;
    height: 6vh;
    margin-left: 10px;
    position: relative;

    .van-icon {
        position: absolute;
        right: -10px;
        line-height: 6vh;
    }
}

.search {
    width: 300px;
    height: 4vh;
    margin-top: 1vh;
}

.box {
    margin-top: 7vh;
    padding-top: 10px;
    position: fixed;
    width: 100%;
    height: 93vh;
    background: white;
    z-index: 103;
    overflow: hidden;
}

.fade-enter,
.fade-leave-to {
    transform: translateX(375px);
}

.fade-leave,
.fade-enter-to {
    transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
</style>
