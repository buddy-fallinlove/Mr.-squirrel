<template>
 <div class="container-add">

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
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

<style scoped lang='scss'>
.container-add {
  height: 15vh;
}
.adress-box {
  display: flex;
  height: 80px;
  position: relative;
  .add {
    margin: 30px auto 0;
    text-decoration: underline;
    cursor: pointer;
  }
  .logo {
    margin-top: 30px;
    margin-left: 10px;
    font-size: 30px;
  }
  .detail {
    margin: 10px 5px;
    width: 280px;
    .userinfo {
      display: flex;
      justify-content: space-between;
    }
    .address {
      margin-top: 20px;
      font-size: 14px;
      line-height: 14px;
    }
  }
}
.msg {
  margin-left: 40px;
  margin-bottom: 2px;
  font-size: 12px;
  color: orange;
}
.address-edit {
  position: absolute;
  right: 10px;
  top: 50%;
}
.Splitter {
  background: url("../../assets/caitiao.jpg");
  width: 100%;
  height: 5px;
}
</style>