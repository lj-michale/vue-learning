<template>
  <div id='app'>
    <el-table :data="products.value" style="width: 100%">
      <el-table-column prop="productId" label="商品编号" width="180" />
      <el-table-column prop="productName" label="商品名称" width="120" />
      <el-table-column prop="price" label="价格" width="120" />
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'


export default {
  name: "pieEcharts",
  setup() {
    let products = reactive([])

    onMounted(() =>{
      axios.post('/api/turing/products',{
        "productId": "235736HGGHGGG",
        "productName": "胡萝波卜",
        "price": "7.88"
      }).then(response => {
        products.value = response.data.result
        console.log(products)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    })

    return { products, onMounted }
  }
}
</script>

<style scoped>

</style>
