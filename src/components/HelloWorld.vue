<template>
  <div>
    <h1 class="box1"><strong>{{message}}</strong></h1>
    <OneComp class="box3"></OneComp>
<!--    <one-comp></one-comp>-->
  </div>
</template>

<script>
import OneComp from "./OneComp.vue";
export default {
  name: "HelloWorld",
  components:{
    OneComp
  },
  data() {
    return {
      message:"vue3组件化开发入门"
    }
  }
}
</script>

<style scoped>
  .box1{
    width: 300px;
    height: 300px;
    line-height: 300px;
    padding: 100px;
    color: red;
    background: yellow;
    font-size: 20px;
  }

</style>
