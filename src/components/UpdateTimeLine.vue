<!--
 * @Description: 系统日志更新时间线
 * @Author: l.michale
 * @Date: 2023-09-05 17:13:09
-->
<template>
  <div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
          v-for="(item, index) in updateTimeLineInfos.value"
          :key="index"
          size="large"
          color='#70B6FF'
          type="primary"
          :timestamp="item.createTime"
          placement="top">
        <el-card>
           <div v-for="(list,key) in updateTimelineTitle" :key="key">{{list.name}}:{{item[list.code]}}</div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

export default {
  name: 'updateTimeline',
  setup() {
    let updateTimeLineInfos = reactive([])
    const updateTimelineTitle = reactive([
      {code: 'author', name: '作者'},
      {code: 'action', name: '操作'},
      {code: 'context', name: '操作内容'},
      {code: 'createTime', name: '创建时间'}
    ])

    onMounted(() => {
      axios.get('/api/turing/update/timeline').then(response => {
        updateTimeLineInfos.value = response.data.result
        console.log(updateTimeLineInfos.value)
      }).catch(error => {
        console.log(error)
      })
    })
    return {updateTimeLineInfos, updateTimelineTitle, onMounted}
  }
}
</script>

<style scoped>
h3 {
  margin: 10px 0px;
}
</style>











