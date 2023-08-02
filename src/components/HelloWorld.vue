<template>
  <div>
    <h1 class="box1"><strong>{{message}}</strong></h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message:"hello world"
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
    font-size: 50px;
  }

</style>
