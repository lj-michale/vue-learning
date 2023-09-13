<template>
  <div class="summary-card">
    <el-row :gutter="20" type='flex'>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="item-background">

        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="item-background">
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="item-background">
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="item-background">
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="item-background">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

export default {
  name: "SummaryCard",
  setup() {
    let summaryCards = reactive([])

    onMounted(() => {
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
