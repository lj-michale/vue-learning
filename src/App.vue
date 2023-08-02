<!--
descr: App.vue是项目的主组件，页面入口文件 ，所有页面都在App.vue下进行切换，app.vue负责构建定义及页面组件归集
       1. app.vue作为主组件在main.js中被使用
       2. 主组件app.vue调用其他组件，构建页面
-->
<template>
  <HelloWorld></HelloWorld>
  <hello-world></hello-world>
</template>

<script>
 import HelloWorld from "./components/HelloWorld.vue";
 export default {
   name: 'App',
   data(){
     return {}
   },
   components:{
     HelloWorld: HelloWorld
   }
 }
</script>

<style scoped>
  .box3{
    width: 200px;
    height: 100px;
    background: blue;
    color: white;
  }
</style>
