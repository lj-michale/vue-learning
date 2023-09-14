<template>
  <div class="summary-card">
   <!--  gutter栅格间隔  -->
    <el-row :gutter="5" type='flex'>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3>新增用户数</h3>
          <div>
            <span>763</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3>活跃用户数</h3>
          <div>
            <span>434</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3>注册用户数</h3>
          <div>
            <span>974</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3>私聊用户数</h3>
          <div>
            <span>234</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3>付费用户数</h3>
          <div>
            <span>2446</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3>付费金额</h3>
          <div>
            <span>48262</span>
          </div>
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
      axios.get('/api/turing/summary/cards').then(response => {
        summaryCards.value = response.data.result
        console.log(summaryCards.value)
      }).catch(error => {
        console.log(error)
      })
    })

    return { summaryCards, onMounted }
  }
}
</script>

<style scoped>
.summary-card .box-card{
  height:150px;
}
.el-card{
  text-align: center;
}
</style>
