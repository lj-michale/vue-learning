<template>
  <div id="main" style="height: 300px;"></div>
</template>

<script>
import {onMounted} from "vue";
import * as echarts from 'echarts'

onMounted(() => {
  let myChart = echarts.init(document.getElementById("main"))

  myChart.setOption({
    title: {
      text: "总用户量"
    },
    tooltip: {},
    xAxis: {
      data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
    },
    yAxis: {},
    series: [{
      name: "用户量",
      type: "line",
      data: [5, 20, 36, 10, 10, 20],
    }, ],
  })
  window.onresize = function() {
    myChart.resize()
  }
})
</script>

<style scoped>

</style>
