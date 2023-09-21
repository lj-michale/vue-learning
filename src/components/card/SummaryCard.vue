<!--
 * @Description: 数据概览-数据卡片
 * @Author: l.michale
 * @Date: 2023-09-14 17:13:09
-->
<template>
  <div class="summary-card">
   <!--  gutter栅格间隔  -->
    <el-row :gutter="5" type='flex' style="width: 100%">
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="box-card">
          <h3 class="card-name"></h3>
          <div>
            <span>474</span>
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
import { onMounted, reactive } from 'vue'
import {getSummaryCards} from "@/api/apis/exampleApi"
import {getLastSummaryCards} from "@/api/apis/exampleApi"

export default {
  name: "SummaryCard",
  // setup钩子函数是 vue3 中，专门为组件提供的新属性。它为我们使用 vue3 的 Composition API 新特性提供了统一的入口。
  setup() {
    let summaryCards = reactive([])
    let lastSummaryCards = reactive({})

    onMounted(() => {
      getSummaryCards().then(response => {
        summaryCards.value = response.data.result
      }).catch(error => {
        console.log(error)
      })

      getLastSummaryCards().then(response => {
        lastSummaryCards.value = response.data.result
      }).catch(error => {
        console.log(error)
      })
    })

    return { summaryCards, onMounted, lastSummaryCards }
  },

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
