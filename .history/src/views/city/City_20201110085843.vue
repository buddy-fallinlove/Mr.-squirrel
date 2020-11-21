<template>
<div class="container-city">
    <global-top>
        <div slot="title">城市列表</div>
    </global-top>
    <cities-search :desc="desc" class="search"></cities-search>
    <!-- 模糊搜索 -->
    <van-cell v-if="desc!==''" :sticky-offset-top="100" class="index-bar">
        <van-cell v-for="item1 in show" :key="item1.id" :title="item1.name" @click="Select(item1)" />
    </van-cell>
    <!-- A-Z城市排名 -->
    <van-index-bar v-else :sticky-offset-top="100" class="index-bar">
        <div class="title">当前城市</div>
        <van-cell>
            <div v-if='city' class="detail" @click="Selectcurrent">{{city}}</div>
            <div v-else class="detail" @click="Selectcurrent">定位中...</div>
        </van-cell>
        <!-- 热门城市 -->
        <div class="title">热门城市</div>
        <van-cell>
            <div class="box">
                <div v-for="item in hotCities" :key="item.id" @click="Select(item)" class="detail">{{item.name}}</div>
            </div>
        </van-cell>
        <div v-for="item in Object.keys(cities)" :key="item.id">
            <van-index-anchor :index="item" />
            <van-cell v-for="desc in cities[item]" :key="desc.id" :title="desc.name" @click="Select(desc)" />
        </div>
    </van-index-bar>
</div>
</template>

<script>
import $city from "../../js/city.js"
import citiesSearch from "../../components/cities/CitiesSearch.vue";
export default {
    data() {
        return {
            cities: {},
            arr: [],
            desc: "",
            hotCities: []
        };
    },
    props: {},
    components: {
        citiesSearch
    },
    methods: {
        //获取全部城市信息
        getCities() {
            //获取热门城市
            this.hotCities = $city.data.hotCities;
            //获取A-Z城市信息
            this.cities = $city.data.cities;
            //获取城市名称（用于模糊搜索）
            Object.keys(this.cities).map(item => {
                this.arr.push(...this.cities[item]);
            });
        },
        //保存修改后的城市信息，并返回
        Select(desc) {
            this.$router.go(-1);
            this.$store.state.city = desc.name;
        },
        Selectcurrent() {
            this.$router.go(-1);
            this.$store.state.city = this.$store.state.currentCity;
        }
    },
    mounted() {
        this.getCities();
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
    },
    watch: {},
    computed: {
        //模糊搜索，返回搜索结果
        show() {
            return this.arr.filter(item => JSON.stringify(item).includes(this.desc));
        },
        city() {
            return this.$store.state.currentCity;
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 16px;
    height: 31px;
    width: 100%;
    line-height: 31px;
}

.box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.detail {
    width: 100px;
    line-height: 30px;
    text-align: center;
    border: 1px solid rgb(216, 206, 206);
    margin: 3px;
}

/deep/ .van-index-bar__index {
    height: 16px;
    color: skyblue;
}

.search {
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 100;
}

.index-bar {
    margin-top: 60px;
}
</style>
