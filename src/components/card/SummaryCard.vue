<!--
 * @Description: 数据概览-数据卡片
 * @Author: l.michale
 * @Date: 2023-09-14 17:13:09
-->
<template>
  <div class="summary-card">
   <!--  gutter栅格间隔  -->
    <el-row :gutter="5" type='flex'>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3 class="card-name">组件服务</h3>
          <div>
            <span>763</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3 class="card-name">数据资产</h3>
          <div>
            <span>434</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3 class="card-name">计算作业</h3>
          <div>
            <span>974</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3 class="card-name">算法模型</h3>
          <div>
            <span>234</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3 class="card-name">服务调用</h3>
          <div>
            <span>2446</span>
          </div>
        </el-card>
      </el-col>
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3 class="card-name">平台告警</h3>
          <div>
            <span>62</span>
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
.summary-card .box-card:hover{
  height:150px;
  transform: scale(1.4);
}
.card-name{
  font-size: 15px;
  color: #000000;
  font-style: normal;
}
</style>
