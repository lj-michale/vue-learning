<!--功能说明: KinHKin 饼图-->
<template>
  <div class="route-watch-bar" id="barCharts" :key="keyOnly"></div>
</template>

<script>
import { onMounted } from "vue"
import * as echarts from "echarts"
import { watch } from "vue"

export default {
  name: "pieChart",
  setup() {
    type EChartsOption = echarts.EChartsOption
    // const keyOnly = new Date().getTime()
    let myChart = null
    let option: EChartsOption
    const props = defineProps({
      list: Array,
    })

    const drawBarCharts = () => {
      if (option) {
        myChart.dispose() //释放图表
        myChart = null
        let chartDom = document.getElementById("barCharts")

        myChart = echarts.init(chartDom)
      }

      option = {
        color: ["#0050B3", "#339DFF", "#36CFC9", "#2BAD2B", "#37C1F0", "#096DD9"],
        grid: {
          top: "50%",
          right: "90%",
          left: "40%",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} <br/>{d}%",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "74%",
            roseType: "area",
            data: props.list,
            label: {
              alignTo: "edge",
              formatter: "{name|{b}}\n\n{value|{d} %}",
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              rich: {
                name: {
                  fontSize: 14,
                  color: "#666",
                },
                value: {
                  fontSize: 16,
                  color: "#1890FF",
                },
              },
            },

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      }

      option && myChart.setOption(option)
    }
    const init = () => {
      let chartDom = document.getElementById("barCharts")

      myChart = echarts.init(chartDom)
      drawBarCharts()
    }

    onMounted(() => {
      init()
    })
    watch(
      () => props.list,
      () => {
        init()
      },
      {
        deep: true,
      }
    )
  }
}

</script>

<style lang="less" scoped>
.route-watch-bar {
  width: 100%;
  height: 400px;
}
</style>

