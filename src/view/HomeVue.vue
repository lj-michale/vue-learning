<template>
  <div class="home">
    <img src="vue logo" src="../assets/vue.svg">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "HomeVue",
  components:{
    HelloWorld
  }
}
</script>

<style scoped>

</style>
