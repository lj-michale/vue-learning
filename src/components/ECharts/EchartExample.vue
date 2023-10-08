<template>
  <div id="main" style="width: 1000px; height:300px;" ref="main"> </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: "EchartExample",
  mounted() {
    this.test()
  },
  methods: {
    test() {
      // 官方示例 var myChart = echarts.init(document.getElementById('main'));
      const myChart = echarts.init(this.$refs.main) // 我们可以这样写
      //
      const time = (function () { // 立即执行函数
        let now = new Date()  // 获得当前的时间
        let res = [] // 存放时间的数组
        let len = 5 // 要存几个时间？

        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, '')) // 转换时间，大家可以打印出来看一下
          now = new Date(+now - 2000) // 延迟几秒存储一次？
        }
        return res
      })()
      const dataOne = [11,4,7,8,13]
      const dataTwo = [9,7,7,13,15]
      //配置项，可以去查一下官方文档
      let options = {
        title: {
          text: '动态',
          textStyle: {
            color: 'black'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {},
        xAxis: {
          type: 'category',
          data: time, // 把时间组成的数组接过来，放在x轴上
          boundaryGap: true
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: dataOne,
            type: 'line',
            name: '测试一',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          },
          {
            data: dataTwo,
            name: '测试二',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          }
        ]
      }

      myChart.setOption(options)
    }
  }
}
</script>

<style scoped>

</style>
