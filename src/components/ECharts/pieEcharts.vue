<template>
<!--  <table cellspacing="0px" cellpadding="10px">-->
<!--    <tr>-->
<!--      <td>productId</td>-->
<!--      <td>productName</td>-->
<!--      <td>price</td>-->
<!--    </tr>-->
<!--    <tr v-for="product in products" :key="product.productId">-->
<!--      <td>{{ product.productId }}</td>-->
<!--      <td>{{ product.productName }}</td>-->
<!--      <td>{{ product.price }}</td>-->
<!--    </tr>-->
<!--  </table>-->
  <p> ################## </p>
  <p> {{products}}</p>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import fetchTuring from '../../api/apis/turingApi.ts'

export default {
  name: "pieEcharts",
  setup() {
    let products = reactive([]);
    // onMounted(() =>{
    //   console.log(typeof fetchTuring)
    //   fetchTuring.then(err=>{
    //     console.log(err)
    //   })
    //
    //
    // })

    onMounted(() =>{
      axios.post('/api/turing/products',{
            "productId": "235736HGGHGGG",
            "productName": "胡萝卜",
            "price": "7.88"
      }).then(response => {
        products.value = response.data.result;
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
