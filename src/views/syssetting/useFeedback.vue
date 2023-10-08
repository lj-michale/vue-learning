<template>
  {{name}}
  <button @click="change">修改</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "useFeedback",
  setup() {
    let name = ref("泪眼问花花不语，乱红飞过秋千去")
    // let name = reactive({name: '今年花胜去年红。可惜明年花更好，知与谁同'})

    function change() {
      name.value = "人生自是有情痴，此恨不关风与月"
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
