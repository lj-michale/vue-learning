<!--
descr: App.vue是项目的主组件，页面入口文件 ，所有页面都在App.vue下进行切换，app.vue负责构建定义及页面组件归集
       1. app.vue作为主组件在main.js中被使用
       2. 主组件app.vue调用其他组件，构建页面
-->
<script setup lang="ts">

</script>

<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  font-family: Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,  SimSun, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
a{
  color: #56a9ff;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#nprogress .bar {
  height: 3px !important;
  background: #56a9ff !important; //自定义颜色
}
</style>
