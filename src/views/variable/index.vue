<template>
  <div>
    <p> 变量管理 </p>
    <h1>{{ msg }}</h1>
    <h3>tips: see browser controller</h3>
    <button type="button" @click.self="loveTalk()" >get loveTalk</button>
    <button type="button" @click.self="getProducts()" >获取商品信息</button>
  </div>
</template>

<script>
import {getUpdateTimeLine, getProductList} from "@/api/apis/exampleApi"
import PieEcharts from "@/components/ECharts/pieEcharts"

async function fetchGetLoveTalk() {
  const res = await getUpdateTimeLine()

  // eslint-disable-next-line eqeqeq
  if(res.status == 200) {
    return res.data
  }
}

export default {
  name: "index",
  // eslint-disable-next-line vue/no-unused-components
  components: {PieEcharts},
  props: { msg: String },

  setup() {
    // 调用
    function loveTalk() {
      console.log('get loveTalk',fetchGetLoveTalk())
    }

    function getProducts() {
      console.log('post getProductList',getProductList({ productId: '1655466387', productName: '肯德基'}))
    }

    return {
      name,loveTalk,getProducts
    }
  }
}



</script>

<style scoped>
table {
  width: 800px;
  border: 1px solid #000;
  border-collapse: collapse;
}
th {
  background: #ccc;
}
th:nth-of-type(1) {
  text-align: left;
}
th,
td {
  padding: 10px;
  border: 1px solid #000;
}
</style>
