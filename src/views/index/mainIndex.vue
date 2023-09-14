<template>
  <div class="data-summary">
    <div class="title">
      <h3 class="title-1">数据概览</h3>
    </div>
    <div class="card">
      <summary-card></summary-card>
    </div>
  </div>

  <div class="data-use">
    <div class="shiyong">
      <div class="title">
        <h3 class="title-1">数据追踪</h3>
      </div>
    </div>
    <div class="yunwei">
      <div class="title">
        <h3 class="title-1">运维追踪</h3>
      </div>
    </div>
  </div>

  <div class="data-detail">
    <div class="title">
      <h3 class="title-1">实时数据</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
// import LineEcharts from '@/components/ECharts/lineEcharts'
// import Maintable from '@/components/table/maintable'
// import pieEcharts from '@/components/ECharts/pieEcharts'
import SummaryCard from '@/components/card/SummaryCard'
// import BarGraph from '@/components/ECharts/BarGraph'
// import EchartExample from '@/components/ECharts/EchartExample'
// import Curve from '@/components/ECharts/Curve'
// import ShanXing from "@/components/ECharts/ShanXing.vue"
</script>

<style lang="scss">
.data-summary{
  width:auto;
  height:25%;
  background:transparent;
  margin:2px;
  padding:2px;
  border: 1px solid black;
}
.data-summary .card{
  width:auto;
  height:150px;
  background-color:transparent;
  margin: 2px;
  padding:2px;
}
.data-use{
  width:auto;
  height:35%;
  background:white;
  margin:2px;
  padding:2px;
  border: 1px solid black;
}
.data-use .shiyong{
  width:49%;
  height:245px;
  background-color:transparent;
  margin: 2px;
  float: left;
  padding:2px;
  border: 1px solid black;
}
.data-use .yunwei{
  width:49%;
  height:245px;
  background-color:transparent;
  margin: 2px;
  float: right;
  padding:2px;
  border: 1px solid black;
}
.data-detail{
  width:auto;
  height:330px;
  background:white;
  margin:2px;
  padding:2px;
  border: 1px solid black;
}
.data-summary .title{
  width:75px;
  //border: 1px solid black;
}
.title-1{
  font-size: 14px;
}
.data-use .title{
  width:75px;
  //border: 1px solid black;
}
.data-detail .title {
  width: 75px;
  //border: 1px solid black;
}

.summary-card{
  width: 100%;
  height: 100%;
}
</style>
