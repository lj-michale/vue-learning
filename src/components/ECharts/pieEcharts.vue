<template>
  <table cellspacing="0px" cellpadding="10px">
    <tr>
      <td>productId</td>
      <td>productName</td>
      <td>price</td>
    </tr>
    <tr v-for="book in books" :key="book.productId">
      <td>{{ book.productId }}</td>
      <td>{{ book.productName }}</td>
      <td>{{ book.price }}</td>
    </tr>
  </table>
</template>

<script>
// import axios from 'axios'
import { onMounted, reactive } from 'vue'
import fetchTuring from '../../api/apis/turingApi.ts'
export default {
  name: "pieEcharts",
  setup() {
    let books = reactive([]);
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
            "productName": "胡萝卜"
      })
          .then(response => {
            books.push(...response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    })

    return { books, onMounted }
  }
}
</script>

<style scoped>

</style>
