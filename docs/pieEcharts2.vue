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
// import axios from 'axios'
import { onMounted, reactive } from 'vue'
import api from '@/api'

export default {
  name: "pieEcharts",
  setup() {
    let products = reactive([])
    let param = reactive({
      productId: '9823338HH23',
      productName: '红苋菜'
    })
    // onMounted(() =>{
    //   console.log(typeof fetchTuring)
    //   fetchTuring.then(err=>{
    //     console.log(err)
    //   })
    //
    //
    // })

    // 方案1
    onMounted(() => {
      api.fetchProducts({
        productId: param.productId,
        productName: param.productName
      }).then(response => {
        products.value = response.data.result
        console.log(products)
      })
    })

    // 方案2
    // onMounted(() =>{
    //   axios.post('/api/turing/products',{
    //         "productId": "235736HGGHGGG",
    //         "productName": "胡萝卜",
    //         "price": "7.88"
    //   }).then(response => {
    //     products.value = response.data.result;
    //     console.log(products)
    //     console.log(response.data)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // })

    return { products, onMounted }
  }
}
</script>

<style scoped>

</style>
