<template>
  <div>
    <e-charts id="shanxing" class="shanxing" :option="option" />
  </div>
</template>

<script>
import {onMounted} from 'vue'
import * as echarts from 'echarts'

export default {
  name: 'ShanXing',
  setup() {
    onMounted(() => {
      const chartDom = document.getElementById('main')
      const myChart = echarts.init(chartDom)
      let option

      option = {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
          }
        ]
      }
      option && myChart.setOption(option)
    })
    return {onMounted }
  }

}
</script>

<style scoped>
.shanxing {
  width: 200px;
  height: 200px;
}
</style>
