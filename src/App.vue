<!--
descr: App.vue是项目的主组件，页面入口文件 ，所有页面都在App.vue下进行切换，app.vue负责构建定义及页面组件归集
       1. app.vue作为主组件在main.js中被使用
       2. 主组件app.vue调用其他组件，构建页面
-->
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/">About</router-link>
  </nav>
  <router-view>

  </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
