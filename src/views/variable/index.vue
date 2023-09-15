<template>
  <div>
    <p> 变量管理 </p>
    <h1>{{ msg }}</h1>
    <h3>tips: see browser controller</h3>
    <button type="button" @click.self="loveTalk()" >get loveTalk</button>
  </div>
</template>

<script lang="ts">
import {getUpdateTimeLine} from "@/api/apis/exampleApi"

async function fetchGetLoveTalk() {
  const res = await getUpdateTimeLine()

  // eslint-disable-next-line eqeqeq
  if(res.status == 200) {
    return res.data
  }
}

export default {
  name: "index",
  props: { msg: String },
  setup() {
    // 调用
    function loveTalk() {
      console.log('get loveTalk',fetchGetLoveTalk())
    }
    return {
      name,loveTalk
    }
  }
}



</script>

<style scoped>
button {
  margin: 0 10px;
}
</style>
