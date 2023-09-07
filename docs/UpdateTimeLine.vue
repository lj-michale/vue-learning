<!--
 * @Description: 系统日志更新时间线
 * @Author: l.michale
 * @Date: 2023-09-05 17:13:09
-->
<template>
  <div>
    <el-dialog title="历史信息" v-model:visible="centerDialogVisible" width="50%">
      <el-timeline>
        <el-timeline-item placement="top" :timestamp="item.sj" v-for="(item, index) in updateTimeLineInfos" :key="index">

        </el-timeline-item>
      </el-timeline>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

export default {
  name: 'updateTimeline',
  setup() {
    let updateTimeLineInfos = reactive([])

    onMounted(() => {
      axios.get('/api/turing/update/timeline').then(response => {
        updateTimeLineInfos.value = response.data.result;
      }).catch(error => {
        console.log(error)
      })
    })
    return {updateTimeLineInfos, onMounted}
  }
}
</script>

<style scoped>
h3 {
  margin: 10px 0px;
}
</style>
