<script>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const roseRef = ref()

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(roseRef.value)
  // 绘制图表

  myChart.setOption({

    legend: {
      data: ['今日用电功率'],
      x: '500', //可设定图例在左、右、居中
      y: '20',
      icon: 'rect',
      textStyle: {
        width: '10',
        height: '5',
        color: '#fff',
        fontSize: '12',
        itemStyle: {
          color: '#fff'
        }
      },
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
    },
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 12,
        interval: 2,
        axisLabel: {
          formatter: '{value} W',
        },

        // 背景线
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            // 使用深浅的间隔色
            color: ['#383647'],
          },
        },
      },
    ],
    series: [
      {
        name: '今日用电功率',
        symbol: 'none',
        data: [4, 2, 2, 6, 1, 8, 6, 6, 6],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          lineStyle: {
            color: '#c18f1b'
          },
          label: {
            color: '#c18f1b',
            formatter: '{b}: 3.6kw',
            position: 'insideStartTop'
          },
          data: [{ type: 'average', name: '平均值' }]
        },
        type: 'line',
        areaStyle: {
          color: '#293239'
        },
        lineStyle: {
          color: '#49855f'
        },
        itemStyle: {
          color: '#49855f'
        }
      }
    ]
  })
})
</script>

<template>
  <div class="column">
    <div ref="roseRef" class="rose"></div>
  </div>
</template>

<style lang="less" scoped>
.column {
  width: 100%;
  height: 100%;

  .rose {
    width: 100%;
    height: 100%;
  }
}
</style>
