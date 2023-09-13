<template>
  <div class="summary-card">

  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

export default {
  name: "Card",
  setup() {
    let summaryCards = reactive([])

    onMounted(() =>{
      axios.post('/api/turing/summary/cards').then(response => {
        summaryCards.value = response.data.result
      }).catch(error => {
        console.log(error)
      })
    })

    return { summaryCards, onMounted }
  }
}
</script>

<style scoped>

</style>
