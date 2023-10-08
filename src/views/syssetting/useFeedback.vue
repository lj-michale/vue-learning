<template>
  {{name}}
  <button @click="change">修改</button>
</template>

<script>


export default {
  name: "useFeedback",
  setup() {
    let name = "泪眼问花花不语，乱红飞过秋千去"

    function change() {
      name = "人生自是有情痴，此恨不关风与月"
    }

    return {
      name,
      change
    }
  }
}
</script>

<style scoped>

</style>
